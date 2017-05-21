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

    function SmalltalkGlobalsBrik (brikz, st) {
        // jshint evil:true
        var jsGlobals = new Function("return this")();
        var globals = Object.create(jsGlobals);
        globals.SmalltalkSettings = {};

        this.globals = globals;
    }

    // TODO kernel announcer instead of st._eventFooHappened(...args)

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

        function SmalltalkOrganizer () {
        }

        function SmalltalkClassOrganizer () {
            this.elements = [];
        }

        coreFns.Organizer = inherits(SmalltalkOrganizer, SmalltalkObject);
        coreFns.ClassOrganizer = inherits(SmalltalkClassOrganizer, SmalltalkOrganizer);

        this.setupClassOrganization = function (traitOrBehavior) {
            traitOrBehavior.organization = new SmalltalkClassOrganizer();
            traitOrBehavior.organization.theClass = traitOrBehavior;
        };

        this.addOrganizationElement = function (owner, element) {
            addElement(owner.organization.elements, element);
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

    function PackagesBrik (brikz, st) {
        st.packages = {};

        /* Add a package load descriptor to the system */

        st.addPackage = function (pkgName, properties) {
            if (!pkgName) return null;
            return st.packages[pkgName] = {
                pkgName: pkgName,
                properties: properties
            };
        };
    }

    BehaviorsBrik.deps = ["root", "smalltalkGlobals", "arraySet"];
    function BehaviorsBrik (brikz, st) {
        var globals = brikz.smalltalkGlobals.globals;
        var addElement = brikz.arraySet.addElement;
        var removeElement = brikz.arraySet.removeElement;

        /* Smalltalk classes */

        var classes = [];

        this.buildTraitOrClass = function (pkgName, builder) {
            var traitOrClass = globals.hasOwnProperty(builder.className) && globals[builder.className];
            if (traitOrClass) {
                if (!traitOrClass.pkg) throw new Error("Updated trait or class must have package: " + traitOrClass.className);
                // if (traitOrClass.pkg.pkgName !== pkgName) throw new Error("Incompatible cross-package update of trait or class: " + traitOrClass.className);
                builder.updateExisting(traitOrClass);
            } else {
                traitOrClass = builder.make();
                traitOrClass.pkg = pkgName;
                addTraitOrClass(traitOrClass);
            }

            return traitOrClass;
        };

        function addTraitOrClass (traitOrClass) {
            globals[traitOrClass.className] = traitOrClass;
            addElement(classes, traitOrClass);
            traitOrClass.added();
        }

        function removeTraitOrClass (traitOrClass) {
            traitOrClass.removed();
            removeElement(classes, traitOrClass);
            delete globals[traitOrClass.className];
        }

        this.removeTraitOrClass = removeTraitOrClass;

        /* Create an alias for an existing class */

        st.alias = function (traitOrClass, alias) {
            globals[alias] = traitOrClass;
        };

        /* Answer all registered Smalltalk classes */
        //TODO: remove the function and make smalltalk.classes an array

        st.classes = this.classes = function () {
            return classes;
        };
    }

    MethodsBrik.deps = ["composition", "selectors", "root", "selectorConversion"];
    function MethodsBrik (brikz, st) {
        var registerSelector = brikz.selectors.registerSelector;
        var updateMethod = brikz.composition.updateMethod;
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

        st.addMethod = function (method, traitOrBehavior) {
            if (method.methodClass != null) {
                throw new Error("addMethod: Method " + method.selector + " already bound to " + method.methodClass);
            }
            method.methodClass = traitOrBehavior;
            registerNewSelectors(method);
            traitOrBehavior.localMethods[method.selector] = method;
            updateMethod(method.selector, traitOrBehavior);
        };

        function registerNewSelectors (method) {
            var newSelectors = [];

            function selectorInUse (stSelector) {
                var pair = registerSelector(stSelector);
                if (pair) {
                    newSelectors.push(pair);
                }
            }

            selectorInUse(method.selector);
            method.messageSends.forEach(selectorInUse);
            if (st._selectorsAdded) st._selectorsAdded(newSelectors);
        }

        st.removeMethod = function (method, traitOrBehavior) {
            if (traitOrBehavior.localMethods[method.selector] !== method) return;

            delete traitOrBehavior.localMethods[method.selector];
            updateMethod(method.selector, traitOrBehavior);
        };
    }

    MethodCompositionBrik.deps = ["organize"];
    function MethodCompositionBrik (brikz, st) {
        var setupClassOrganization = brikz.organize.setupClassOrganization;
        var addOrganizationElement = brikz.organize.addOrganizationElement;

        this.setupMethods = function (traitOrBehavior) {
            setupClassOrganization(traitOrBehavior);
            traitOrBehavior.traitComposition = [];
            traitOrBehavior.localMethods = Object.create(null);
            traitOrBehavior.methods = Object.create(null);
        };

        function addMethod (method, traitOrBehavior) {
            traitOrBehavior.methods[method.selector] = method;

            // During the bootstrap, #addCompiledMethod is not used.
            // Therefore we populate the organizer here too
            addOrganizationElement(traitOrBehavior, method.protocol);

            traitOrBehavior.methodAdded(method);
        }

        function removeMethod (method, traitOrBehavior) {
            delete traitOrBehavior.methods[method.selector];

            traitOrBehavior.methodRemoved(method);

            // Do *not* delete protocols from here.
            // This is handled by #removeCompiledMethod
        }

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

        // TODO move trait transformation application to own brik in kernel-languages.js
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
            traitOrBehavior.traitComposition.forEach(function (each) {
                each.trait.removeUser(traitOrBehavior);
            });
            traitOrBehavior.traitComposition = traitComposition;
            traitOrBehavior.traitComposition.forEach(function (each) {
                each.trait.addUser(traitOrBehavior);
            });
        };

        // TODO move to MethodBrik once organization is fully on st side
        function updateMethod (selector, traitOrBehavior) {
            var oldMethod = traitOrBehavior.methods[selector],
                newMethod = traitOrBehavior.localMethods[selector];
            if (oldMethod == null && newMethod == null) {
                console.warn("Removal of nonexistent method " + traitOrBehavior + " >> " + selector);
                return;
            }
            if (newMethod === oldMethod) return;
            if (newMethod != null) addMethod(newMethod, traitOrBehavior);
            else removeMethod(oldMethod, traitOrBehavior);
        }

        this.updateMethod = updateMethod;

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
        brikz.composition = MethodCompositionBrik;
        brikz.behaviors = BehaviorsBrik;
        brikz.methods = MethodsBrik;

        brikz.rebuild();
    }

    return configureWithFundamentals;
});
