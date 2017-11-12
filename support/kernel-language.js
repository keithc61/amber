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

define(function () {
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

    TraitsBrik.deps = ["event", "behaviors", "methods", "composition", "root"];
    function TraitsBrik (brikz, st) {
        var coreFns = brikz.root.coreFns;
        var SmalltalkObject = brikz.root.Object;
        var setupMethods = brikz.methods.setupMethods;
        var traitMethodChanged = brikz.composition.traitMethodChanged;
        var buildTraitOrClass = brikz.behaviors.buildTraitOrClass;
        var emit = brikz.event.emit;
        var declareEvent = brikz.event.declareEvent;

        function SmalltalkTrait () {
        }

        coreFns.Trait = inherits(SmalltalkTrait, SmalltalkObject);

        SmalltalkTrait.prototype.trait = true;

        defineMethod(SmalltalkTrait, "toString", function () {
            return 'Smalltalk Trait ' + this.name;
        });
        declareEvent("traitAdded");
        defineMethod(SmalltalkTrait, "added", function () {
            emit.traitAdded(this);
        });
        declareEvent("traitRemoved");
        defineMethod(SmalltalkTrait, "removed", function () {
            emit.traitRemoved(this);
        });
        declareEvent("traitMethodAdded");
        defineMethod(SmalltalkTrait, "methodAdded", function (method) {
            var self = this;
            this.traitUsers.forEach(function (each) {
                traitMethodChanged(method.selector, method, self, each);
            });
            emit.traitMethodAdded(method, this);
        });
        declareEvent("traitMethodRemoved");
        defineMethod(SmalltalkTrait, "methodRemoved", function (method) {
            var self = this;
            this.traitUsers.forEach(function (each) {
                traitMethodChanged(method.selector, null, self, each);
            });
            emit.traitMethodRemoved(method, this);
        });

        function traitBuilder (traitName) {
            return {
                name: traitName,
                make: function () {
                    var that = new SmalltalkTrait();
                    // TODO deprecation helper; remove
                    Object.defineProperty(that, "className", {
                        get: function () {
                            console.warn("Use of .className deprecated, use .name");
                            return that.name;
                        },
                        set: function (v) {
                            console.warn("Use of .className= deprecated, use .name=");
                            that.name = v;
                        }
                    });
                    that.name = traitName;
                    that.traitUsers = [];
                    setupMethods(that);
                    return that;
                },
                updateExisting: function (trait) {
                }
            };
        }

        st.addTrait = function (className, category) {
            return buildTraitOrClass(category, traitBuilder(className));
        };
    }

    MethodCompositionBrik.deps = ["methods", "arraySet"];
    function MethodCompositionBrik (brikz, st) {
        var updateMethod = brikz.methods.updateMethod;
        var addElement = brikz.arraySet.addElement;
        var removeElement = brikz.arraySet.removeElement;

        function aliased (selector, method) {
            if (method.selector === selector) return method;
            var result = st.method({
                selector: selector,
                args: method.args,
                protocol: method.protocol,
                source: '"Aliased as ' + selector + '"\n' + method.source,
                messageSends: method.messageSends,
                referencesClasses: method.referencedClasses,
                fn: method.fn
            });
            result.methodClass = method.methodClass;
            return result;
        }

        function deleteKeysFrom (keys, obj) {
            keys.forEach(function (each) {
                delete obj[each];
            });
        }

        function fillTraitTransformation (traitTransformation, obj) {
            // assert(Object.getOwnProperties(obj).length === 0)
            var traitMethods = traitTransformation.trait.methods;
            Object.keys(traitMethods).forEach(function (selector) {
                obj[selector] = traitMethods[selector];
            });
            var traitAliases = traitTransformation.aliases;
            if (traitAliases) {
                Object.keys(traitAliases).forEach(function (aliasSelector) {
                    var aliasedMethod = traitMethods[traitAliases[aliasSelector]];
                    if (aliasedMethod) obj[aliasSelector] = aliased(aliasSelector, aliasedMethod);
                    // else delete obj[aliasSelector]; // semantically correct; optimized away
                });
            }
            var traitExclusions = traitTransformation.exclusions;
            if (traitExclusions) {
                deleteKeysFrom(traitExclusions, obj);
            }
            return obj;
        }

        function buildCompositionChain (traitComposition) {
            return traitComposition.reduce(function (soFar, each) {
                return fillTraitTransformation(each, Object.create(soFar));
            }, null);
        }

        st.setTraitComposition = function (traitComposition, traitOrBehavior) {
            var oldLocalMethods = traitOrBehavior.localMethods,
                newLocalMethods = Object.create(buildCompositionChain(traitComposition));
            Object.keys(oldLocalMethods).forEach(function (selector) {
                newLocalMethods[selector] = oldLocalMethods[selector];
            });
            var selector;
            traitOrBehavior.localMethods = newLocalMethods;
            for (selector in newLocalMethods) {
                updateMethod(selector, traitOrBehavior);
            }
            for (selector in oldLocalMethods) {
                updateMethod(selector, traitOrBehavior);
            }
            (traitOrBehavior.traitComposition || []).forEach(function (each) {
                removeElement(each.trait.traitUsers, traitOrBehavior);
            });
            traitOrBehavior.traitComposition = traitComposition && traitComposition.length ? traitComposition : null;
            (traitOrBehavior.traitComposition || []).forEach(function (each) {
                addElement(each.trait.traitUsers, traitOrBehavior);
            });
        };

        function aliasesOfSelector (selector, traitAliases) {
            if (!traitAliases) return [selector];
            var result = Object.keys(traitAliases).filter(function (aliasSelector) {
                return traitAliases[aliasSelector] === selector
            });
            if (!traitAliases[selector]) result.push(selector);
            return result;
        }

        function applyTraitMethodAddition (selector, method, traitTransformation, obj) {
            var changes = aliasesOfSelector(selector, traitTransformation.aliases);
            changes.forEach(function (aliasSelector) {
                obj[aliasSelector] = aliased(aliasSelector, method);
            });
            var traitExclusions = traitTransformation.exclusions;
            if (traitExclusions) {
                deleteKeysFrom(traitExclusions, obj);
            }
            return changes;
        }

        function applyTraitMethodDeletion (selector, traitTransformation, obj) {
            var changes = aliasesOfSelector(selector, traitTransformation.aliases);
            deleteKeysFrom(changes, obj);
            return changes;
        }

        function traitMethodChanged (selector, method, trait, traitOrBehavior) {
            var traitComposition = traitOrBehavior.traitComposition,
                chain = traitOrBehavior.localMethods,
                changes = [];
            for (var i = traitComposition.length - 1; i >= 0; --i) {
                chain = Object.getPrototypeOf(chain);
                var traitTransformation = traitComposition[i];
                if (traitTransformation.trait !== trait) continue;
                changes.push.apply(changes, method ?
                    applyTraitMethodAddition(selector, method, traitTransformation, chain) :
                    applyTraitMethodDeletion(selector, traitTransformation, chain));
            }
            // assert(chain === null);
            changes.forEach(function (each) {
                updateMethod(each, traitOrBehavior);
            });
        }

        this.traitMethodChanged = traitMethodChanged;
    }

    ClassesBrik.deps = ["root", "event", "behaviors", "methods", "arraySet", "smalltalkGlobals"];
    function ClassesBrik (brikz, st) {
        var SmalltalkRoot = brikz.root.Root;
        var coreFns = brikz.root.coreFns;
        var globals = brikz.smalltalkGlobals.globals;
        var SmalltalkObject = brikz.root.Object;
        var buildTraitOrClass = brikz.behaviors.buildTraitOrClass;
        var setupMethods = brikz.methods.setupMethods;
        var removeTraitOrClass = brikz.behaviors.removeTraitOrClass;
        var addElement = brikz.arraySet.addElement;
        var removeElement = brikz.arraySet.removeElement;
        var emit = brikz.event.emit;
        var declareEvent = brikz.event.declareEvent;

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
            return 'Smalltalk ' + this.name;
        });
        defineMethod(SmalltalkMetaclass, "toString", function () {
            return 'Smalltalk Metaclass ' + this.instanceClass.name;
        });
        declareEvent("classAdded");
        defineMethod(SmalltalkClass, "added", function () {
            addSubclass(this);
            emit.classAdded(this);
        });
        declareEvent("classRemoved");
        defineMethod(SmalltalkClass, "removed", function () {
            emit.classRemoved(this);
            removeSubclass(this);
        });
        declareEvent("behaviorMethodAdded");
        defineMethod(SmalltalkBehavior, "methodAdded", function (method) {
            emit.behaviorMethodAdded(method, this);
        });
        declareEvent("behaviorMethodRemove");
        defineMethod(SmalltalkBehavior, "methodRemoved", function (method) {
            emit.behaviorMethodRemoved(method, this);
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

            function klass () {
                var that = metaclass().instanceClass;

                that.superclass = logicalSuperclass;
                that.fn = fn || inherits(function () {
                    }, superclass.fn);
                that.iVarNames = iVarNames || [];

                // TODO deprecation helper; remove
                Object.defineProperty(that, "className", {
                    get: function () {
                        console.warn("Use of .className deprecated, use .name");
                        return that.name;
                    },
                    set: function (v) {
                        console.warn("Use of .className= deprecated, use .name=");
                        that.name = v;
                    }
                });
                that.name = className;
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
                name: className,
                make: klass,
                updateExisting: function (klass) {
                    if (klass.superclass == logicalSuperclass && (!fn || fn === klass.fn)) {
                        if (iVarNames) klass.iVarNames = iVarNames;
                    } else throw new Error("Incompatible change of class: " + klass.name);
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

        st.addClass = function (className, superclass, iVarNames, category) {
            // While subclassing nil is allowed, it might be an error, so
            // warn about it.
            if (typeof superclass === 'undefined' || superclass && superclass.a$nil) {
                console.warn('Compiling ' + className + ' as a subclass of `nil`. A dependency might be missing.');
            }
            return buildTraitOrClass(category, classBuilder(className, superclass, iVarNames, coreFns[className]));
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

    /* Making smalltalk that can load */

    function configureWithHierarchy (brikz) {
        brikz.traits = TraitsBrik;
        brikz.composition = MethodCompositionBrik;
        brikz.classes = ClassesBrik;

        brikz.rebuild();
    }

    return configureWithHierarchy;
});
