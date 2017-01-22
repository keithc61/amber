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

define(['require', './brikz', './compatibility'], function (require, Brikz) {
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
        // jshint evil:true
        var jsGlobals = new Function("return this")();
        var globals = Object.create(jsGlobals);
        globals.SmalltalkSettings = {};

        this.globals = globals;
    }

    function RootBrik (brikz, st) {
        /* Smalltalk foundational objects */

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

        inherits(SmalltalkProtoObject, SmalltalkRoot);
        inherits(SmalltalkObject, SmalltalkProtoObject);

        this.Root = SmalltalkRoot;
        this.Object = SmalltalkObject;

        this.__init__ = function () {
            var globals = brikz.smalltalkGlobals.globals;
            var addCoupledClass = brikz.classes.addCoupledClass;
            st.addPackage("Kernel-Objects");
            addCoupledClass("ProtoObject", undefined, "Kernel-Objects", SmalltalkProtoObject);
            addCoupledClass("Object", globals.ProtoObject, "Kernel-Objects", SmalltalkObject);
        };
        this.__init__.once = true;
    }

    OrganizeBrik.deps = ["arraySet", "root"];
    function OrganizeBrik (brikz, st) {
        var SmalltalkObject = brikz.root.Object;
        var addElement = brikz.arraySet.addElement;
        var removeElement = brikz.arraySet.removeElement;

        function SmalltalkOrganizer () {
        }

        function SmalltalkPackageOrganizer () {
            this.elements = [];
        }

        function SmalltalkClassOrganizer () {
            this.elements = [];
        }

        inherits(SmalltalkOrganizer, SmalltalkObject);
        inherits(SmalltalkPackageOrganizer, SmalltalkOrganizer);
        inherits(SmalltalkClassOrganizer, SmalltalkOrganizer);

        this.__init__ = function () {
            var globals = brikz.smalltalkGlobals.globals;
            var addCoupledClass = brikz.classes.addCoupledClass;
            st.addPackage("Kernel-Infrastructure");
            addCoupledClass("Organizer", globals.Object, "Kernel-Infrastructure", SmalltalkOrganizer);
            addCoupledClass("PackageOrganizer", globals.Organizer, "Kernel-Infrastructure", SmalltalkPackageOrganizer);
            addCoupledClass("ClassOrganizer", globals.Organizer, "Kernel-Infrastructure", SmalltalkClassOrganizer);
        };
        this.__init__.once = true;

        this.setupClassOrganization = function (behaviorBody) {
            behaviorBody.organization = new SmalltalkClassOrganizer();
            behaviorBody.organization.theClass = behaviorBody;
        };

        this.setupPackageOrganization = function (pkg) {
            pkg.organization = new SmalltalkPackageOrganizer();
        };

        this.addOrganizationElement = function (owner, element) {
            addElement(owner.organization.elements, element);
        };

        this.removeOrganizationElement = function (owner, element) {
            removeElement(owner.organization.elements, element);
        };
    }

    SelectorsBrik.deps = ["selectorConversion"];
    function SelectorsBrik (brikz, st) {
        var selectorSet = Object.create(null);
        var selectors = this.selectors = [];
        var selectorPairs = this.selectorPairs = [];

        this.registerSelector = function (stSelector) {
            if (selectorSet[stSelector]) return null;
            var jsSelector = st.st2js(stSelector);
            selectorSet[stSelector] = true;
            selectors.push(stSelector);
            var pair = {st: stSelector, js: jsSelector};
            selectorPairs.push(pair);
            return pair;
        };

        st.allSelectors = function () {
            return selectors;
        };
    }

    PackagesBrik.deps = ["organize", "root"];
    function PackagesBrik (brikz, st) {
        var setupPackageOrganization = brikz.organize.setupPackageOrganization;
        var SmalltalkObject = brikz.root.Object;

        function SmalltalkPackage () {
        }

        inherits(SmalltalkPackage, SmalltalkObject);

        this.__init__ = function () {
            var globals = brikz.smalltalkGlobals.globals;
            var addCoupledClass = brikz.classes.addCoupledClass;
            st.addPackage("Kernel-Infrastructure");
            addCoupledClass("Package", globals.Object, "Kernel-Infrastructure", SmalltalkPackage);
        };
        this.__init__.once = true;

        st.packages = {};

        /* Smalltalk package creation. To add a Package, use smalltalk.addPackage() */

        function pkg (spec) {
            var that = new SmalltalkPackage();
            that.pkgName = spec.pkgName;
            setupPackageOrganization(that);
            that.properties = spec.properties || {};
            return that;
        }

        /* Add a package to the system, creating a new one if needed.
         If pkgName is null or empty we return nil.
         If package already exists we still update the properties of it. */

        st.addPackage = function (pkgName, properties) {
            if (!pkgName) return null;
            if (!st.packages[pkgName]) {
                st.packages[pkgName] = pkg({
                    pkgName: pkgName,
                    properties: properties
                });
            } else {
                if (properties) {
                    st.packages[pkgName].properties = properties;
                }
            }
            return st.packages[pkgName];
        };
    }

    BehaviorsBrik.deps = ["organize", "root", "smalltalkGlobals", "arraySet"];
    function BehaviorsBrik (brikz, st) {
        var setupClassOrganization = brikz.organize.setupClassOrganization;
        var addOrganizationElement = brikz.organize.addOrganizationElement;
        var removeOrganizationElement = brikz.organize.removeOrganizationElement;
        var globals = brikz.smalltalkGlobals.globals;
        var SmalltalkObject = brikz.root.Object;
        var addElement = brikz.arraySet.addElement;
        var removeElement = brikz.arraySet.removeElement;

        function SmalltalkBehaviorBody () {
        }

        inherits(SmalltalkBehaviorBody, SmalltalkObject);

        this.BehaviorBody = SmalltalkBehaviorBody;

        this.__init__ = function () {
            var globals = brikz.smalltalkGlobals.globals;
            var addCoupledClass = brikz.classes.addCoupledClass;
            st.addPackage("Kernel-Classes");
            addCoupledClass("BehaviorBody", globals.Object, "Kernel-Classes", SmalltalkBehaviorBody);
        };
        this.__init__.once = true;

        /* Smalltalk classes */

        var classes = [];

        this.setupBehavior = function (behaviorBody, pkg) {
            if (pkg) {
                behaviorBody.pkg = pkg;
            }

            setupClassOrganization(behaviorBody);
            Object.defineProperty(behaviorBody, "methods", {
                value: Object.create(null),
                enumerable: false, configurable: true, writable: true
            });
        };

        this.buildBehaviorBody = function (pkgName, builder) {
            var pkg = st.packages[pkgName];
            if (!pkg) throw new Error("Missing package " + pkgName);
            var behaviorBody = makeBehaviorBody(builder, pkg);
            addBehaviorBody(behaviorBody);
            return behaviorBody;
        };

        function makeBehaviorBody (builder, pkg) {
            var behaviorBody = globals.hasOwnProperty(builder.className) && globals[builder.className];
            if (!behaviorBody) return builder.make(pkg);
            if (builder.updateExisting(behaviorBody, pkg)) return behaviorBody;

            var rebuilder = builder.rebuilderForExisting(behaviorBody);
            removeBehaviorBody(behaviorBody);
            return makeBehaviorBody(rebuilder, pkg);
        }

        function addBehaviorBody (behaviorBody) {
            globals[behaviorBody.className] = behaviorBody;
            addElement(classes, behaviorBody);
            addOrganizationElement(behaviorBody.pkg, behaviorBody);
            behaviorBody.added();
        }

        function removeBehaviorBody (behaviorBody) {
            behaviorBody.removed();
            removeOrganizationElement(behaviorBody.pkg, behaviorBody);
            removeElement(classes, behaviorBody);
            delete globals[behaviorBody.className];
        }

        this.removeBehaviorBody = removeBehaviorBody;

        /* Create an alias for an existing class */

        st.alias = function (behaviorBody, alias) {
            globals[alias] = behaviorBody;
        };

        /* Answer all registered Smalltalk classes */
        //TODO: remove the function and make smalltalk.classes an array

        st.classes = this.classes = function () {
            return classes;
        };
    }

    MethodsBrik.deps = ["organize", "selectors", "root", "selectorConversion"];
    function MethodsBrik (brikz, st) {
        var addOrganizationElement = brikz.organize.addOrganizationElement;
        var registerSelector = brikz.selectors.registerSelector;
        var SmalltalkObject = brikz.root.Object;

        function SmalltalkMethod () {
        }

        inherits(SmalltalkMethod, SmalltalkObject);

        this.__init__ = function () {
            var globals = brikz.smalltalkGlobals.globals;
            var addCoupledClass = brikz.classes.addCoupledClass;
            st.addPackage("Kernel-Methods");
            addCoupledClass("CompiledMethod", globals.Object, "Kernel-Methods", SmalltalkMethod);
        };
        this.__init__.once = true;

        /* Smalltalk method object. To add a method to a class,
         use api.addMethod() */

        st.method = function (spec) {
            var that = new SmalltalkMethod();
            var selector = spec.selector;
            that.selector = selector;
            that.jsSelector = st.st2js(selector);
            that.args = spec.args || {};
            that.protocol = spec.protocol;
            that.source = spec.source;
            that.messageSends = spec.messageSends || [];
            that.referencedClasses = spec.referencedClasses || [];
            that.fn = spec.fn;
            return that;
        };

        /* Add/remove a method to/from a class */

        st.addMethod = function (method, behaviorBody) {
            behaviorBody.methods[method.selector] = method;
            method.methodClass = behaviorBody;

            // During the bootstrap, #addCompiledMethod is not used.
            // Therefore we populate the organizer here too
            addOrganizationElement(behaviorBody, method.protocol);

            var newSelectors = [];

            function selectorInUse (stSelector) {
                var pair = registerSelector(stSelector);
                if (pair) {
                    newSelectors.push(pair);
                }
            }

            selectorInUse(method.selector);
            method.messageSends.forEach(selectorInUse);

            behaviorBody.methodAdded(method);
            if (st._selectorsAdded) st._selectorsAdded(newSelectors);
        };

        st.removeMethod = function (method, behaviorBody) {
            if (behaviorBody.methods[method.selector] !== method) return;

            delete behaviorBody.methods[method.selector];

            behaviorBody.methodRemoved(method);

            // Do *not* delete protocols from here.
            // This is handled by #removeCompiledMethod
        };
    }

    TraitsBrik.deps = ["behaviors"];
    function TraitsBrik (brikz, st) {
        var SmalltalkBehaviorBody = brikz.behaviors.BehaviorBody;
        var setupBehavior = brikz.behaviors.setupBehavior;
        var buildBehaviorBody = brikz.behaviors.buildBehaviorBody;

        function SmalltalkTrait () {
        }

        inherits(SmalltalkTrait, SmalltalkBehaviorBody);

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

        this.__init__ = function () {
            var globals = brikz.smalltalkGlobals.globals;
            var addCoupledClass = brikz.classes.addCoupledClass;
            st.addPackage("Kernel-Classes");
            addCoupledClass("Trait", globals.BehaviorBody, "Kernel-Classes", SmalltalkTrait);
        };
        this.__init__.once = true;

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

    ClassesBrik.deps = ["root", "behaviors", "arraySet"];
    function ClassesBrik (brikz, st) {
        var SmalltalkRoot = brikz.root.Root;
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

        inherits(SmalltalkBehavior, SmalltalkBehaviorBody);
        inherits(SmalltalkClass, SmalltalkBehavior);
        inherits(SmalltalkMetaclass, SmalltalkBehavior);

        // Fake root class of the system.
        // Effective superclass of all classes created with `nil subclass: ...`.
        var nilAsClass = this.nilAsClass = {fn: SmalltalkRoot, klass: {fn: SmalltalkClass}};

        SmalltalkBehavior.prototype.toString = function () {
            return 'Smalltalk ' + this.className;
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

        this.__init__ = function () {
            var globals = brikz.smalltalkGlobals.globals;
            var addCoupledClass = brikz.classes.addCoupledClass;
            var nilSubclasses = [globals.ProtoObject];
            st.addPackage("Kernel-Classes");
            addCoupledClass("Behavior", globals.BehaviorBody, "Kernel-Classes", SmalltalkBehavior);
            addCoupledClass("Metaclass", globals.Behavior, "Kernel-Classes", SmalltalkMetaclass);
            addCoupledClass("Class", globals.Behavior, "Kernel-Classes", SmalltalkClass);

            // Manually bootstrap the metaclass hierarchy
            nilAsClass.klass = globals.Class;
            nilSubclasses.forEach(function (each) {
                each.klass.superclass = globals.Class;
                addSubclass(each.klass);
            });
        };
        this.__init__.once = true;

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
            that.subclasses = [];

            setupBehavior(that, spec.pkg);

            that.className = spec.className;
            meta.className = spec.className + ' class';
            meta.superclass = spec.superclass.klass;
            return that;
        }

        function metaclass (spec) {
            var that = new SmalltalkMetaclass();
            that.fn = inherits(function () {
            }, spec.superclass.klass.fn);
            wireKlass(that);
            that.instanceClass = new that.fn();
            that.iVarNames = [];
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
            return buildBehaviorBody(pkgName, classBuilder(className, superclass, iVarNames));
        };

        function classBuilder (className, superclass, iVarNames, fn) {
            if (superclass == null || superclass.isNil) {
                superclass = null;
            }
            return {
                className: className,
                superclass: superclass,
                iVarNames: iVarNames,
                fn: fn,
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

        /* Create a new class coupling with a JavaScript constructor,
         and add it to the system.*/

        this.addCoupledClass = function (className, superclass, pkgName, fn) {
            return buildBehaviorBody(pkgName, classBuilder(className, superclass, null, fn));
        };

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

    function SmalltalkInitBrik (brikz, st) {
        var initialized = false;
        var runtimeLoadedPromise = new Promise(function (resolve, reject) {
            require(['./kernel-runtime'], resolve, reject);
        });

        /* Smalltalk initialization. Called on page load */

        st.initialize = function () {
            return runtimeLoadedPromise.then(function (configureWithRuntime) {
                if (initialized) return;
                configureWithRuntime(brikz);
                initialized = true;
            });
        };
    }

    function SelectorConversionBrik (brikz, st) {
        /* Convert a Smalltalk selector into a JS selector */
        st.st2js = function (string) {
            return '_' + string
                    .replace(/:/g, '_')
                    .replace(/[\&]/g, '_and')
                    .replace(/[\|]/g, '_or')
                    .replace(/[+]/g, '_plus')
                    .replace(/-/g, '_minus')
                    .replace(/[*]/g, '_star')
                    .replace(/[\/]/g, '_slash')
                    .replace(/[\\]/g, '_backslash')
                    .replace(/[\~]/g, '_tild')
                    .replace(/>/g, '_gt')
                    .replace(/</g, '_lt')
                    .replace(/=/g, '_eq')
                    .replace(/,/g, '_comma')
                    .replace(/[@]/g, '_at');
        };

        /* Convert a string to a valid smalltalk selector.
         if you modify the following functions, also change st2js
         accordingly */
        st.js2st = function (selector) {
            if (selector.match(/^__/)) {
                return binaryJsToSt(selector);
            } else {
                return keywordJsToSt(selector);
            }
        };

        function keywordJsToSt (selector) {
            return selector.replace(/^_/, '').replace(/_/g, ':');
        }

        function binaryJsToSt (selector) {
            return selector
                .replace(/^_/, '')
                .replace(/_and/g, '&')
                .replace(/_or/g, '|')
                .replace(/_plus/g, '+')
                .replace(/_minus/g, '-')
                .replace(/_star/g, '*')
                .replace(/_slash/g, '/')
                .replace(/_backslash/g, '\\')
                .replace(/_tild/g, '~')
                .replace(/_gt/g, '>')
                .replace(/_lt/g, '<')
                .replace(/_eq/g, '=')
                .replace(/_comma/g, ',')
                .replace(/_at/g, '@');
        }

        st.st2prop = function (stSelector) {
            var colonPosition = stSelector.indexOf(':');
            return colonPosition === -1 ? stSelector : stSelector.slice(0, colonPosition);
        };
    }

    /* Adds AMD and requirejs related methods to the api */
    function AMDBrik (brikz, st) {
        st.amdRequire = require;
        st.defaultTransportType = st.defaultTransportType || "amd";
        st.defaultAmdNamespace = st.defaultAmdNamespace || "amber_core";
    }

    NilBrik.deps = ["root"];
    function NilBrik (brikz, st) {
        var SmalltalkObject = brikz.root.Object;

        function SmalltalkNil () {
        }

        inherits(SmalltalkNil, SmalltalkObject);

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

        this.__init__ = function () {
            var globals = brikz.smalltalkGlobals.globals;
            var addCoupledClass = brikz.classes.addCoupledClass;
            st.addPackage("Kernel-Objects");
            addCoupledClass("UndefinedObject", globals.Object, "Kernel-Objects", SmalltalkNil);
        };
        this.__init__.once = true;
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

    var api = {};
    var brikz = new Brikz(api);

    /* Making smalltalk that can load */

    brikz.smalltalkGlobals = SmalltalkGlobalsBrik;
    brikz.root = RootBrik;
    brikz.arraySet = ArraySetBrik;
    brikz.organize = OrganizeBrik;
    brikz.selectorConversion = SelectorConversionBrik;
    brikz.selectors = SelectorsBrik;
    brikz.packages = PackagesBrik;
    brikz.behaviors = BehaviorsBrik;
    brikz.methods = MethodsBrik;

    brikz.traits = TraitsBrik;
    brikz.classes = ClassesBrik;
    brikz.stInit = SmalltalkInitBrik;
    brikz.nil = NilBrik;
    brikz.asReceiver = AsReceiverBrik;
    brikz.amd = AMDBrik;

    brikz.rebuild();

    return {
        api: api,
        nil/* TODO deprecate */: brikz.nil.nilAsReceiver,
        nilAsReceiver: brikz.nil.nilAsReceiver,
        dnu/* TODO deprecate */: brikz.classes.nilAsClass,
        nilAsClass: brikz.classes.nilAsClass,
        globals: brikz.smalltalkGlobals.globals,
        asReceiver: brikz.asReceiver.asReceiver
    };
});
