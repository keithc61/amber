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

    function SmalltalkGlobalsBrik (brikz, st) {
        var globals = Object.create(global);
        globals.SmalltalkSettings = {};

        this.globals = globals;
    }

    function EventBrik (brikz, st) {
        var emit = {};

        this.emit = emit;

        this.declareEvent = function (event) {
            if (!emit[event]) emit[event] = function () {
            };
        }
    }

    function RootBrik (brikz, st) {
        /* Smalltalk foundational objects */

        var coreFns = this.coreFns = {};

        /* SmalltalkRoot is the hidden root of the normal Amber hierarchy.
         All objects including `ProtoObject` inherit from SmalltalkRoot.
         Detached roots (eg. wrapped JS classes like Number or Date)
         do not directly inherit from SmalltalkRoot, but employ a workaround.*/
        function SmalltalkRoot () {
        }

        function SmalltalkProtoObject () {
        }

        function SmalltalkObject () {
        }

        coreFns.ProtoObject = inherits(SmalltalkProtoObject, SmalltalkRoot);
        coreFns.Object = inherits(SmalltalkObject, SmalltalkProtoObject);

        this.Root = SmalltalkRoot;
        this.Object = SmalltalkObject;
    }

    function SelectorsBrik (brikz, st) {
        var selectorSet = Object.create(null);
        var selectors = this.selectors = [];

        this.registerSelector = function (stSelector) {
            if (selectorSet[stSelector]) return false;
            selectors.push(stSelector);
            return selectorSet[stSelector] = true;
        };

        st.allSelectors = function () {
            return selectors;
        };
    }

    function PackagesBrik (brikz, st) {
        st.packages = st.packageDescriptors = {};

        /* Add a package load descriptor to the system */
        st.addPackage = function (name, properties) {
            if (!name) return null;
            return st.packageDescriptors[name] = {properties: properties};
        };
    }

    BehaviorsBrik.deps = ["root", "smalltalkGlobals", "arraySet"];
    function BehaviorsBrik (brikz, st) {
        var globals = brikz.smalltalkGlobals.globals;
        var addElement = brikz.arraySet.addElement;
        var removeElement = brikz.arraySet.removeElement;

        /* Smalltalk classes and traits */

        var traitsOrClasses = [];

        this.buildTraitOrClass = function (category, builder) {
            var traitOrClass = globals.hasOwnProperty(builder.name) && globals[builder.name];
            if (traitOrClass) {
                builder.updateExisting(traitOrClass);
            } else {
                traitOrClass = builder.make();
                traitOrClass.category = category;
                addTraitOrClass(traitOrClass);
            }

            return traitOrClass;
        };

        function addTraitOrClass (traitOrClass) {
            globals[traitOrClass.name] = traitOrClass;
            addElement(traitsOrClasses, traitOrClass);
            traitOrClass.added();
        }

        function removeTraitOrClass (traitOrClass) {
            traitOrClass.removed();
            removeElement(traitsOrClasses, traitOrClass);
            delete globals[traitOrClass.name];
        }

        this.removeTraitOrClass = removeTraitOrClass;

        st.traitsOrClasses = this.traitsOrClasses = traitsOrClasses;
    }

    MethodsBrik.deps = ["event", "selectors", "root"];
    function MethodsBrik (brikz, st) {
        var registerSelector = brikz.selectors.registerSelector;
        var SmalltalkObject = brikz.root.Object;
        var coreFns = brikz.root.coreFns;
        var emit = brikz.event.emit;
        var declareEvent = brikz.event.declareEvent;

        function SmalltalkMethod () {
        }

        coreFns.CompiledMethod = inherits(SmalltalkMethod, SmalltalkObject);

        /* Smalltalk method object. To add a method to a class,
         use api.addMethod() */

        st.method = function (spec) {
            var that = new SmalltalkMethod();
            var selector = spec.selector;
            that.selector = selector;
            that.args = spec.args || [];
            that.protocol = spec.protocol;
            that.source = spec.source;
            that.pragmas = spec.pragmas;
            that.messageSends = spec.messageSends || [];
            // TODO remove .referencedClasses, have .referencedGlobals
            that.referencedClasses = spec.referencedClasses || [];
            that.fn = spec.fn;
            return that;
        };

        /* Add/remove a method to/from a class */

        st.addMethod = function (method, traitOrBehavior) {
            if (method.owner != null) {
                throw new Error("addMethod: Method " + method.selector + " already bound to " + method.owner);
            }
            method.owner = traitOrBehavior;
            registerNewSelectors(method);
            traitOrBehavior.localMethods[method.selector] = method;
            updateMethod(method.selector, traitOrBehavior);
        };

        declareEvent("selectorsAdded");

        function registerNewSelectors (method) {
            var newSelectors = [];

            function selectorInUse (stSelector) {
                if (registerSelector(stSelector)) {
                    newSelectors.push(stSelector);
                }
            }

            selectorInUse(method.selector);
            method.messageSends.forEach(selectorInUse);
            emit.selectorsAdded(newSelectors);
        }

        st.removeMethod = function (method, traitOrBehavior) {
            if (traitOrBehavior.localMethods[method.selector] !== method) return;

            delete traitOrBehavior.localMethods[method.selector];
            updateMethod(method.selector, traitOrBehavior);
        };

        this.setupMethods = function (traitOrBehavior) {
            traitOrBehavior.localMethods = Object.create(null);
            traitOrBehavior.methods = Object.create(null);
        };

        declareEvent("methodReplaced");

        function updateMethod (selector, traitOrBehavior) {
            var oldMethod = traitOrBehavior.methods[selector],
                newMethod = traitOrBehavior.localMethods[selector];
            if (oldMethod == null && newMethod == null) {
                console.warn("Removal of nonexistent method " + traitOrBehavior + " >> " + selector);
                return;
            }
            if (newMethod === oldMethod) return;
            if (newMethod != null) {
                traitOrBehavior.methods[selector] = newMethod;
                traitOrBehavior.methodAdded(newMethod);
            } else {
                delete traitOrBehavior.methods[selector];
                traitOrBehavior.methodRemoved(oldMethod);
            }
            emit.methodReplaced(newMethod, oldMethod, traitOrBehavior);
        }

        this.updateMethod = updateMethod;
    }

    function ArraySetBrik (brikz, st) {
        st.addElement = this.addElement = function (array, el) {
            if (typeof el === 'undefined') {
                return;
            }
            if (array.indexOf(el) === -1) {
                array.push(el);
            }
        };

        st.removeElement = this.removeElement = function (array, el) {
            var i = array.indexOf(el);
            if (i !== -1) {
                array.splice(i, 1);
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

    /* Making smalltalk that has basic building blocks */

    function configureWithFundamentals (brikz) {
        brikz.smalltalkGlobals = SmalltalkGlobalsBrik;
        brikz.root = RootBrik;
        brikz.nil = NilBrik;
        brikz.event = EventBrik;
        brikz.arraySet = ArraySetBrik;
        brikz.selectors = SelectorsBrik;
        brikz.packages = PackagesBrik;
        brikz.behaviors = BehaviorsBrik;
        brikz.methods = MethodsBrik;

        brikz.rebuild();
    }

    return configureWithFundamentals;
});
