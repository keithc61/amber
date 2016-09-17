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

define(['require', './brikz.umd', './compatibility'], function (require, Brikz) {

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

        inherits(SmalltalkProtoObject, SmalltalkRoot);
        function SmalltalkObject() {
        }

        inherits(SmalltalkObject, SmalltalkProtoObject);
        function SmalltalkNil() {
        }

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
        this.rootAsClass = {fn: SmalltalkRoot};

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
        var rootAsClass = brikz.root.rootAsClass;
        var SmalltalkObject = brikz.root.Object;
        rootAsClass.klass = {fn: SmalltalkClass};

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
            globals.ProtoObject.klass.superclass = rootAsClass.klass = globals.Class;
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
                spec.superclass = rootAsClass;
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
            st._classAdded && st._classAdded(theClass);
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
        }
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

            st._methodAdded && st._methodAdded(method, klass);
            st._selectorsAdded && st._selectorsAdded(newSelectors);
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

            st._methodRemoved && st._methodRemoved(method, klass);

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

        /* Smalltalk initialization. Called on page load */

        st.initialize = function () {
            if (initialized) {
                return;
            }

            runnable();

            /* Alias definitions */

            st.alias(globals.Array, "OrderedCollection");
            st.alias(globals.Date, "Time");

            st.classes().forEach(function (klass) {
                klass._initialize();
            });

            initialized = true;
        };
    }

    DNUBrik.deps = ["selectors", "messageSend", "manipulation", "root"];
    function DNUBrik(brikz, st) {
        var selectorsBrik = brikz.selectors;
        var messageNotUnderstood = brikz.messageSend.messageNotUnderstood;
        var installJSMethod = brikz.manipulation.installJSMethod;
        var RootProto = brikz.root.rootAsClass.fn.prototype;

        /* Method not implemented handlers */

        function makeDnuHandler(pair, targetClasses) {
            var jsSelector = pair.js;
            var fn = createHandler(pair.st);
            installJSMethod(RootProto, jsSelector, fn);
            targetClasses.forEach(function (target) {
                installJSMethod(target.fn.prototype, jsSelector, fn);
            });
        }

        this.makeDnuHandler = makeDnuHandler;

        /* Dnu handler method */

        function createHandler(stSelector) {
            return function () {
                return messageNotUnderstood(this, stSelector, arguments);
            };
        }

        selectorsBrik.selectorPairs.forEach(function (pair) {
            makeDnuHandler(pair, []);
        });
    }

    function ManipulationBrik(brikz, st) {
        function installJSMethod(obj, jsSelector, fn) {
            Object.defineProperty(obj, jsSelector, {
                value: fn,
                enumerable: false, configurable: true, writable: true
            });
        }

        function installMethod(method, klass) {
            installJSMethod(klass.fn.prototype, method.jsSelector, method.fn);
        }

        this.installMethod = installMethod;
        this.installJSMethod = installJSMethod;
    }

    RuntimeClassesBrik.deps = ["selectors", "dnu", "classes", "manipulation"];
    function RuntimeClassesBrik(brikz, st) {
        var selectors = brikz.selectors;
        var classes = brikz.classes.classes;
        var wireKlass = brikz.classes.wireKlass;
        var installMethod = brikz.manipulation.installMethod;
        var installJSMethod = brikz.manipulation.installJSMethod;

        /* Initialize a class in its class hierarchy. Handle both classes and
         metaclasses. */

        var detachedRootClasses = [];

        function markClassDetachedRoot(klass) {
            detachedRootClasses.addElement(klass);
            klass.detachedRoot = true;
        }

        this.detachedRootClasses = function () {
            return detachedRootClasses;
        };

        function initClassAndMetaclass(klass) {
            initClass(klass);
            if (klass.klass && !klass.meta) {
                initClass(klass.klass);
            }
        }

        classes().forEach(initClassAndMetaclass);

        st._classAdded = initClassAndMetaclass;

        function initClass(klass) {
            wireKlass(klass);
            if (klass.detachedRoot) {
                copySuperclass(klass);
            }
            installMethods(klass);
        }

        function copySuperclass(klass) {
            var myproto = klass.fn.prototype,
                superproto = klass.superclass.fn.prototype;
            selectors.selectorPairs.forEach(function (selectorPair) {
                var jsSelector = selectorPair.js;
                installJSMethod(myproto, jsSelector, superproto[jsSelector]);
            });
        }

        function installMethods(klass) {
            var methods = klass.methods;
            Object.keys(methods).forEach(function (selector) {
                installMethod(methods[selector], klass);
            });
        }

        /* Manually set the constructor of an existing Smalltalk klass, making it a detached root class. */

        st.setClassConstructor = this.setClassConstructor = function (klass, constructor) {
            markClassDetachedRoot(klass);
            klass.fn = constructor;
            initClass(klass);
        };
    }

    FrameBindingBrik.deps=["globals", "runtimeClasses"];
    function FrameBindingBrik(brikz, st) {
        var globals = brikz.smalltalkGlobals.globals;
        var setClassConstructor = brikz.runtimeClasses.setClassConstructor;

        setClassConstructor(globals.Number, Number);
        setClassConstructor(globals.BlockClosure, Function);
        setClassConstructor(globals.Boolean, Boolean);
        setClassConstructor(globals.Date, Date);
        setClassConstructor(globals.String, String);
        setClassConstructor(globals.Array, Array);
        setClassConstructor(globals.RegularExpression, RegExp);
        setClassConstructor(globals.Error, Error);
        setClassConstructor(globals.Promise, Promise);
    }

    RuntimeMethodsBrik.deps = ["manipulation", "dnu", "runtimeClasses"];
    function RuntimeMethodsBrik(brikz, st) {
        var installMethod = brikz.manipulation.installMethod;
        var installJSMethod = brikz.manipulation.installJSMethod;
        var makeDnuHandler = brikz.dnu.makeDnuHandler;
        var detachedRootClasses = brikz.runtimeClasses.detachedRootClasses;

        st._methodAdded = function (method, klass) {
            installMethod(method, klass);
            propagateMethodChange(klass, method, klass);
        };

        st._selectorsAdded = function (newSelectors) {
            var targetClasses = detachedRootClasses();
            newSelectors.forEach(function (pair) {
                makeDnuHandler(pair, targetClasses);
            });
        };

        st._methodRemoved = function (method, klass) {
            delete klass.fn.prototype[method.jsSelector];
            propagateMethodChange(klass, method, null);
        };

        function propagateMethodChange(klass, method, exclude) {
            var selector = method.selector;
            var jsSelector = method.jsSelector;
            st.traverseClassTree(klass, function (subclass) {
                if (subclass != exclude) {
                    initMethodInClass(subclass, selector, jsSelector);
                }
            });
        }

        function initMethodInClass(klass, selector, jsSelector) {
            if (klass.detachedRoot && !klass.methods[selector]) {
                installJSMethod(klass.fn.prototype, jsSelector, klass.superclass.fn.prototype[jsSelector]);
            }
        }
    }

    PrimitivesBrik.deps = ["smalltalkGlobals"];
    function PrimitivesBrik(brikz, st) {
        var globals = brikz.smalltalkGlobals.globals;


        var oid = 0;
        /* Unique ID number generator */
        st.nextId = function () {
            oid += 1;
            return oid;
        };

        /* Converts a JavaScript object to valid Smalltalk Object */
        st.readJSObject = function (js) {
            if (js == null)
                return null;
            var readObject = js.constructor === Object;
            var readArray = js.constructor === Array;
            var object = readObject ? globals.Dictionary._new() : readArray ? [] : js;

            for (var i in js) {
                if (readObject) {
                    object._at_put_(i, st.readJSObject(js[i]));
                }
                if (readArray) {
                    object[i] = st.readJSObject(js[i]);
                }
            }
            return object;
        };

        /* Boolean assertion */
        st.assert = function (shouldBeBoolean) {
            if (typeof shouldBeBoolean === "boolean") return shouldBeBoolean;
            else if (shouldBeBoolean != null && typeof shouldBeBoolean === "object") {
                shouldBeBoolean = shouldBeBoolean.valueOf();
                if (typeof shouldBeBoolean === "boolean") return shouldBeBoolean;
            }
            globals.NonBooleanReceiver._new()._object_(shouldBeBoolean)._signal();
        };

        /* List of all reserved words in JavaScript. They may not be used as variables
         in Smalltalk. */

        // list of reserved JavaScript keywords as of
        //   http://es5.github.com/#x7.6.1.1
        // and
        //   http://people.mozilla.org/~jorendorff/es6-draft.html#sec-7.6.1
        st.reservedWords = ['break', 'case', 'catch', 'continue', 'debugger',
            'default', 'delete', 'do', 'else', 'finally', 'for', 'function',
            'if', 'in', 'instanceof', 'new', 'return', 'switch', 'this', 'throw',
            'try', 'typeof', 'var', 'void', 'while', 'with',
            // Amber protected words: these should not be compiled as-is when in code
            'arguments',
            // ES5: future use: http://es5.github.com/#x7.6.1.2
            'class', 'const', 'enum', 'export', 'extends', 'import', 'super',
            // ES5: future use in strict mode
            'implements', 'interface', 'let', 'package', 'private', 'protected',
            'public', 'static', 'yield'];

        st.globalJsVariables = ['window', 'document', 'process', 'global'];
    }

    RuntimeBrik.deps = ["selectorConversion", "smalltalkGlobals", "runtimeClasses"];
    function RuntimeBrik(brikz, st) {
        var globals = brikz.smalltalkGlobals.globals;
        var setClassConstructor = brikz.runtimeClasses.setClassConstructor;

        function SmalltalkMethodContext(home, setup) {
            this.sendIdx = {};
            this.homeContext = home;
            this.setup = setup || function () {
                };

            this.supercall = false;
        }

        // Fallbacks
        SmalltalkMethodContext.prototype.locals = {};
        SmalltalkMethodContext.prototype.receiver = null;
        SmalltalkMethodContext.prototype.selector = null;
        SmalltalkMethodContext.prototype.lookupClass = null;

        SmalltalkMethodContext.prototype.fill = function (receiver, selector, locals, lookupClass) {
            this.receiver = receiver;
            this.selector = selector;
            this.locals = locals || {};
            this.lookupClass = lookupClass;
            if (this.homeContext) {
                this.homeContext.evaluatedSelector = selector;
            }
        };

        SmalltalkMethodContext.prototype.fillBlock = function (locals, ctx, index) {
            this.locals = locals || {};
            this.outerContext = ctx;
            this.index = index || 0;
        };

        SmalltalkMethodContext.prototype.init = function () {
            var home = this.homeContext;
            if (home) {
                home.init();
            }

            this.setup(this);
        };

        SmalltalkMethodContext.prototype.method = function () {
            var method;
            var lookup = this.lookupClass || this.receiver.klass;
            while (!method && lookup) {
                method = lookup.methods[st.js2st(this.selector)];
                lookup = lookup.superclass;
            }
            return method;
        };

        setClassConstructor(globals.MethodContext, SmalltalkMethodContext);

        /* This is the current call context object. While it is publicly available,
         Use smalltalk.getThisContext() instead which will answer a safe copy of
         the current context */

        var thisContext = null;

        st.withContext = function (worker, setup) {
            if (thisContext) {
                return inContext(worker, setup);
            } else {
                return inContextWithErrorHandling(worker, setup);
            }
        };

        /*
           Runs worker function so that error handler is not set up
           if there isn't one. This is accomplished by unconditional
           wrapping inside a context of a simulated `nil seamlessDoIt` call,
           which then stops error handler setup (see st.withContext above).
           The effect is, $core.seamless(fn)'s exceptions are not
           handed into ST error handler and caller should process them.
         */
        st.seamless = function (worker) {
            return inContext(worker, function (ctx) {
                ctx.fill(null, "seamlessDoIt", {}, globals.UndefinedObject);
            });
        };

        function inContextWithErrorHandling(worker, setup) {
            try {
                return inContext(worker, setup);
            } catch (error) {
                handleError(error);
                thisContext = null;
                // Rethrow the error in any case.
                error.amberHandled = true;
                throw error;
            }
        }

        function inContext(worker, setup) {
            var oldContext = thisContext;
            thisContext = new SmalltalkMethodContext(thisContext, setup);
            var result = worker(thisContext);
            thisContext = oldContext;
            return result;
        }

        /* Wrap a JavaScript exception in a Smalltalk Exception.

         In case of a RangeError, stub the stack after 100 contexts to
         avoid another RangeError later when the stack is manipulated. */
        function wrappedError(error) {
            var errorWrapper = globals.JavaScriptException._on_(error);
            // Add the error to the context, so it is visible in the stack
            try {
                errorWrapper._signal();
            } catch (ex) {
            }
            var context = st.getThisContext();
            if (isRangeError(error)) {
                stubContextStack(context);
            }
            errorWrapper._context_(context);
            return errorWrapper;
        }

        /* Stub the context stack after 100 contexts */
        function stubContextStack(context) {
            var currentContext = context;
            var contexts = 0;
            while (contexts < 100) {
                if (currentContext) {
                    currentContext = currentContext.homeContext;
                }
                contexts++;
            }
            if (currentContext) {
                currentContext.homeContext = undefined;
            }
        }

        function isRangeError(error) {
            return error instanceof RangeError;
        }


        /* Handles Smalltalk errors. Triggers the registered ErrorHandler
         (See the Smalltalk class ErrorHandler and its subclasses */

        function handleError(error) {
            if (!error.smalltalkError) {
                error = wrappedError(error);
            }
            globals.ErrorHandler._handleError_(error);
        }

        /* Handle thisContext pseudo variable */

        st.getThisContext = function () {
            if (thisContext) {
                thisContext.init();
                return thisContext;
            } else {
                return null;
            }
        };
    }

    MessageSendBrik.deps = ["smalltalkGlobals", "selectorConversion", "root"];
    function MessageSendBrik(brikz, st) {
        var globals = brikz.smalltalkGlobals.globals;
        var nil = brikz.root.nil;

        /* Handles unhandled errors during message sends */
        // simply send the message and handle #dnu:

        st.send2 = function (receiver, selector, args, klass) {
            var method, jsSelector = st.st2js(selector);
            if (receiver == null) {
                receiver = nil;
            }
            method = klass ? klass.fn.prototype[jsSelector] : receiver.klass && receiver[jsSelector];
            if (method) {
                return method.apply(receiver, args || []);
            } else {
                return messageNotUnderstood(receiver, selector, args);
            }
        };

        function invokeDnuMethod(receiver, stSelector, args) {
            return receiver._doesNotUnderstand_(
                globals.Message._new()
                    ._selector_(stSelector)
                    ._arguments_([].slice.call(args))
            );
        }

        /* Handles #dnu: *and* JavaScript method calls.
         if the receiver has no klass, we consider it a JS object (outside of the
         Amber system). Else assume that the receiver understands #doesNotUnderstand: */
        function messageNotUnderstood(receiver, stSelector, args) {
            if (receiver.klass != null && !receiver.allowJavaScriptCalls) {
                return invokeDnuMethod(receiver, stSelector, args);
            }
            /* Call a method of a JS object, or answer a property if it exists.
             Else try wrapping a JSObjectProxy around the receiver. */
            var propertyName = st.st2prop(stSelector);
            if (!(propertyName in receiver)) {
                return invokeDnuMethod(globals.JSObjectProxy._on_(receiver), stSelector, args);
            }
            return accessJavaScript(receiver, propertyName, args);
        }

        /* If the object property is a function, then call it, except if it starts with
         an uppercase character (we probably want to answer the function itself in this
         case and send it #new from Amber).

         Converts keyword-based selectors by using the first
         keyword only, but keeping all message arguments.

         Example:
         "self do: aBlock with: anObject" -> "self.do(aBlock, anObject)" */
        function accessJavaScript(receiver, propertyName, args) {
            var propertyValue = receiver[propertyName];
            if (typeof propertyValue === "function" && !/^[A-Z]/.test(propertyName)) {
                return propertyValue.apply(receiver, args || []);
            } else if (args.length > 0) {
                receiver[propertyName] = args[0];
                return receiver;
            } else {
                return propertyValue;
            }
        }

        st.accessJavaScript = accessJavaScript;
        this.messageNotUnderstood = messageNotUnderstood;
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
            if (typeof o === "object" || typeof o === "function") {
                return o.klass != null ? o : globals.JSObjectProxy._on_(o);
            }
            // IMPORTANT: This optimization (return o if typeof !== "object")
            // assumes all primitive types are coupled with some
            // (detached root) Smalltalk class so they can be returned as-is,
            // without boxing and looking for .klass.
            // KEEP THE primitives-are-coupled INVARIANT!
            return o;
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

    /* Making smalltalk that can run */

    function runnable() {
        brikz.dnu = DNUBrik;
        brikz.manipulation = ManipulationBrik;
        brikz.runtimeClasses = RuntimeClassesBrik;
        brikz.frameBinding = FrameBindingBrik;
        brikz.runtimeMethods = RuntimeMethodsBrik;
        brikz.messageSend = MessageSendBrik;
        brikz.runtime = RuntimeBrik;
        brikz.primitives = PrimitivesBrik;

        brikz.rebuild();
    }

    return {
        api: api,
        nil: brikz.root.nil,
        dnu: brikz.root.rootAsClass,
        globals: brikz.smalltalkGlobals.globals,
        asReceiver: brikz.asReceiver.asReceiver
    };
});
