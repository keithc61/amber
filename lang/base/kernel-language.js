//jshint eqnull:true

define(['./junk-drawer'], function ($goodies) {
    "use strict";

    var inherits = $goodies.inherits;
    var declareJsMethod = $goodies.declareJsMethod;
    var addElement = $goodies.addElement;
    var removeElement = $goodies.removeElement;
    var extend = $goodies.extend;
    var deleteKeysFrom = $goodies.deleteKeysFrom;

    MethodCompositionBrik.deps = ["methods"];

    function MethodCompositionBrik (brikz, st) {
        var setLocalMethods = brikz.methods.setLocalMethods;
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
                newLocalMethodsTemplate = Object.create(buildCompositionChain(traitComposition));
            setLocalMethods(traitOrBehavior, extend(newLocalMethodsTemplate, oldLocalMethods));
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
                return traitAliases[aliasSelector] === selector;
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

        TraitsBrik.deps = ["behaviorals", "methods", "composition", "root"];

        function TraitsBrik (brikz, st) {
            var SmalltalkObject = brikz.root.Object;
            var setupMethods = brikz.methods.setupMethods;
            var traitMethodChanged = brikz.composition.traitMethodChanged;
            var buildTraitOrClass = brikz.behaviorals.buildTraitOrClass;

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

            SmalltalkTrait.prototype.methodAdded = function (method) {
                propagateMethodChange(this, method.selector, method);
            };

            SmalltalkTrait.prototype.methodRemoved = function (method) {
                propagateMethodChange(this, method.selector, null);
            };

            function propagateMethodChange (trait, selector, method) {
                trait.traitUsers.forEach(function (each) {
                    traitMethodChanged(selector, method, trait, each);
                });
            }

            function traitBuilder (traitName, category) {
                return {
                    name: traitName,
                    make: function () {
                        var that = new SmalltalkTrait();
                        that.name = traitName;
                        that.category = category;
                        that.traitUsers = [];
                        setupMethods(that);
                        return that;
                    },
                    updateExisting: function (trait) {
                    }
                };
            }

            st.addTrait = function (className, category) {
                return buildTraitOrClass(traitBuilder(className, category));
            };
        }

        ClassModelBrik.deps = ["root", "nil"];

        function ClassModelBrik (brikz, st) {
            var SmalltalkRoot = brikz.root.Root;
            var SmalltalkObject = brikz.root.Object;
            var nilAsReceiver = brikz.nil.nilAsReceiver;

            function SmalltalkBehavior () {
            }

            function SmalltalkClass () {
            }

            function SmalltalkMetaclass () {
            }

            this.newMetaclass = function () {
                return new SmalltalkMetaclass();
            };

            specialConstructors.Behavior = inherits(SmalltalkBehavior, SmalltalkObject);
            specialConstructors.Class = inherits(SmalltalkClass, SmalltalkBehavior);
            specialConstructors.Metaclass = inherits(SmalltalkMetaclass, SmalltalkBehavior);

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

            declareEvent("classCreated");
            SmalltalkClass.prototype.added = function () {
                registerToSuperclass(this);
                emit.classCreated(this);
            };

            SmalltalkClass.prototype.removed = function () {
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

            // Fake root class of the system.
            // Effective superclass of all classes created with `nil subclass: ...`.
            var nilAsClass = this.nilAsClass = {
                fn: SmalltalkRoot,
                subclasses: [],
                a$cls: {fn: SmalltalkClass, methods: Object.create(null)}
            };

            this.bootstrapHierarchy = function (realClass) {
                nilAsClass.a$cls = realClass;
                nilAsClass.subclasses.forEach(function (each) {
                    each.a$cls.superclass = realClass;
                    Object.setPrototypeOf(each.a$cls.methods, realClass.methods);
                    registerToSuperclass(each.a$cls);
                });
            };

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

            // TODO remove, .iVarNames backward compatibility
            this.__init__ = function () {
                brikz.classConstruction.iVarNamesCompat(SmalltalkBehavior);
            };
        }

        ClassConstructionBrik.deps = ["classModel", "behaviorals", "methods"];

        function ClassConstructionBrik (brikz, st) {
            var nilAsClass = brikz.classModel.nilAsClass;
            var newMetaclass = brikz.classModel.newMetaclass;
            var buildTraitOrClass = brikz.behaviorals.buildTraitOrClass;
            var setupMethods = brikz.methods.setupMethods;
            var removeTraitOrClass = brikz.behaviorals.removeTraitOrClass;

            declareEvent("slotsChanged");

            function setSlots (klass, slots) {
                slots.forEach(function (name) {
                    if (!name.match(/^[a-zA-Z][a-zA-Z0-9]*$/))
                        throw new Error("Wrong identifier name: " + name);
                });

                klass.slots = slots;
                emit.slotsChanged(klass);
            }

            st.setSlots = setSlots;

            // TODO remove, .iVarNames backward compatibility
            this.iVarNamesCompat = function (SmalltalkBehavior) {
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
            };

            /* Smalltalk class creation. A class is an instance of an automatically
             created metaclass object. Newly created classes (not their metaclass)
             should be added to the system, see smalltalk.addClass().
             Superclass linking is *not* handled here, see api.initialize()  */

            function classBuilder (className, superclass, category, fn) {
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
                    that.category = category;
                    that.subclasses = [];

                    setupMethods(that);
                    return that;
                }

                function metaclass () {
                    var that = newMetaclass();

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

            /* Add a class to the system, creating a new one if needed.
             A Package is lazily created if one with given name does not exist. */

            st.addClass = function (className, superclass, category) {
                // TODO remove, backward compatibility (note: only deprecated as of this note)
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
                return buildTraitOrClass(classBuilder(className, superclass, category, specialConstructors[className]));
            };

            st.removeClass = removeTraitOrClass;
        }

        /* Making smalltalk that can load */

        function configure (brikz) {
            brikz.traits = TraitsBrik;
            brikz.composition = MethodCompositionBrik;
            brikz.classModel = ClassModelBrik;
            brikz.classConstruction = ClassConstructionBrik;

            brikz();
        }

        return {configure: configure};
    }

    return LanguageFactory;
});
