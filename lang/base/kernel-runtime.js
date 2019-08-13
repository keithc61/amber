//jshint eqnull:true

define(['./kernel-goodies'], function ($goodies) {
    "use strict";

    var installMethodOfJsObject = $goodies.installMethodOfJsObject;
    var declareJsMethod = $goodies.declareJsMethod;
    var st2js = $goodies.st2js;
    var js2st = $goodies.js2st;

    function SelectorConversionBrik (brikz, st) {
        var st2jsMemo = Object.create(null);

        st.st2js = function (stSelector) {
            return st2jsMemo[stSelector] || st2js(stSelector);
        };

        this.st2js = function (stSelector) {
            return st2jsMemo[stSelector] || (st2jsMemo[stSelector] = st2js(stSelector));
        };

        /* Convert a string to a valid smalltalk selector.
         if you modify the following functions, also change st2js
         accordingly */
        st.js2st = js2st;

        st.st2prop = function (stSelector) {
            var colonPosition = stSelector.indexOf(':');
            return colonPosition === -1 ? stSelector : stSelector.slice(0, colonPosition);
        };
    }

    function RuntimeFactory (globals, emit) {
        RuntimeSelectorsBrik.deps = ["selectors", "selectorConversion", "classes"];

        function RuntimeSelectorsBrik (brikz, st) {
            var selectors = brikz.selectors.selectors;
            var nilAsClass = brikz.classes.nilAsClass;
            var st2js = brikz.selectorConversion.st2js;

            var jsSelectors = this.jsSelectors = [];

            /* Method not implemented handlers */

            function installNewSelectors (newSelectors, targetClasses) {
                newSelectors.forEach(function (selector) {
                    var jsSelector = st2js(selector);
                    jsSelectors.push(jsSelector);
                    var fn = createDnuHandler(selector);
                    installMethodOfJsObject(nilAsClass.fn.prototype, jsSelector, fn);
                    targetClasses.forEach(function (target) {
                        installMethodOfJsObject(target.fn.prototype, jsSelector, fn);
                    });
                });
            }

            this.installNewSelectors = installNewSelectors;

            /* Dnu handler method */

            function createDnuHandler (stSelector) {
                return function () {
                    return globals.Message._selector_arguments_notUnderstoodBy_(
                        stSelector, [].slice.call(arguments), this
                    );
                };
            }

            installNewSelectors(selectors, []);
        }

        RuntimeClassesBrik.deps = ["runtimeSelectors", "behaviors", "classes", "runtimeMethods"];

        function RuntimeClassesBrik (brikz, st) {
            var jsSelectors = brikz.runtimeSelectors.jsSelectors;
            var installNewSelectors = brikz.runtimeSelectors.installNewSelectors;
            var installAmberMethodIntoAmberClass = brikz.runtimeMethods.installAmberMethodIntoAmberClass;
            var traitsOrClasses = brikz.behaviors.traitsOrClasses;
            var wireKlass = brikz.classes.wireKlass;
            var installIvarCompat = brikz.classes.installIvarCompat;

            var detachedRootClasses = [];

            function detachClass (klass) {
                klass.detachedRoot = true;
                detachedRootClasses = traitsOrClasses.filter(function (klass) {
                    return klass.detachedRoot;
                });
                initClass(klass);
            }

            st.detachClass = detachClass;

            emit.selectorsAdded = function (newSelectors) {
                installNewSelectors(newSelectors, detachedRootClasses);
            };

            /* Initialize a class in its class hierarchy. Handle both classes and
             metaclasses. */

            function initClassAndMetaclass (klass) {
                initClass(klass);
                if (klass.a$cls && !klass.meta) {
                    initClass(klass.a$cls);
                }
            }

            traitsOrClasses.forEach(function (traitOrClass) {
                if (!traitOrClass.trait) initClassAndMetaclass(traitOrClass);
            });

            function installStHooks () {
                emit.classAdded = function (klass) {
                    initClassAndMetaclass(klass);
                    klass._enterOrganization();
                };

                emit.traitAdded = function (trait) {
                    trait._enterOrganization();
                };

                emit.classRemoved = function (klass) {
                    klass._leaveOrganization();
                };

                emit.traitRemoved = function (trait) {
                    trait._leaveOrganization();
                };
            }

            this.installStHooks = installStHooks;

            emit.classAdded = function (klass) {
                initClassAndMetaclass(klass);
            };

            function initClass (klass) {
                wireKlass(klass);
                if (klass.detachedRoot) {
                    copySuperclass(klass);
                }
                installMethods(klass);
            }

            function copySuperclass (klass) {
                var myproto = klass.fn.prototype,
                    superproto = klass.superclass.fn.prototype;
                jsSelectors.forEach(function (jsSelector) {
                    installMethodOfJsObject(myproto, jsSelector, superproto[jsSelector]);
                });
            }

            function installMethods (klass) {
                var methods = klass.methods;
                Object.keys(methods).forEach(function (selector) {
                    installAmberMethodIntoAmberClass(methods[selector], klass);
                });
            }

            /* Create an alias for an existing class */

            st.alias = function (traitOrClass, alias) {
                globals[alias] = traitOrClass;
            };

            /* Manually set the constructor of an existing Smalltalk klass, making it a detached root class. */

            st.setClassConstructor = this.setClassConstructor = function (klass, constructor) {
                klass.fn = constructor;
                detachClass(klass);
                installIvarCompat(klass);
                klass.subclasses.forEach(reprotoFn(constructor));
            };

            function reprotoFn (constructor) {
                var prototype = constructor.prototype;
                return function (subclass) {
                    Object.setPrototypeOf(subclass.fn.prototype, prototype);
                };
            }
        }

        FrameBindingBrik.deps = ["runtimeClasses"];

        function FrameBindingBrik (brikz, st) {
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

            this.__init__ = function () {
                st.alias(globals.Array, "OrderedCollection");
                st.alias(globals.Date, "Time");
            }
        }

        RuntimeMethodsBrik.deps = ["selectorConversion"];

        function RuntimeMethodsBrik (brikz, st) {
            var st2js = brikz.selectorConversion.st2js;

            function installAmberMethodIntoAmberClass (method, klass) {
                var jsSelector = method.jsSelector;
                if (!jsSelector) {
                    jsSelector = method.jsSelector = st2js(method.selector);
                }
                installMethodOfJsObject(klass.fn.prototype, jsSelector, method.fn);
            }

            this.installAmberMethodIntoAmberClass = installAmberMethodIntoAmberClass;

            emit.behaviorMethodAdded = function (method, klass) {
                installAmberMethodIntoAmberClass(method, klass);
                propagateMethodChange(klass, method, klass);
            };

            emit.behaviorMethodRemoved = function (method, klass) {
                delete klass.fn.prototype[method.jsSelector];
                propagateMethodChange(klass, method, null);
            };

            function installStHooks () {
                emit.methodReplaced = function (newMethod, oldMethod, traitOrBehavior) {
                    traitOrBehavior._methodOrganizationEnter_andLeave_(newMethod, oldMethod);
                };
            }

            this.installStHooks = installStHooks;

            function propagateMethodChange (klass, method, exclude) {
                var selector = method.selector;
                var jsSelector = method.jsSelector;
                st.traverseClassTree(klass, function (subclass, sentinel) {
                    if (subclass === exclude) return;
                    if (subclass.methods[selector]) return sentinel;
                    if (subclass.detachedRoot) {
                        installMethodOfJsObject(subclass.fn.prototype, jsSelector, subclass.superclass.fn.prototype[jsSelector]);
                    }
                });
            }
        }

        function PrimitivesBrik (brikz, st) {
            /* Converts a JavaScript object to valid Smalltalk Object */
            st.readJSObject = function (js) {
                if (js == null) return null;
                else if (Array.isArray(js)) return js.map(st.readJSObject);
                else if (js.constructor !== Object) return js;

                var pairs = [];
                for (var i in js) {
                    pairs.push(i, st.readJSObject(js[i]));
                }
                return globals.Dictionary._newFromPairs_(pairs);
            };

            /* Boolean assertion */
            st.assert = function (shouldBeBoolean) {
                if (typeof shouldBeBoolean === "boolean") return shouldBeBoolean;
                else if (shouldBeBoolean != null && typeof shouldBeBoolean === "object") {
                    shouldBeBoolean = shouldBeBoolean.valueOf();
                    if (typeof shouldBeBoolean === "boolean") return shouldBeBoolean;
                }
                globals.NonBooleanReceiver._signalOn_(shouldBeBoolean);
            };
        }

        RuntimeBrik.deps = ["selectorConversion", "runtimeClasses"];

        function RuntimeBrik (brikz, st) {
            var setClassConstructor = brikz.runtimeClasses.setClassConstructor;

            function SmalltalkMethodContext (home, setup) {
                // TODO lazy fill of .sendIdx
                this.sendIdx = {};
                // TODO very likely .senderContext, not .homeContext here
                this.homeContext = home;
                this.setup = setup;
            }

            // Fallbacks
            SmalltalkMethodContext.prototype.supercall = false;
            SmalltalkMethodContext.prototype.locals = Object.freeze({});
            SmalltalkMethodContext.prototype.receiver = null;
            SmalltalkMethodContext.prototype.selector = null;
            SmalltalkMethodContext.prototype.outerContext = null;
            SmalltalkMethodContext.prototype.index = 0;
            declareJsMethod(SmalltalkMethodContext.prototype, "fill");
            declareJsMethod(SmalltalkMethodContext.prototype, "fillBlock");

            SmalltalkMethodContext.prototype.fill = function (receiver, selector, locals) {
                this.receiver = receiver;
                this.selector = selector;
                if (locals != null) this.locals = locals;
                if (this.homeContext) {
                    this.homeContext.evaluatedSelector = selector;
                }
            };

            SmalltalkMethodContext.prototype.fillBlock = function (locals, ctx, index) {
                if (locals != null) this.locals = locals;
                this.outerContext = ctx;
                if (index) this.index = index;
            };

            setClassConstructor(globals.MethodContext, SmalltalkMethodContext);

            /* This is the current call context object.
             In Smalltalk code, it is accessible just by using 'thisContext' variable.
             In JS code, use api.getThisContext() (see below).
             */

            var thisContext = null;

            /*
             Runs worker function so that error handler is not set up
             if there isn't one. This is accomplished by unconditional
             wrapping inside a context of a simulated `nil seamlessDoIt` call,
             which then stops error handler setup (see st.withContext above).
             The effect is, $core.seamless(fn)'s exceptions are not
             handed into ST error handler and caller should process them.
             */
            st.seamless = function (worker) {
                var oldContext = thisContext;
                thisContext = new SmalltalkMethodContext(thisContext, function (ctx) {
                    ctx.fill(null, "seamlessDoIt", {}, globals.UndefinedObject);
                });
                var result = worker(thisContext);
                thisContext = oldContext;
                return result;
            };

            function resultWithErrorHandling (worker) {
                try {
                    return worker(thisContext);
                } catch (error) {
                    globals.ErrorHandler._handleError_(error);
                    thisContext = null;
                    // Rethrow the error in any case.
                    throw error;
                }
            }

            /*
             Standard way to run within context.
             Sets up error handler if entering first ST context in a stack.
             */
            st.withContext = function (worker, setup) {
                var oldContext = thisContext;
                thisContext = new SmalltalkMethodContext(thisContext, setup);
                var result = oldContext == null ? resultWithErrorHandling(worker) : worker(thisContext);
                thisContext = oldContext;
                return result;
            };

            /* Handle thisContext pseudo variable */

            st.getThisContext = function () {
                if (!thisContext) return null;
                for (var frame = thisContext; frame; frame = frame.homeContext) {
                    frame.setup(frame);
                }
                return thisContext;
            };
        }

        MessageSendBrik.deps = ["selectorConversion"];

        function MessageSendBrik (brikz, st) {

            /* Send message programmatically. Used to implement #perform: & Co. */
            st.send2 = function (self, selector, args, klass) {
                var method = klass ? klass.fn.prototype[st.st2js(selector)] : self.a$cls && self[st.st2js(selector)];
                return method != null ?
                    method.apply(self, args || []) :
                    globals.Message._selector_arguments_notUnderstoodBy_(
                        selector, [].slice.call(args), self.a$cls ? self : wrapJavaScript(self)
                    );
            };

            function wrapJavaScript (o) {
                return globals.JSObjectProxy._on_(o);
            }

            st.wrapJavaScript = wrapJavaScript;

            /* If the object property is a function, then call it, except if it starts with
             an uppercase character (we probably want to answer the function itself in this
             case and send it #new from Amber).
             */
            st.accessJavaScript = function (self, propertyName, args) {
                var propertyValue = self[propertyName];
                if (typeof propertyValue === "function" && !(args.length === 0 && /^[A-Z]/.test(propertyName)))
                    return propertyValue.apply(self, args);
                switch (args.length) {
                    case 0:
                        return propertyValue;
                    case 1:
                        self[propertyName] = args[0];
                        return self;
                    default:
                        throw new Error("Cannot interpret " + propertyName + " with " + args.length + " arguments; field is a " + typeof propertyValue + ", not a function")
                }
            };
        }

        StartImageBrik.deps = ["runtimeClasses", "runtimeMethods"];

        function StartImageBrik (brikz, st) {
            this.run = function () {
                brikz.runtimeClasses.installStHooks();
                brikz.runtimeMethods.installStHooks();
                return globals.AmberBootstrapInitialization._run();
            };
        }

        /* Making smalltalk that can run */

        function configure (brikz) {
            brikz.runtimeSelectors = RuntimeSelectorsBrik;
            brikz.runtimeClasses = RuntimeClassesBrik;
            brikz.frameBinding = FrameBindingBrik;
            brikz.runtimeMethods = RuntimeMethodsBrik;
            brikz.messageSend = MessageSendBrik;
            brikz.runtime = RuntimeBrik;
            brikz.primitives = PrimitivesBrik;
            brikz.selectorConversion = SelectorConversionBrik;
            brikz.startImage = StartImageBrik;

            brikz();
        }

        return {configure: configure};
    }

    return RuntimeFactory;
});
