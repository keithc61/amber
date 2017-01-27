/* ====================================================================
 |
 |   Amber Smalltalk
 |   http://amber-lang.net
 |
 ======================================================================

 ======================================================================
 |
 | Copyright (c) 2010-2014
 | Nicolas Petton <petton.nicolas@gmail.com>
 |
 | Copyright (c) 2012-2016
 | The Amber team https://lolg.it/org/amber/members
 | Amber contributors (see /CONTRIBUTORS)
 |
 | Amber is released under the MIT license
 |
 | Permission is hereby granted, free of charge, to any person obtaining
 | a copy of this software and associated documentation files (the
 | 'Software'), to deal in the Software without restriction, including
 | without limitation the rights to use, copy, modify, merge, publish,
 | distribute, sublicense, and/or sell copies of the Software, and to
 | permit persons to whom the Software is furnished to do so, subject to
 | the following conditions:
 |
 | The above copyright notice and this permission notice shall be
 | included in all copies or substantial portions of the Software.
 |
 | THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
 | EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 | MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 | IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
 | CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 | TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 | SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 |
 ==================================================================== */

//jshint eqnull:true

define(['./compatibility'], function () {
    "use strict";

    function inherits (child, parent) {
        child.prototype = Object.create(parent.prototype, {
            constructor: {
                value: child,
                enumerable: false, configurable: true, writable: true
            }
        });
        return child;
    }

    TraitsBrik.deps = ["behaviors", "root"];
    function TraitsBrik (brikz, st) {
        var coreFns = brikz.root.coreFns;
        var SmalltalkBehaviorBody = brikz.behaviors.BehaviorBody;
        var setupBehavior = brikz.behaviors.setupBehavior;
        var buildBehaviorBody = brikz.behaviors.buildBehaviorBody;

        function SmalltalkTrait () {
        }

        coreFns.Trait = inherits(SmalltalkTrait, SmalltalkBehaviorBody);

        SmalltalkTrait.prototype.toString = function () {
            return 'Smalltalk Trait ' + this.className;
        };

        SmalltalkTrait.prototype.trait = true;

        SmalltalkTrait.prototype.added = function () {
            if (st._traitAdded) st._traitAdded(this);
        };

        SmalltalkTrait.prototype.removed = function () {
            if (st._traitRemoved) st._traitRemoved(this);
        };

        SmalltalkTrait.prototype.methodAdded = function (method) {
            if (st._traitMethodAdded) st._traitMethodAdded(method, this);
        };

        SmalltalkTrait.prototype.methodRemoved = function (method) {
            if (st._traitMethodRemoved) st._traitMethodRemoved(method, this);
        };

        function traitBuilder (className) {
            return {
                className: className,
                make: function (pkg) {
                    var that = new SmalltalkTrait();
                    that.className = className;
                    setupBehavior(that, pkg);
                    return that;
                },
                updateExisting: function (trait, pkg) {
                    if (pkg) trait.pkg = pkg;
                    return true;
                },
                rebuilderForExisting: function (trait) {
                    return traitBuilder(className);
                }
            };
        }

        st.addTrait = function (className, pkgName) {
            return buildBehaviorBody(pkgName, traitBuilder(className));
        };
    }

    ClassesBrik.deps = ["root", "behaviors", "arraySet", "smalltalkGlobals"];
    function ClassesBrik (brikz, st) {
        var SmalltalkRoot = brikz.root.Root;
        var coreFns = brikz.root.coreFns;
        var globals = brikz.smalltalkGlobals.globals;
        var SmalltalkBehaviorBody = brikz.behaviors.BehaviorBody;
        var buildBehaviorBody = brikz.behaviors.buildBehaviorBody;
        var setupBehavior = brikz.behaviors.setupBehavior;
        var removeBehaviorBody = brikz.behaviors.removeBehaviorBody;
        var addElement = brikz.arraySet.addElement;
        var removeElement = brikz.arraySet.removeElement;

        function SmalltalkBehavior () {
        }

        function SmalltalkClass () {
        }

        function SmalltalkMetaclass () {
        }

        coreFns.Behavior = inherits(SmalltalkBehavior, SmalltalkBehaviorBody);
        coreFns.Class = inherits(SmalltalkClass, SmalltalkBehavior);
        coreFns.Metaclass = inherits(SmalltalkMetaclass, SmalltalkBehavior);

        // Fake root class of the system.
        // Effective superclass of all classes created with `nil subclass: ...`.
        var nilAsClass = this.nilAsClass = {fn: SmalltalkRoot, klass: {fn: SmalltalkClass}};

        SmalltalkClass.prototype.toString = function () {
            return 'Smalltalk ' + this.className;
        };

        SmalltalkMetaclass.prototype.toString = function () {
            return 'Smalltalk Metaclass ' + this.instanceClass.className;
        };

        SmalltalkMetaclass.prototype.meta = true;

        SmalltalkClass.prototype.added = function () {
            addSubclass(this);
            if (st._classAdded) st._classAdded(this);
        };

        SmalltalkClass.prototype.removed = function () {
            if (st._classRemoved) st._classRemoved(this);
            removeSubclass(this);
        };

        SmalltalkBehavior.prototype.methodAdded = function (method) {
            if (st._methodAdded) st._methodAdded(method, this);
        };

        SmalltalkBehavior.prototype.methodRemoved = function (method) {
            if (st._methodRemoved) st._methodRemoved(method, this);
        };

        this.bootstrapHierarchy = function () {
            var nilSubclasses = [globals.ProtoObject];
            nilAsClass.klass = globals.Class;
            nilSubclasses.forEach(function (each) {
                each.klass.superclass = globals.Class;
                addSubclass(each.klass);
            });
        };

        /* Smalltalk class creation. A class is an instance of an automatically
         created metaclass object. Newly created classes (not their metaclass)
         should be added to the system, see smalltalk.addClass().
         Superclass linking is *not* handled here, see api.initialize()  */

        function klass (spec) {
            var setSuperClass = spec.superclass;
            if (!spec.superclass) {
                spec.superclass = nilAsClass;
            }
            var meta = metaclass(spec);
            var that = meta.instanceClass;

            that.superclass = setSuperClass;
            that.fn = spec.fn || inherits(function () {
                }, spec.superclass.fn);
            that.iVarNames = spec.iVarNames || [];

            that.className = spec.className;
            that.subclasses = [];

            setupBehavior(that, spec.pkg);
            return that;
        }

        function metaclass (spec) {
            var that = new SmalltalkMetaclass();

            that.superclass = spec.superclass.klass;
            that.fn = inherits(function () {
            }, that.superclass.fn);
            that.iVarNames = [];

            that.instanceClass = new that.fn();

            wireKlass(that);
            setupBehavior(that);
            return that;
        }

        function wireKlass (klass) {
            Object.defineProperty(klass.fn.prototype, "klass", {
                value: klass,
                enumerable: false, configurable: true, writable: true
            });
        }

        this.wireKlass = wireKlass;

        /* Add a class to the system, creating a new one if needed.
         A Package is lazily created if one with given name does not exist. */

        st.addClass = function (className, superclass, iVarNames, pkgName) {
            // While subclassing nil is allowed, it might be an error, so
            // warn about it.
            if (typeof superclass == 'undefined' || superclass && superclass.isNil) {
                console.warn('Compiling ' + className + ' as a subclass of `nil`. A dependency might be missing.');
            }
            return buildBehaviorBody(pkgName, classBuilder(className, superclass, iVarNames, coreFns[className]));
        };

        function classBuilder (className, superclass, iVarNames, fn) {
            if (superclass == null || superclass.isNil) {
                superclass = null;
            }
            return {
                className: className,
                make: function (pkg) {
                    return klass({
                        className: className,
                        pkg: pkg,
                        superclass: superclass,
                        iVarNames: iVarNames,
                        fn: fn
                    });
                },
                updateExisting: function (klass, pkg) {
                    if (klass.superclass == superclass && !fn) {
                        if (iVarNames) klass.iVarNames = iVarNames;
                        if (pkg) klass.pkg = pkg;
                        return true;
                    }
                    return false;
                },
                rebuilderForExisting: function (klass) {
                    return classBuilder(className, superclass, iVarNames || klass.iVarNames, fn);
                }
            };
        }

        st.removeClass = removeBehaviorBody;

        function addSubclass (klass) {
            if (klass.superclass) {
                addElement(klass.superclass.subclasses, klass);
            }
        }

        function removeSubclass (klass) {
            if (klass.superclass) {
                removeElement(klass.superclass.subclasses, klass);
            }
        }

        function metaSubclasses (metaclass) {
            return metaclass.instanceClass.subclasses
                .filter(function (each) {
                    return !each.meta;
                })
                .map(function (each) {
                    return each.klass;
                });
        }

        st.metaSubclasses = metaSubclasses;

        st.traverseClassTree = function (klass, fn) {
            var queue = [klass], sentinel = {};
            for (var i = 0; i < queue.length; ++i) {
                var item = queue[i];
                if (fn(item, sentinel) === sentinel) continue;
                var subclasses = item.meta ? metaSubclasses(item) : item.subclasses;
                queue.push.apply(queue, subclasses);
            }
        };
    }

    NilBrik.deps = ["root"];
    function NilBrik (brikz, st) {
        var SmalltalkObject = brikz.root.Object;
        var coreFns = brikz.root.coreFns;

        function SmalltalkNil () {
        }

        coreFns.UndefinedObject = inherits(SmalltalkNil, SmalltalkObject);

        this.nilAsReceiver = new SmalltalkNil();

        // Adds an `isNil` property to the `nil` object.  When sending
        // nil objects from one environment to another, doing
        // `anObject == nil` (in JavaScript) does not always answer
        // true as the referenced nil object might come from the other
        // environment.
        Object.defineProperty(this.nilAsReceiver, 'isNil', {
            value: true,
            enumerable: false, configurable: false, writable: false
        });
    }

    /* Defines asReceiver to be present at load time */
    /* (logically it belongs more to PrimitiveBrik) */
    AsReceiverBrik.deps = ["nil"];
    function AsReceiverBrik (brikz, st) {
        var nilAsReceiver = brikz.nil.nilAsReceiver;

        /**
         * This function is used all over the compiled amber code.
         * It takes any value (JavaScript or Smalltalk)
         * and returns a proper Amber Smalltalk receiver.
         *
         * null or undefined -> nilAsReceiver,
         * object having Smalltalk signature -> unchanged,
         * otherwise wrapped foreign (JS) object
         */
        this.asReceiver = function (o) {
            if (o == null) return nilAsReceiver;
            else if (o.klass != null) return o;
            else return st.wrapJavaScript(o);
        };
    }

    /* Making smalltalk that can load */

    function configureWithHierarchy (brikz) {
        brikz.traits = TraitsBrik;
        brikz.classes = ClassesBrik;
        brikz.nil = NilBrik;
        brikz.asReceiver = AsReceiverBrik;

        brikz.rebuild();
    }

    return configureWithHierarchy;
});
