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

    function depends(deps, brik) {
        brik.deps = deps;
        return brik;
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
            st.addPackage("Kernel-Objects");
            st.addCoupledClass("ProtoObject", undefined, "Kernel-Objects", SmalltalkProtoObject);
            st.addCoupledClass("Object", globals.ProtoObject, "Kernel-Objects", SmalltalkObject);
            st.addCoupledClass("UndefinedObject", globals.Object, "Kernel-Objects", SmalltalkNil);
        };
    }

    var OrganizeBrik = depends(["augments", "root"], function (brikz, st) {
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
            st.addPackage("Kernel-Infrastructure");
            st.addCoupledClass("Organizer", globals.Object, "Kernel-Infrastructure", SmalltalkOrganizer);
            st.addCoupledClass("PackageOrganizer", globals.Organizer, "Kernel-Infrastructure", SmalltalkPackageOrganizer);
            st.addCoupledClass("ClassOrganizer", globals.Organizer, "Kernel-Infrastructure", SmalltalkClassOrganizer);
        };

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
    });

    var SelectorsBrik = depends(["selectorConversion"], function (brikz, st) {
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
    });

    var DNUBrik = depends(["messageSend", "manipulation", "root"], function (brikz, st) {
        var installJSMethod = brikz.manipulation.installJSMethod;
        var RootProto = brikz.root.rootAsClass.fn.prototype;

        /* Method not implemented handlers */

        this.makeDnuHandler = function (pair, targetClasses) {
            var jsSelector = pair.js;
            var fn = createHandler(pair.st);
            installJSMethod(RootProto, jsSelector, fn);
            targetClasses.forEach(function (target) {
                installJSMethod(target.fn.prototype, jsSelector, fn);
            });
        };

        /* Dnu handler method */

        function createHandler(stSelector) {
            return function () {
                return brikz.messageSend.messageNotUnderstood(this, stSelector, arguments);
            };
        }
    });

    var ClassInitBrik = depends(["selectors", "manipulation"], function (brikz, st) {
        var selectors = brikz.selectors;
        var wireKlass = brikz.manipulation.wireKlass;
        var installMethod = brikz.manipulation.installMethod;
        var installJSMethod = brikz.manipulation.installJSMethod;

        /* Initialize a class in its class hierarchy. Handle both classes and
         metaclasses. */

        st.init = function (klass) {
            initClass(klass);
            if (klass.klass && !klass.meta) {
                initClass(klass.klass);
            }
        };

        function initClass(klass) {
            wireKlass(klass);
            if (klass.detachedRoot) {
                copySuperclass(klass);
            }
            installMethods(klass);
        }

        this.initClass = initClass;

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
    });

    function ManipulationBrik(brikz, st) {
        function wireKlass(klass) {
            Object.defineProperty(klass.fn.prototype, "klass", {
                value: klass,
                enumerable: false, configurable: true, writable: true
            });
        }

        function installJSMethod(obj, jsSelector, fn) {
            Object.defineProperty(obj, jsSelector, {
                value: fn,
                enumerable: false, configurable: true, writable: true
            });
        }

        function installMethod(method, klass) {
            installJSMethod(klass.fn.prototype, method.jsSelector, method.fn);
        }

        this.wireKlass = wireKlass;
        this.installMethod = installMethod;
        this.installJSMethod = installJSMethod;
    }

    var PackagesBrik = depends(["organize", "root"], function (brikz, st) {
        var setupPackageOrganization = brikz.organize.setupPackageOrganization;
        var SmalltalkObject = brikz.root.Object;

        function SmalltalkPackage() {
        }

        inherits(SmalltalkPackage, SmalltalkObject);

        this.__init__ = function () {
            var globals = brikz.smalltalkGlobals.globals;
            st.addPackage("Kernel-Infrastructure");
            st.addCoupledClass("Package", globals.Object, "Kernel-Infrastructure", SmalltalkPackage);
        };

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
    });

    var ClassesBrik = depends(["organize", "manipulation", "root", "smalltalkGlobals", "classInit"], function (brikz, st) {
        var setupClassOrganization = brikz.organize.setupClassOrganization;
        var addOrganizationElement = brikz.organize.addOrganizationElement;
        var removeOrganizationElement = brikz.organize.removeOrganizationElement;
        var wireKlass = brikz.manipulation.wireKlass;
        var globals = brikz.smalltalkGlobals.globals;
        var initClass = brikz.classInit.initClass;
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
            st.addPackage("Kernel-Classes");
            st.addCoupledClass("Behavior", globals.Object, "Kernel-Classes", SmalltalkBehavior);
            st.addCoupledClass("Metaclass", globals.Behavior, "Kernel-Classes", SmalltalkMetaclass);
            st.addCoupledClass("Class", globals.Behavior, "Kernel-Classes", SmalltalkClass);

            // Manually bootstrap the metaclass hierarchy
            globals.ProtoObject.klass.superclass = rootAsClass.klass = globals.Class;
            addSubclass(globals.ProtoObject.klass);
        };

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
            if (theClass && theClass.superclass == superclass) {
                if (iVarNames) theClass.iVarNames = iVarNames;
                if (pkg) theClass.pkg = pkg;
                if (fn && theClass.fn !== fn) {
                    fn.prototype = theClass.fn.prototype;
                    theClass.fn = fn;
                    fn.prototype.constructor = fn;
                }
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

        var detachedRootClasses = [];

        /* Create a new class coupling with a JavaScript constructor,
         optionally detached root, and add it to the global smalltalk object.*/

        st.addDetachedRootClass = function (className, superclass, pkgName, fn) {
            var klass = rawAddClass(pkgName, className, superclass, null, fn);
            markClassDetachedRoot(klass);
            return klass;
        };

        function markClassDetachedRoot(klass) {
            detachedRootClasses.addElement(klass);
            klass.detachedRoot = true;
        }

        st.addCoupledClass = function (className, superclass, pkgName, fn) {
            return rawAddClass(pkgName, className, superclass, null, fn);
        };

        /* Manually set the constructor of an existing Smalltalk klass, making it a detached root class. */

        st.setClassConstructor = function (klass, constructor) {
            markClassDetachedRoot(klass);
            klass.fn = constructor;
            initClass(klass);
        };

        /* Create an alias for an existing class */

        st.alias = function (klass, alias) {
            globals[alias] = klass;
        };

        /* Answer all registered Smalltalk classes */
        //TODO: remove the function and make smalltalk.classes an array

        st.classes = function () {
            return classes;
        };

        this.detachedRootClasses = function () {
            return detachedRootClasses;
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
    });

    var MethodsBrik = depends(["manipulation", "organize", "stInit", "selectors", "dnu", "root", "selectorConversion", "classes"], function (brikz, st) {
        var installMethod = brikz.manipulation.installMethod;
        var installJSMethod = brikz.manipulation.installJSMethod;
        var addOrganizationElement = brikz.organize.addOrganizationElement;
        var initialized = brikz.stInit.initialized;
        var registerSelector = brikz.selectors.registerSelector;
        var makeDnuHandler = brikz.dnu.makeDnuHandler;
        var SmalltalkObject = brikz.root.Object;
        var detachedRootClasses = brikz.classes.detachedRootClasses;

        function SmalltalkMethod() {
        }

        inherits(SmalltalkMethod, SmalltalkObject);

        this.__init__ = function () {
            var globals = brikz.smalltalkGlobals.globals;
            st.addPackage("Kernel-Methods");
            st.addCoupledClass("CompiledMethod", globals.Object, "Kernel-Methods", SmalltalkMethod);
        };

        /* Smalltalk method object. To add a method to a class,
         use smalltalk.addMethod() */

        st.method = function (spec) {
            var that = new SmalltalkMethod();
            that.selector = spec.selector;
            that.jsSelector = spec.jsSelector;
            that.args = spec.args || {};
            that.protocol = spec.protocol;
            that.source = spec.source;
            that.messageSends = spec.messageSends || [];
            that.referencedClasses = spec.referencedClasses || [];
            that.fn = spec.fn;
            return that;
        };

        function ensureJsSelector(method) {
            if (!(method.jsSelector)) {
                method.jsSelector = st.st2js(method.selector);
            }
        }

        /* Add/remove a method to/from a class */

        st.addMethod = function (method, klass) {
            ensureJsSelector(method);
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

            var targetClasses = [];

            if (initialized()) {
                installMethod(method, klass);
                propagateMethodChange(klass, method, klass);
                targetClasses = detachedRootClasses();
            }

            newSelectors.forEach(function (pair) {
                makeDnuHandler(pair, targetClasses);
            });
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

        st.removeMethod = function (method, klass) {
            if (klass !== method.methodClass) {
                throw new Error(
                    "Refusing to remove method " +
                    method.methodClass.className + ">>" + method.selector +
                    " from different class " +
                    klass.className);
            }

            ensureJsSelector(method);
            delete klass.fn.prototype[method.jsSelector];
            delete klass.methods[method.selector];

            if (initialized()) {
                propagateMethodChange(klass, method, null);
            }

            // Do *not* delete protocols from here.
            // This is handled by #removeCompiledMethod
        };
    });

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

    var SmalltalkInitBrik = depends(["classInit", "classes"], function (brikz, st) {
        var initialized = false;

        /* Smalltalk initialization. Called on page load */

        st.initialize = function () {
            if (initialized) {
                return;
            }

            st.classes().forEach(function (klass) {
                st.init(klass);
            });

            runnable();

            st.classes().forEach(function (klass) {
                klass._initialize();
            });

            initialized = true;
        };

        this.initialized = function () {
            return initialized;
        };

        this.__init__ = function () {
            var globals = brikz.smalltalkGlobals.globals;
            st.addPackage("Kernel-Methods");
            st.addDetachedRootClass("Number", globals.Object, "Kernel-Objects", Number);
            st.addDetachedRootClass("BlockClosure", globals.Object, "Kernel-Methods", Function);
            st.addDetachedRootClass("Boolean", globals.Object, "Kernel-Objects", Boolean);
            st.addDetachedRootClass("Date", globals.Object, "Kernel-Objects", Date);

            st.addPackage("Kernel-Collections");
            st.addClass("Collection", globals.Object, null, "Kernel-Collections");
            st.addClass("IndexableCollection", globals.Collection, null, "Kernel-Collections");
            st.addClass("SequenceableCollection", globals.IndexableCollection, null, "Kernel-Collections");
            st.addClass("CharacterArray", globals.SequenceableCollection, null, "Kernel-Collections");
            st.addDetachedRootClass("String", globals.CharacterArray, "Kernel-Collections", String);
            st.addDetachedRootClass("Array", globals.SequenceableCollection, "Kernel-Collections", Array);
            st.addDetachedRootClass("RegularExpression", globals.Object, "Kernel-Collections", RegExp);

            st.addPackage("Kernel-Exceptions");
            st.addDetachedRootClass("Error", globals.Object, "Kernel-Exceptions", Error);

            st.addPackage("Kernel-Promises");
            st.addClass("Thenable", globals.Object, null, "Kernel-Promises");
            st.addDetachedRootClass("Promise", globals.Thenable, "Kernel-Promises", Promise);

            /* Alias definitions */

            st.alias(globals.Array, "OrderedCollection");
            st.alias(globals.Date, "Time");
        };
    });

    var PrimitivesBrik = depends(["smalltalkGlobals"], function (brikz, st) {
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
    });

    var RuntimeBrik = depends(["selectorConversion", "smalltalkGlobals", "root"], function (brikz, st) {
        var globals = brikz.smalltalkGlobals.globals;
        var SmalltalkObject = brikz.root.Object;

        function SmalltalkMethodContext(home, setup) {
            this.sendIdx = {};
            this.homeContext = home;
            this.setup = setup || function () {
                };

            this.supercall = false;
        }

        inherits(SmalltalkMethodContext, SmalltalkObject);

        this.__init__ = function () {
            var globals = brikz.smalltalkGlobals.globals;
            st.addPackage("Kernel-Methods");
            st.addCoupledClass("MethodContext", globals.Object, "Kernel-Methods", SmalltalkMethodContext);

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
        };

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
    });

    var MessageSendBrik = depends(["smalltalkGlobals", "selectorConversion", "root"], function (brikz, st) {
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
    });

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
        this.__init__ = function () {
            st.amdRequire = require;
            st.defaultTransportType = st.defaultTransportType || "amd";
            st.defaultAmdNamespace = st.defaultAmdNamespace || "amber_core";
        };
    }

    /* Defines asReceiver to be present at load time */
    /* (logically it belongs more to PrimitiveBrik) */
    var AsReceiverBrik = depends(["smalltalkGlobals", "root"], function (brikz, st) {

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
    });

    var api = {};
    var brikz = new Brikz(api);

    /* Making smalltalk that can load */

    brikz.smalltalkGlobals = SmalltalkGlobalsBrik;
    brikz.root = RootBrik;
    brikz.selectors = SelectorsBrik;
    brikz.dnu = DNUBrik;
    brikz.organize = OrganizeBrik;
    brikz.selectorConversion = SelectorConversionBrik;
    brikz.classInit = ClassInitBrik;
    brikz.manipulation = ManipulationBrik;
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
