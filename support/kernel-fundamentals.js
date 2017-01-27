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

    function SmalltalkGlobalsBrik (brikz, st) {
        // jshint evil:true
        var jsGlobals = new Function("return this")();
        var globals = Object.create(jsGlobals);
        globals.SmalltalkSettings = {};

        this.globals = globals;
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

    OrganizeBrik.deps = ["arraySet", "root"];
    function OrganizeBrik (brikz, st) {
        var SmalltalkObject = brikz.root.Object;
        var coreFns = brikz.root.coreFns;
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

        coreFns.Organizer = inherits(SmalltalkOrganizer, SmalltalkObject);
        coreFns.PackageOrganizer = inherits(SmalltalkPackageOrganizer, SmalltalkOrganizer);
        coreFns.ClassOrganizer = inherits(SmalltalkClassOrganizer, SmalltalkOrganizer);

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
        var coreFns = brikz.root.coreFns;

        function SmalltalkPackage () {
        }

        coreFns.Package = inherits(SmalltalkPackage, SmalltalkObject);

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
        var coreFns = brikz.root.coreFns;
        var addElement = brikz.arraySet.addElement;
        var removeElement = brikz.arraySet.removeElement;

        function SmalltalkBehaviorBody () {
        }

        coreFns.BehaviorBody = inherits(SmalltalkBehaviorBody, SmalltalkObject);

        this.BehaviorBody = SmalltalkBehaviorBody;

        /* Smalltalk classes */

        var classes = [];

        this.setupBehavior = function (behaviorBody) {
            setupClassOrganization(behaviorBody);
            behaviorBody.methods = Object.create(null);
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
        var coreFns = brikz.root.coreFns;

        function SmalltalkMethod () {
        }

        coreFns.CompiledMethod = inherits(SmalltalkMethod, SmalltalkObject);

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
                    .replace(/%/g, '_percent')
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
                .replace(/_percent/g, '%')
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

    /* Making smalltalk that has basic building blocks */

    function configureWithFundamentals (brikz) {
        brikz.smalltalkGlobals = SmalltalkGlobalsBrik;
        brikz.root = RootBrik;
        brikz.arraySet = ArraySetBrik;
        brikz.organize = OrganizeBrik;
        brikz.selectorConversion = SelectorConversionBrik;
        brikz.selectors = SelectorsBrik;
        brikz.packages = PackagesBrik;
        brikz.behaviors = BehaviorsBrik;
        brikz.methods = MethodsBrik;

        brikz.rebuild();
    }

    return configureWithFundamentals;
});
