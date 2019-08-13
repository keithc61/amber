//jshint eqnull:true

define(['./kernel-goodies'], function ($goodies) {
    "use strict";

    var inherits = $goodies.inherits;
    var declareJsMethod = $goodies.declareJsMethod;
    var addElement = $goodies.addElement;
    var removeElement = $goodies.removeElement;

    MethodCompositionBrik.deps = ["methods"];

    function MethodCompositionBrik (brikz, st) {
        var updateMethod = brikz.methods.updateMethod;

        function aliased (selector, method) {
            var result = st.method(method, method.instantiateFn);
            if (method.selector !== selector) {
                result.selector = selector;
                result.source = '"Aliased as ' + selector + '"\n' + method.source;
            }
            result.owner = method.owner;
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
                obj[selector] = aliased(selector, traitMethods[selector]);
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

    function LanguageFactory (specialConstructors, emit) {
        function declareEvent (name) {
            declareJsMethod(emit, name);
        }

        TraitsBrik.deps = ["behaviors", "methods", "composition", "root"];

        function TraitsBrik (brikz, st) {
            var SmalltalkObject = brikz.root.Object;
            var setupMethods = brikz.methods.setupMethods;
            var traitMethodChanged = brikz.composition.traitMethodChanged;
            var buildTraitOrClass = brikz.behaviors.buildTraitOrClass;

            function SmalltalkTrait () {
            }

            specialConstructors.Trait = inherits(SmalltalkTrait, SmalltalkObject);

            SmalltalkTrait.prototype.trait = true;
            declareJsMethod(SmalltalkTrait.prototype, "toString");
            declareJsMethod(SmalltalkTrait.prototype, "added");
            declareJsMethod(SmalltalkTrait.prototype, "removed");
            declareJsMethod(SmalltalkTrait.prototype, "methodAdded");
            declareJsMethod(SmalltalkTrait.prototype, "methodRemoved");

            SmalltalkTrait.prototype.toString = function () {
                return 'Smalltalk Trait ' + this.name;
            };

            declareEvent("traitAdded");
            SmalltalkTrait.prototype.added = function () {
                emit.traitAdded(this);
            };

            declareEvent("traitRemoved");
            SmalltalkTrait.prototype.removed = function () {
                emit.traitRemoved(this);
            };

            declareEvent("traitMethodAdded");
            SmalltalkTrait.prototype.methodAdded = function (method) {
                var self = this;
                this.traitUsers.forEach(function (each) {
                    traitMethodChanged(method.selector, method, self, each);
                });
                emit.traitMethodAdded(method, this);
            };

            declareEvent("traitMethodRemoved");
            SmalltalkTrait.prototype.methodRemoved = function (method) {
                var self = this;
                this.traitUsers.forEach(function (each) {
                    traitMethodChanged(method.selector, null, self, each);
                });
                emit.traitMethodRemoved(method, this);
            };

            function traitBuilder (traitName) {
                return {
                    name: traitName,
                    make: function () {
                        var that = new SmalltalkTrait();
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

        ClassesBrik.deps = ["root", "behaviors", "methods", "nil"];

        function ClassesBrik (brikz, st) {
            var SmalltalkRoot = brikz.root.Root;
            var SmalltalkObject = brikz.root.Object;
            var buildTraitOrClass = brikz.behaviors.buildTraitOrClass;
            var setupMethods = brikz.methods.setupMethods;
            var removeTraitOrClass = brikz.behaviors.removeTraitOrClass;
            var nilAsReceiver = brikz.nil.nilAsReceiver;

            function SmalltalkBehavior () {
            }

            function SmalltalkClass () {
            }

            function SmalltalkMetaclass () {
            }

            specialConstructors.Behavior = inherits(SmalltalkBehavior, SmalltalkObject);
            specialConstructors.Class = inherits(SmalltalkClass, SmalltalkBehavior);
            specialConstructors.Metaclass = inherits(SmalltalkMetaclass, SmalltalkBehavior);

            // Fake root class of the system.
            // Effective superclass of all classes created with `nil subclass: ...`.
            var nilAsClass = this.nilAsClass = {
                fn: SmalltalkRoot,
                subclasses: [],
                a$cls: {fn: SmalltalkClass}
            };

            SmalltalkMetaclass.prototype.meta = true;
            declareJsMethod(SmalltalkClass.prototype, "toString");
            declareJsMethod(SmalltalkMetaclass.prototype, "toString");
            declareJsMethod(SmalltalkClass.prototype, "added");
            declareJsMethod(SmalltalkClass.prototype, "removed");
            declareJsMethod(SmalltalkBehavior.prototype, "methodAdded");
            declareJsMethod(SmalltalkBehavior.prototype, "methodRemoved");

            SmalltalkClass.prototype.toString = function () {
                return 'Smalltalk ' + this.name;
            };

            SmalltalkMetaclass.prototype.toString = function () {
                return 'Smalltalk Metaclass ' + this.instanceClass.name;
            };

            declareEvent("classAdded");
            SmalltalkClass.prototype.added = function () {
                registerToSuperclass(this);
                emit.classAdded(this);
            };

            declareEvent("classRemoved");
            SmalltalkClass.prototype.removed = function () {
                emit.classRemoved(this);
                unregisterFromSuperclass(this);
            };

            declareEvent("behaviorMethodAdded");
            SmalltalkBehavior.prototype.methodAdded = function (method) {
                emit.behaviorMethodAdded(method, this);
            };

            declareEvent("behaviorMethodRemoved");
            SmalltalkBehavior.prototype.methodRemoved = function (method) {
                emit.behaviorMethodRemoved(method, this);
            };

            // TODO remove, ["@foo"] backward compatibility
            function installIvarCompat (klass) {
                var ivars = klass.slots;
                ivars.forEach(function (ivar) {
                    Object.defineProperty(klass.fn.prototype, "@" + ivar, {
                        get: function () {
                            return this[ivar];
                        },
                        set: function (value) {
                            return this[ivar] = value;
                        },
                        enumerable: false,
                        configurable: true
                    });
                });
            }

            this.installIvarCompat = installIvarCompat;

            function setSlots (klass, slots) {
                slots.forEach(function (name) {
                    if (!name.match(/^[a-zA-Z][a-zA-Z0-9]*$/))
                        throw new Error("Wrong identifier name: " + name);
                });

                klass.slots = slots;
                installIvarCompat(klass);
            }

            st.setSlots = setSlots;

            // TODO remove, .iVarNames backward compatibility
            Object.defineProperty(SmalltalkBehavior.prototype, "iVarNames", {
                enumerable: true,
                configurable: true,
                get: function () {
                    return this.slots;
                },
                set: function (instanceVariableNames) {
                    setSlots(this, instanceVariableNames);
                }
            });

            this.bootstrapHierarchy = function (realClass) {
                nilAsClass.a$cls = realClass;
                nilAsClass.subclasses.forEach(function (each) {
                    each.a$cls.superclass = realClass;
                    registerToSuperclass(each.a$cls);
                });
            };

            /* Smalltalk class creation. A class is an instance of an automatically
             created metaclass object. Newly created classes (not their metaclass)
             should be added to the system, see smalltalk.addClass().
             Superclass linking is *not* handled here, see api.initialize()  */

            function classBuilder (className, superclass, fn) {
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
                    that.slots = [];

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
                    that.slots = [];

                    that.instanceClass = new that.fn();

                    wireKlass(that);
                    setupMethods(that);
                    return that;
                }

                return {
                    name: className,
                    make: klass,
                    updateExisting: function (klass) {
                        if (logicalSuperclass == null && klass.superclass != null || logicalSuperclass != null && klass.superclass !== logicalSuperclass || fn != null && fn !== klass.fn)
                            throw new Error("Incompatible change of class: " + klass.name);
                    }
                };
            }

            function wireKlass (klass) {
                Object.defineProperty(klass.fn.prototype, "a$cls", {
                    value: klass,
                    enumerable: false, configurable: true, writable: true
                });
            }

            this.wireKlass = wireKlass;

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

            /* Add a class to the system, creating a new one if needed.
             A Package is lazily created if one with given name does not exist. */

            st.addClass = function (className, superclass, category) {
                // TODO remove, backward compatibility
                if (arguments[3]) {
                    var added = st.addClass(className, superclass, arguments[3]);
                    setSlots(added, category);
                    return added;
                }

                // While subclassing nil is allowed, it might be an error, so
                // warn about it.
                if (typeof superclass === 'undefined' || superclass && superclass.a$nil) {
                    console.warn('Compiling ' + className + ' as a subclass of `nil`. A dependency might be missing.');
                }
                return buildTraitOrClass(category, classBuilder(className, superclass, specialConstructors[className]));
            };

            st.removeClass = removeTraitOrClass;

            function registerToSuperclass (klass) {
                addElement((klass.superclass || nilAsClass).subclasses, klass);
            }

            function unregisterFromSuperclass (klass) {
                removeElement((klass.superclass || nilAsClass).subclasses, klass);
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

        function configure (brikz) {
            brikz.traits = TraitsBrik;
            brikz.composition = MethodCompositionBrik;
            brikz.classes = ClassesBrik;

            brikz();
        }

        return {configure: configure};
    }

    return LanguageFactory;
});
