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

    function inherits(child, parent) {
        child.prototype = Object.create(parent.prototype, {
            constructor: {
                value: child,
                enumerable: false, configurable: true, writable: true
            }
        });
        return child;
    }

    function SmalltalkGlobalsBrik(brikz, st) {
        // jshint evil:true
        var jsGlobals = new Function("return this")();
        var globals = Object.create(jsGlobals);
        globals.SmalltalkSettings = {};

        this.globals = globals;
    }

    function RootBrik(brikz, st) {
        /* Smalltalk foundational objects */

        /* SmalltalkRoot is the hidden root of the Amber hierarchy.
         All objects including `Object` inherit from SmalltalkRoot */
        function SmalltalkRoot() {
        }

        function SmalltalkProtoObject() {
        }

        function SmalltalkObject() {
        }

        function SmalltalkNil() {
        }

        inherits(SmalltalkProtoObject, SmalltalkRoot);
        inherits(SmalltalkObject, SmalltalkProtoObject);
        inherits(SmalltalkNil, SmalltalkObject);

        this.Object = SmalltalkObject;
        this.nil = new SmalltalkNil();

        // Adds an `isNil` property to the `nil` object.  When sending
        // nil objects from one environment to another, doing
        // `anObject == nil` (in JavaScript) does not always answer
        // true as the referenced nil object might come from the other
        // environment.
        Object.defineProperty(this.nil, 'isNil', {
            value: true,
            enumerable: false, configurable: false, writable: false
        });

        // Hidden root class of the system.
        // Effective superclass of all classes created with `nil subclass: ...`.
        this.nilAsClass = {fn: SmalltalkRoot};

        this.__init__ = function () {
            var globals = brikz.smalltalkGlobals.globals;
            var addCoupledClass = brikz.classes.addCoupledClass;
            st.addPackage("Kernel-Objects");
            addCoupledClass("ProtoObject", undefined, "Kernel-Objects", SmalltalkProtoObject);
            addCoupledClass("Object", globals.ProtoObject, "Kernel-Objects", SmalltalkObject);
            addCoupledClass("UndefinedObject", globals.Object, "Kernel-Objects", SmalltalkNil);
        };
        this.__init__.once = true;
    }

    OrganizeBrik.deps = ["augments", "root"];
    function OrganizeBrik(brikz, st) {
        var SmalltalkObject = brikz.root.Object;

        function SmalltalkOrganizer() {
        }

        function SmalltalkPackageOrganizer() {
            this.elements = [];
        }

        function SmalltalkClassOrganizer() {
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

        this.setupClassOrganization = function (klass) {
            klass.organization = new SmalltalkClassOrganizer();
            klass.organization.theClass = klass;
        };

        this.setupPackageOrganization = function (pkg) {
            pkg.organization = new SmalltalkPackageOrganizer();
        };

        this.addOrganizationElement = function (owner, element) {
            owner.organization.elements.addElement(element);
        };

        this.removeOrganizationElement = function (owner, element) {
            owner.organization.elements.removeElement(element);
        };
    }

    SelectorsBrik.deps = ["selectorConversion"];
    function SelectorsBrik(brikz, st) {
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

        /* Answer all method selectors based on dnu handlers */

        st.allSelectors = function () {
            return selectors;
        };
    }

    PackagesBrik.deps = ["organize", "root"];
    function PackagesBrik(brikz, st) {
        var setupPackageOrganization = brikz.organize.setupPackageOrganization;
        var SmalltalkObject = brikz.root.Object;

        function SmalltalkPackage() {
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

        function pkg(spec) {
            var that = new SmalltalkPackage();
            that.pkgName = spec.pkgName;
            setupPackageOrganization(that);
            that.properties = spec.properties || {};
            return that;
        }

        /* Add a package to the smalltalk.packages object, creating a new one if needed.
         If pkgName is null or empty we return nil, which is an allowed package for a class.
         If package already exists we still update the properties of it. */

        st.addPackage = function (pkgName, properties) {
            if (!pkgName) {
                return null;
            }
            if (!(st.packages[pkgName])) {
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

    ClassesBrik.deps = ["organize", "root", "smalltalkGlobals"];
    function ClassesBrik(brikz, st) {
        var setupClassOrganization = brikz.organize.setupClassOrganization;
        var addOrganizationElement = brikz.organize.addOrganizationElement;
        var removeOrganizationElement = brikz.organize.removeOrganizationElement;
        var globals = brikz.smalltalkGlobals.globals;
        var nilAsClass = brikz.root.nilAsClass;
        var SmalltalkObject = brikz.root.Object;
        nilAsClass.klass = {fn: SmalltalkClass};

        function SmalltalkBehavior() {
        }

        function SmalltalkClass() {
        }

        function SmalltalkMetaclass() {
        }

        inherits(SmalltalkBehavior, SmalltalkObject);
        inherits(SmalltalkClass, SmalltalkBehavior);
        inherits(SmalltalkMetaclass, SmalltalkBehavior);

        SmalltalkBehavior.prototype.toString = function () {
            return 'Smalltalk ' + this.className;
        };

        SmalltalkMetaclass.prototype.meta = true;

        this.__init__ = function () {
            var globals = brikz.smalltalkGlobals.globals;
            var addCoupledClass = brikz.classes.addCoupledClass;
            st.addPackage("Kernel-Classes");
            addCoupledClass("Behavior", globals.Object, "Kernel-Classes", SmalltalkBehavior);
            addCoupledClass("Metaclass", globals.Behavior, "Kernel-Classes", SmalltalkMetaclass);
            addCoupledClass("Class", globals.Behavior, "Kernel-Classes", SmalltalkClass);

            // Manually bootstrap the metaclass hierarchy
            globals.ProtoObject.klass.superclass = nilAsClass.klass = globals.Class;
            addSubclass(globals.ProtoObject.klass);
        };
        this.__init__.once = true;

        /* Smalltalk classes */

        var classes = [];

        /* Smalltalk class creation. A class is an instance of an automatically
         created metaclass object. Newly created classes (not their metaclass)
         should be added to the smalltalk object, see smalltalk.addClass().
         Superclass linking is *not* handled here, see smalltalk.init()  */

        function klass(spec) {
            var setSuperClass = spec.superclass;
            if (!spec.superclass) {
                spec.superclass = nilAsClass;
            }

            var meta = metaclass(spec);
            var that = meta.instanceClass;

            that.superclass = setSuperClass;

            that.fn = spec.fn || inherits(function () {
                }, spec.superclass.fn);
            that.subclasses = [];

            setupClass(that, spec);

            that.className = spec.className;
            meta.className = spec.className + ' class';
            meta.superclass = spec.superclass.klass;
            return that;
        }

        function metaclass(spec) {
            var that = new SmalltalkMetaclass();
            that.fn = inherits(function () {
            }, spec.superclass.klass.fn);
            wireKlass(that);
            that.instanceClass = new that.fn();
            setupClass(that, {});
            return that;
        }

        function setupClass(klass, spec) {
            klass.iVarNames = spec.iVarNames || [];
            if (spec.pkg) {
                klass.pkg = spec.pkg;
            }

            setupClassOrganization(klass);
            Object.defineProperty(klass, "methods", {
                value: Object.create(null),
                enumerable: false, configurable: true, writable: true
            });
        }

        function wireKlass(klass) {
            Object.defineProperty(klass.fn.prototype, "klass", {
                value: klass,
                enumerable: false, configurable: true, writable: true
            });
        }

        this.wireKlass = wireKlass;

        /* Add a class to the smalltalk object, creating a new one if needed.
         A Package is lazily created if it does not exist with given name. */

        st.addClass = function (className, superclass, iVarNames, pkgName) {
            // While subclassing nil is allowed, it might be an error, so
            // warn about it.
            if (typeof superclass == 'undefined' || superclass && superclass.isNil) {
                console.warn('Compiling ' + className + ' as a subclass of `nil`. A dependency might be missing.');
            }
            return rawAddClass(pkgName, className, superclass, iVarNames, null);
        };

        function rawAddClass(pkgName, className, superclass, iVarNames, fn) {
            var pkg = st.packages[pkgName];

            if (!pkg) {
                throw new Error("Missing package " + pkgName);
            }

            if (superclass == null || superclass.isNil) {
                superclass = null;
            }
            var theClass = globals.hasOwnProperty(className) && globals[className];
            if (theClass && theClass.superclass == superclass && !fn) {
                if (iVarNames) theClass.iVarNames = iVarNames;
                if (pkg) theClass.pkg = pkg;
            } else {
                if (theClass) {
                    iVarNames = iVarNames || theClass.iVarNames;
                    st.removeClass(theClass);
                }
                theClass = globals[className] = klass({
                    className: className,
                    superclass: superclass,
                    pkg: pkg,
                    iVarNames: iVarNames,
                    fn: fn
                });

                addSubclass(theClass);
            }

            classes.addElement(theClass);
            addOrganizationElement(pkg, theClass);
            if (st._classAdded) st._classAdded(theClass);
            return theClass;
        }

        st.removeClass = function (klass) {
            removeOrganizationElement(klass.pkg, klass);
            classes.removeElement(klass);
            removeSubclass(klass);
            delete globals[klass.className];
        };

        function addSubclass(klass) {
            if (klass.superclass) {
                klass.superclass.subclasses.addElement(klass);
            }
        }

        function removeSubclass(klass) {
            if (klass.superclass) {
                klass.superclass.subclasses.removeElement(klass);
            }
        }

        /* Create a new class coupling with a JavaScript constructor,
         and add it to the global smalltalk object.*/

        this.addCoupledClass = function (className, superclass, pkgName, fn) {
            return rawAddClass(pkgName, className, superclass, null, fn);
        };

        /* Create an alias for an existing class */

        st.alias = function (klass, alias) {
            globals[alias] = klass;
        };

        /* Answer all registered Smalltalk classes */
        //TODO: remove the function and make smalltalk.classes an array

        st.classes = this.classes = function () {
            return classes;
        };

        function metaSubclasses(metaclass) {
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
            var queue = [klass];
            for (var i = 0; i < queue.length; ++i) {
                var item = queue[i];
                fn(item);
                var subclasses = item.meta ? metaSubclasses(item) : item.subclasses;
                queue.push.apply(queue, subclasses);
            }
        };
    }

    MethodsBrik.deps = ["organize", "selectors", "root", "selectorConversion"];
    function MethodsBrik(brikz, st) {
        var addOrganizationElement = brikz.organize.addOrganizationElement;
        var registerSelector = brikz.selectors.registerSelector;
        var SmalltalkObject = brikz.root.Object;

        function SmalltalkMethod() {
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
         use smalltalk.addMethod() */

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

        st.addMethod = function (method, klass) {
            klass.methods[method.selector] = method;
            method.methodClass = klass;

            // During the bootstrap, #addCompiledMethod is not used.
            // Therefore we populate the organizer here too
            addOrganizationElement(klass, method.protocol);

            var newSelectors = [];

            function selectorInUse(stSelector) {
                var pair = registerSelector(stSelector);
                if (pair) {
                    newSelectors.push(pair);
                }
            }

            selectorInUse(method.selector);
            method.messageSends.forEach(selectorInUse);

            if (st._methodAdded) st._methodAdded(method, klass);
            if (st._selectorsAdded) st._selectorsAdded(newSelectors);
        };

        st.removeMethod = function (method, klass) {
            if (klass !== method.methodClass) {
                throw new Error(
                    "Refusing to remove method " +
                    method.methodClass.className + ">>" + method.selector +
                    " from different class " +
                    klass.className);
            }

            delete klass.methods[method.selector];

            if (st._methodRemoved) st._methodRemoved(method, klass);

            // Do *not* delete protocols from here.
            // This is handled by #removeCompiledMethod
        };
    }

    function AugmentsBrik(brikz, st) {
        /* Array extensions */

        Array.prototype.addElement = function (el) {
            if (typeof el === 'undefined') {
                return;
            }
            if (this.indexOf(el) == -1) {
                this.push(el);
            }
        };

        Array.prototype.removeElement = function (el) {
            var i = this.indexOf(el);
            if (i !== -1) {
                this.splice(i, 1);
            }
        };
    }

    SmalltalkInitBrik.deps = ["globals", "classes"];
    function SmalltalkInitBrik(brikz, st) {
        var globals = brikz.smalltalkGlobals.globals;

        var initialized = false;
        var runtimeLoadedPromise = new Promise(function (resolve, reject) {
            require(['./kernel-runtime'], resolve, reject);
        });


        /* Smalltalk initialization. Called on page load */

        st.initialize = function () {
            return runtimeLoadedPromise.then(function (configureWithRuntime) {
                if (initialized) {
                    return;
                }

                configureWithRuntime(brikz);

                /* Alias definitions */

                st.alias(globals.Array, "OrderedCollection");
                st.alias(globals.Date, "Time");

                st.classes().forEach(function (klass) {
                    klass._initialize();
                });

                initialized = true;
            });
        };
    }

    function SelectorConversionBrik(brikz, st) {
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

        function keywordJsToSt(selector) {
            return selector.replace(/^_/, '').replace(/_/g, ':');
        }

        function binaryJsToSt(selector) {
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

    /* Adds AMD and requirejs related methods to the smalltalk object */
    function AMDBrik(brikz, st) {
        st.amdRequire = require;
        st.defaultTransportType = st.defaultTransportType || "amd";
        st.defaultAmdNamespace = st.defaultAmdNamespace || "amber_core";
    }

    /* Defines asReceiver to be present at load time */
    /* (logically it belongs more to PrimitiveBrik) */
    AsReceiverBrik.deps = ["smalltalkGlobals", "root"];
    function AsReceiverBrik(brikz, st) {
        var globals = brikz.smalltalkGlobals.globals;
        var nil = brikz.root.nil;

        /**
         * This function is used all over the compiled amber code.
         * It takes any value (JavaScript or Smalltalk)
         * and returns a proper Amber Smalltalk receiver.
         *
         * null or undefined -> nil,
         * plain JS object -> wrapped JS object,
         * otherwise unchanged
         */
        this.asReceiver = function (o) {
            if (o == null) return nil;
            else if (o.klass != null) return o;
            else return globals.JSObjectProxy._on_(o);
        };
    }

    var api = {};
    var brikz = new Brikz(api);

    /* Making smalltalk that can load */

    brikz.smalltalkGlobals = SmalltalkGlobalsBrik;
    brikz.root = RootBrik;
    brikz.selectors = SelectorsBrik;
    brikz.organize = OrganizeBrik;
    brikz.selectorConversion = SelectorConversionBrik;
    brikz.packages = PackagesBrik;
    brikz.classes = ClassesBrik;
    brikz.methods = MethodsBrik;
    brikz.stInit = SmalltalkInitBrik;
    brikz.augments = AugmentsBrik;
    brikz.asReceiver = AsReceiverBrik;
    brikz.amd = AMDBrik;

    brikz.rebuild();

    return {
        api: api,
        nil/* TODO deprecate */: brikz.root.nil,
        nilAsReceiver: brikz.root.nil,
        dnu/* TODO deprecate */: brikz.root.nilAsClass,
        nilAsClass: brikz.root.nilAsClass,
        globals: brikz.smalltalkGlobals.globals,
        asReceiver: brikz.asReceiver.asReceiver
    };
});
