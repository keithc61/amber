//jshint eqnull:true

define(function () {
    "use strict";

    DNUBrik.deps = ["selectors", "messageSend", "manipulation", "root"];
    function DNUBrik(brikz, st) {
        var selectorsBrik = brikz.selectors;
        var messageNotUnderstood = brikz.messageSend.messageNotUnderstood;
        var installJSMethod = brikz.manipulation.installJSMethod;
        var nilAsClass = brikz.root.nilAsClass;

        /* Method not implemented handlers */

        function makeDnuHandler(pair, targetClasses) {
            var jsSelector = pair.js;
            var fn = createHandler(pair.st);
            installJSMethod(nilAsClass.fn.prototype, jsSelector, fn);
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

    RuntimeClassesBrik.deps = ["selectors", "dnu", "behaviors", "classes", "manipulation"];
    function RuntimeClassesBrik(brikz, st) {
        var selectors = brikz.selectors;
        var classes = brikz.behaviors.classes;
        var wireKlass = brikz.classes.wireKlass;
        var installMethod = brikz.manipulation.installMethod;
        var installJSMethod = brikz.manipulation.installJSMethod;

        var detachedRootClasses = [];

        function markClassDetachedRoot(klass) {
            detachedRootClasses.addElement(klass);
            klass.detachedRoot = true;
        }

        this.detachedRootClasses = function () {
            return detachedRootClasses;
        };

        /* Initialize a class in its class hierarchy. Handle both classes and
         metaclasses. */

        function initClassAndMetaclass(klass) {
            initClass(klass);
            if (klass.klass && !klass.meta) {
                initClass(klass.klass);
            }
        }

        classes().forEach(function (klass) {
            if (!klass.trait) initClassAndMetaclass(klass);
        });

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

    FrameBindingBrik.deps=["smalltalkGlobals", "runtimeClasses"];
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

        this.__init__ = function () {
            st.alias(globals.Array, "OrderedCollection");
            st.alias(globals.Date, "Time");
        }
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
            st.traverseClassTree(klass, function (subclass, sentinel) {
                if (subclass != exclude) {
                    if (initMethodInClass(subclass, selector, jsSelector)) return sentinel;
                }
            });
        }

        function initMethodInClass(klass, selector, jsSelector) {
            if (klass.methods[selector]) return true;
            if (klass.detachedRoot) {
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

        /* This is the current call context object.
         In Smalltalk code, it is accessible just by using 'thisContext' variable.
         In JS code, use api.getThisContext() (see below).
         */

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
        var nilAsReceiver = brikz.root.nilAsReceiver;

        /* Send message programmatically. Used to implement #perform: & Co. */

        st.send2 = function (receiver, selector, args, klass) {
            var method, jsSelector = st.st2js(selector);
            if (receiver == null) {
                receiver = nilAsReceiver;
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

             Converts keyword-based selectors by using the first
             keyword only, but keeping all message arguments.

             Example:
             "self do: aBlock with: anObject" -> "self.do(aBlock, anObject)"

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
         */
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

    StartImageBrik.deps = ["frameBinding", "runtimeMethods", "runtime", "primitives"];
    function StartImageBrik(brikz, st) {
        this.__init__ = function () {
            var classes = brikz.behaviors.classes;
            classes().forEach(function (klass) {
                klass._initialize();
            });
        };
        this.__init__.once = true;
    }

    /* Making smalltalk that can run */

    function configureWithRuntime(brikz) {
        brikz.dnu = DNUBrik;
        brikz.manipulation = ManipulationBrik;
        brikz.runtimeClasses = RuntimeClassesBrik;
        brikz.frameBinding = FrameBindingBrik;
        brikz.runtimeMethods = RuntimeMethodsBrik;
        brikz.messageSend = MessageSendBrik;
        brikz.runtime = RuntimeBrik;
        brikz.primitives = PrimitivesBrik;
        brikz.startImage = StartImageBrik;

        brikz.rebuild();
    }

    return configureWithRuntime;
});
