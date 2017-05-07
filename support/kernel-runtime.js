//jshint eqnull:true

define(function () {
    "use strict";

    function defineMethod (klass, name, method) {
        Object.defineProperty(klass.prototype, name, {
            value: method,
            enumerable: false, configurable: true, writable: true
        });
    }

    DNUBrik.deps = ["selectors", "messageSend", "manipulation", "classes"];
    function DNUBrik (brikz, st) {
        var selectorsBrik = brikz.selectors;
        var messageNotUnderstood = brikz.messageSend.messageNotUnderstood;
        var installJSMethod = brikz.manipulation.installJSMethod;
        var nilAsClass = brikz.classes.nilAsClass;

        /* Method not implemented handlers */

        function makeDnuHandler (pair, targetClasses) {
            var jsSelector = pair.js;
            var fn = createHandler(pair.st);
            installJSMethod(nilAsClass.fn.prototype, jsSelector, fn);
            targetClasses.forEach(function (target) {
                installJSMethod(target.fn.prototype, jsSelector, fn);
            });
        }

        this.makeDnuHandler = makeDnuHandler;

        /* Dnu handler method */

        function createHandler (stSelector) {
            return function () {
                return messageNotUnderstood(this, stSelector, arguments);
            };
        }

        selectorsBrik.selectorPairs.forEach(function (pair) {
            makeDnuHandler(pair, []);
        });
    }

    function ManipulationBrik (brikz, st) {
        function installJSMethod (obj, jsSelector, fn) {
            Object.defineProperty(obj, jsSelector, {
                value: fn,
                enumerable: false, configurable: true, writable: true
            });
        }

        function installMethod (method, klass) {
            installJSMethod(klass.fn.prototype, method.jsSelector, method.fn);
        }

        this.installMethod = installMethod;
        this.installJSMethod = installJSMethod;
    }

    RuntimeClassesBrik.deps = ["selectors", "dnu", "behaviors", "classes", "manipulation"];
    function RuntimeClassesBrik (brikz, st) {
        var selectors = brikz.selectors;
        var classes = brikz.behaviors.classes;
        var wireKlass = brikz.classes.wireKlass;
        var installMethod = brikz.manipulation.installMethod;
        var installJSMethod = brikz.manipulation.installJSMethod;

        var detachedRootClasses = [];

        function markClassDetachedRoot (klass) {
            klass.detachedRoot = true;
            detachedRootClasses = classes().filter(function (klass) {
                return klass.detachedRoot;
            });
        }

        this.detachedRootClasses = function () {
            return detachedRootClasses;
        };

        /* Initialize a class in its class hierarchy. Handle both classes and
         metaclasses. */

        function initClassAndMetaclass (klass) {
            initClass(klass);
            if (klass.a$cls && !klass.meta) {
                initClass(klass.a$cls);
            }
        }

        classes().forEach(function (klass) {
            if (!klass.trait) initClassAndMetaclass(klass);
        });

        st._classAdded = initClassAndMetaclass;

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
            selectors.selectorPairs.forEach(function (selectorPair) {
                var jsSelector = selectorPair.js;
                installJSMethod(myproto, jsSelector, superproto[jsSelector]);
            });
        }

        function installMethods (klass) {
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

    FrameBindingBrik.deps = ["smalltalkGlobals", "runtimeClasses"];
    function FrameBindingBrik (brikz, st) {
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

        this.__init__ = function () {
            st.alias(globals.Array, "OrderedCollection");
            st.alias(globals.Date, "Time");
        }
    }

    RuntimeMethodsBrik.deps = ["manipulation", "dnu", "runtimeClasses"];
    function RuntimeMethodsBrik (brikz, st) {
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

        function propagateMethodChange (klass, method, exclude) {
            var selector = method.selector;
            var jsSelector = method.jsSelector;
            st.traverseClassTree(klass, function (subclass, sentinel) {
                if (subclass !== exclude) {
                    if (initMethodInClass(subclass, selector, jsSelector)) return sentinel;
                }
            });
        }

        function initMethodInClass (klass, selector, jsSelector) {
            if (klass.methods[selector]) return true;
            if (klass.detachedRoot) {
                installJSMethod(klass.fn.prototype, jsSelector, klass.superclass.fn.prototype[jsSelector]);
            }
        }
    }

    PrimitivesBrik.deps = ["smalltalkGlobals"];
    function PrimitivesBrik (brikz, st) {
        var globals = brikz.smalltalkGlobals.globals;

        var oid = 0;
        /* Unique ID number generator */
        st.nextId = function () {
            console.warn("$core.nextId() deprecated. Use your own unique counter.");
            oid += 1;
            return oid;
        };

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
            globals.NonBooleanReceiver._new()._object_(shouldBeBoolean)._signal();
        };

        /* List of all reserved words in JavaScript. They may not be used as variables
         in Smalltalk. */

        st.reservedWords = [
            // http://www.ecma-international.org/ecma-262/6.0/#sec-keywords
            'break', 'case', 'catch', 'class', 'const', 'continue', 'debugger',
            'default', 'delete', 'do', 'else', 'export', 'extends', 'finally',
            'for', 'function', 'if', 'import', 'in', 'instanceof', 'new',
            'return', 'super', 'switch', 'this', 'throw', 'try', 'typeof',
            'var', 'void', 'while', 'with', 'yield',
            // in strict mode
            'let', 'static',
            // Amber protected words: these should not be compiled as-is when in code
            'arguments',
            // http://www.ecma-international.org/ecma-262/6.0/#sec-future-reserved-words
            'await', 'enum',
            // in strict mode
            'implements', 'interface', 'package', 'private', 'protected', 'public'
        ];

        st.globalJsVariables = ['window', 'document', 'process', 'global'];
    }

    RuntimeBrik.deps = ["selectorConversion", "smalltalkGlobals", "runtimeClasses"];
    function RuntimeBrik (brikz, st) {
        var globals = brikz.smalltalkGlobals.globals;
        var setClassConstructor = brikz.runtimeClasses.setClassConstructor;

        function SmalltalkMethodContext (home, setup) {
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

        defineMethod(SmalltalkMethodContext, "fill", function (receiver, selector, locals, lookupClass) {
            this.receiver = receiver;
            this.selector = selector;
            this.locals = locals || {};
            this.lookupClass = lookupClass;
            if (this.homeContext) {
                this.homeContext.evaluatedSelector = selector;
            }
        });
        defineMethod(SmalltalkMethodContext, "fillBlock", function (locals, ctx, index) {
            this.locals = locals || {};
            this.outerContext = ctx;
            this.index = index || 0;
        });
        defineMethod(SmalltalkMethodContext, "init", function () {
            var frame = this;
            while (frame) {
                if (frame.init !== this.init) return frame.init();
                frame.setup(frame);
                if (frame.outerContext) {
                    frame.outerContext.init();
                }
                frame = frame.homeContext;
            }
        });
        defineMethod(SmalltalkMethodContext, "method", function () {
            var method;
            var lookup = this.lookupClass || this.receiver.a$cls;
            while (!method && lookup) {
                method = lookup.methods[st.js2st(this.selector)];
                lookup = lookup.superclass;
            }
            return method;
        });

        setClassConstructor(globals.MethodContext, SmalltalkMethodContext);

        /* This is the current call context object.
         In Smalltalk code, it is accessible just by using 'thisContext' variable.
         In JS code, use api.getThisContext() (see below).
         */

        var thisContext = null;

        st.withContext = function (worker, setup) {
            return thisContext ?
                inContext(worker, setup) :
                inContextWithErrorHandling(worker, setup);
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

        function inContextWithErrorHandling (worker, setup) {
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

        function inContext (worker, setup) {
            var oldContext = thisContext;
            thisContext = new SmalltalkMethodContext(thisContext, setup);
            var result = worker(thisContext);
            thisContext = oldContext;
            return result;
        }

        /* Wrap a JavaScript exception in a Smalltalk Exception.

         In case of a RangeError, stub the stack after 100 contexts to
         avoid another RangeError later when the stack is manipulated. */
        function wrappedError (error) {
            var errorWrapper = globals.JavaScriptException._on_(error);
            // Add the error to the context, so it is visible in the stack
            try {
                errorWrapper._signal();
            } catch (ex) {
            }
            if (isRangeError(error)) {
                stubContextStack(errorWrapper.context);
            }
            return errorWrapper;
        }

        /* Stub the context stack after 100 contexts */
        function stubContextStack (context) {
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

        function isRangeError (error) {
            return error instanceof RangeError;
        }


        /* Handles Smalltalk errors. Triggers the registered ErrorHandler
         (See the Smalltalk class ErrorHandler and its subclasses */

        function handleError (error) {
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
    function MessageSendBrik (brikz, st) {
        var globals = brikz.smalltalkGlobals.globals;
        var nilAsReceiver = brikz.root.nilAsReceiver;

        /* Send message programmatically. Used to implement #perform: & Co. */

        st.send2 = function (self, selector, args, klass) {
            if (self == null) {
                self = nilAsReceiver;
            }
            var method = klass ? klass.fn.prototype[st.st2js(selector)] : self.a$cls && self[st.st2js(selector)];
            if (method) {
                return method.apply(self, args || []);
            } else {
                return messageNotUnderstood(self.a$cls ? self : wrapJavaScript(self), selector, args);
            }
        };

        function wrapJavaScript (o) {
            return globals.JSObjectProxy._on_(o);
        }

        st.wrapJavaScript = wrapJavaScript;

        /* Handles #dnu:. Calls #doesNotUnderstand:. */
        function messageNotUnderstood (receiver, stSelector, args) {
            return receiver._doesNotUnderstand_(
                globals.Message._new()
                    ._selector_(stSelector)
                    ._arguments_([].slice.call(args))
            );
        }

        /* If the object property is a function, then call it, except if it starts with
         an uppercase character (we probably want to answer the function itself in this
         case and send it #new from Amber).
         */
        st.accessJavaScript = function accessJavaScript (self, propertyName, args) {
            var propertyValue = self[propertyName];
            if (typeof propertyValue === "function" && !/^[A-Z]/.test(propertyName)) {
                return propertyValue.apply(self, args || []);
            } else if (args.length > 0) {
                self[propertyName] = args[0];
                return self;
            } else {
                return propertyValue;
            }
        };

        this.messageNotUnderstood = messageNotUnderstood;
    }

    /* Making smalltalk that can run */

    function configureWithRuntime (brikz) {
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

    return configureWithRuntime;
});
