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
 | Copyright (c) 2012-2017
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

define(['./compatibility' /* TODO remove */], function () {
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

    function defineMethod (klass, name, method) {
        Object.defineProperty(klass.prototype, name, {
            value: method,
            enumerable: false, configurable: true, writable: true
        });
    }

    TraitsBrik.deps = ["behaviors", "composition", "arraySet", "root"];
    function TraitsBrik (brikz, st) {
        var coreFns = brikz.root.coreFns;
        var SmalltalkObject = brikz.root.Object;
        var setupMethods = brikz.composition.setupMethods;
        var traitMethodChanged = brikz.composition.traitMethodChanged;
        var buildTraitOrClass = brikz.behaviors.buildTraitOrClass;
        var addElement = brikz.arraySet.addElement;
        var removeElement = brikz.arraySet.removeElement;

        function SmalltalkTrait () {
        }

        coreFns.Trait = inherits(SmalltalkTrait, SmalltalkObject);

        SmalltalkTrait.prototype.trait = true;

        defineMethod(SmalltalkTrait, "toString", function () {
            return 'Smalltalk Trait ' + this.className;
        });
        defineMethod(SmalltalkTrait, "added", function () {
            if (st._traitAdded) st._traitAdded(this);
        });
        defineMethod(SmalltalkTrait, "removed", function () {
            if (st._traitRemoved) st._traitRemoved(this);
        });
        defineMethod(SmalltalkTrait, "methodAdded", function (method) {
            var self = this;
            this.traitUsers.forEach(function (each) {
                traitMethodChanged(method.selector, method, self, each);
            });
            if (st._traitMethodAdded) st._traitMethodAdded(method, this);
        });
        defineMethod(SmalltalkTrait, "methodRemoved", function (method) {
            var self = this;
            this.traitUsers.forEach(function (each) {
                traitMethodChanged(method.selector, null, self, each);
            });
            if (st._traitMethodRemoved) st._traitMethodRemoved(method, this);
        });
        defineMethod(SmalltalkTrait, "addUser", function (traitOrBehavior) {
            addElement(this.traitUsers, traitOrBehavior);
        });
        defineMethod(SmalltalkTrait, "removeUser", function (traitOrBehavior) {
            removeElement(this.traitUsers, traitOrBehavior);
        });

        function traitBuilder (className) {
            return {
                className: className,
                make: function (pkg) {
                    var that = new SmalltalkTrait();
                    that.className = className;
                    that.pkg = pkg;
                    that.traitUsers = [];
                    setupMethods(that);
                    return that;
                },
                updateExisting: function (trait) {
                }
            };
        }

        st.addTrait = function (className, pkgName) {
            return buildTraitOrClass(pkgName, traitBuilder(className));
        };
    }

    ClassesBrik.deps = ["root", "behaviors", "composition", "arraySet", "smalltalkGlobals"];
    function ClassesBrik (brikz, st) {
        var SmalltalkRoot = brikz.root.Root;
        var coreFns = brikz.root.coreFns;
        var globals = brikz.smalltalkGlobals.globals;
        var SmalltalkObject = brikz.root.Object;
        var buildTraitOrClass = brikz.behaviors.buildTraitOrClass;
        var setupMethods = brikz.composition.setupMethods;
        var removeTraitOrClass = brikz.behaviors.removeTraitOrClass;
        var addElement = brikz.arraySet.addElement;
        var removeElement = brikz.arraySet.removeElement;

        function SmalltalkBehavior () {
        }

        function SmalltalkClass () {
        }

        function SmalltalkMetaclass () {
        }

        coreFns.Behavior = inherits(SmalltalkBehavior, SmalltalkObject);
        coreFns.Class = inherits(SmalltalkClass, SmalltalkBehavior);
        coreFns.Metaclass = inherits(SmalltalkMetaclass, SmalltalkBehavior);

        // Fake root class of the system.
        // Effective superclass of all classes created with `nil subclass: ...`.
        var nilAsClass = this.nilAsClass = {
            fn: SmalltalkRoot,
            a$cls: {fn: SmalltalkClass},
            klass: {fn: SmalltalkClass}
        };

        SmalltalkMetaclass.prototype.meta = true;

        defineMethod(SmalltalkClass, "toString", function () {
            return 'Smalltalk ' + this.className;
        });
        defineMethod(SmalltalkMetaclass, "toString", function () {
            return 'Smalltalk Metaclass ' + this.instanceClass.className;
        });
        defineMethod(SmalltalkClass, "added", function () {
            addSubclass(this);
            if (st._classAdded) st._classAdded(this);
        });
        defineMethod(SmalltalkClass, "removed", function () {
            if (st._classRemoved) st._classRemoved(this);
            removeSubclass(this);
        });
        defineMethod(SmalltalkBehavior, "methodAdded", function (method) {
            if (st._behaviorMethodAdded) st._behaviorMethodAdded(method, this);
        });
        defineMethod(SmalltalkBehavior, "methodRemoved", function (method) {
            if (st._behaviorMethodRemoved) st._behaviorMethodRemoved(method, this);
        });

        this.bootstrapHierarchy = function () {
            var nilSubclasses = [globals.ProtoObject];
            nilAsClass.a$cls = nilAsClass.klass = globals.Class;
            nilSubclasses.forEach(function (each) {
                each.a$cls.superclass = globals.Class;
                addSubclass(each.a$cls);
            });
        };

        /* Smalltalk class creation. A class is an instance of an automatically
         created metaclass object. Newly created classes (not their metaclass)
         should be added to the system, see smalltalk.addClass().
         Superclass linking is *not* handled here, see api.initialize()  */

        function classBuilder (className, superclass, iVarNames, fn) {
            var logicalSuperclass = superclass;
            if (superclass == null || superclass.a$nil) {
                superclass = nilAsClass;
                logicalSuperclass = null;
            }

            function klass (pkg) {
                var that = metaclass().instanceClass;

                that.superclass = logicalSuperclass;
                that.fn = fn || inherits(function () {
                    }, superclass.fn);
                that.iVarNames = iVarNames || [];

                that.className = className;
                that.pkg = pkg;
                that.subclasses = [];

                setupMethods(that);
                return that;
            }

            function metaclass () {
                var that = new SmalltalkMetaclass();

                that.superclass = superclass.a$cls;
                that.fn = inherits(function () {
                }, that.superclass.fn);
                that.iVarNames = [];

                that.instanceClass = new that.fn();

                wireKlass(that);
                setupMethods(that);
                return that;
            }

            return {
                className: className,
                make: klass,
                updateExisting: function (klass) {
                    if (klass.superclass == logicalSuperclass && (!fn || fn === klass.fn)) {
                        if (iVarNames) klass.iVarNames = iVarNames;
                    } else throw new Error("Incompatible change of class: " + klass.className);
                }
            };
        }

        function wireKlass (klass) {
            Object.defineProperty(klass.fn.prototype, "a$cls", {
                value: klass,
                enumerable: false, configurable: true, writable: true
            });
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
            if (typeof superclass === 'undefined' || superclass && superclass.a$nil) {
                console.warn('Compiling ' + className + ' as a subclass of `nil`. A dependency might be missing.');
            }
            return buildTraitOrClass(pkgName, classBuilder(className, superclass, iVarNames, coreFns[className]));
        };

        st.removeClass = removeTraitOrClass;

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
                    return each.a$cls;
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
        this.nilAsValue = this.nilAsReceiver; // TODO null

        // Adds an `a$nil` (and legacy `isNil`) property to the `nil` object.  When sending
        // nil objects from one environment to another, doing
        // `anObject == nil` (in JavaScript) does not always answer
        // true as the referenced nil object might come from the other
        // environment.
        Object.defineProperty(this.nilAsReceiver, 'a$nil', {
            value: true,
            enumerable: false, configurable: false, writable: false
        });
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
            else if (o.a$cls != null) return o;
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
