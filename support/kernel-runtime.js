//jshint eqnull:true

define(function () {
    "use strict";

    function defineMethod (klass, name, method) {
        Object.defineProperty(klass.prototype, name, {
            value: method,
            enumerable: false, configurable: true, writable: true
        });
    }

    DNUBrik.deps = ["selectors", "smalltalkGlobals", "manipulation", "classes"];
    function DNUBrik (brikz, st) {
        var selectorPairs = brikz.selectors.selectorPairs;
        var globals = brikz.smalltalkGlobals.globals;
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
                return globals.Message._selector_arguments_notUnderstoodBy_(
                    stSelector, [].slice.call(arguments), this
                );
            };
        }

        selectorPairs.forEach(function (pair) {
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

        classes().forEach(function (traitOrClass) {
            if (!traitOrClass.trait) initClassAndMetaclass(traitOrClass);
        });

        st._classAdded = function (klass) {
            initClassAndMetaclass(klass);
            klass._enterOrganization();
        };

        st._traitAdded = function (trait) {
            trait._enterOrganization();
        };

        st._classRemoved = function (klass) {
            klass._leaveOrganization();
        };

        st._traitRemoved = function (trait) {
            trait._leaveOrganization();
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

        st._behaviorMethodAdded = function (method, klass) {
            installMethod(method, klass);
            propagateMethodChange(klass, method, klass);
        };

        st._selectorsAdded = function (newSelectors) {
            var targetClasses = detachedRootClasses();
            newSelectors.forEach(function (pair) {
                makeDnuHandler(pair, targetClasses);
            });
        };

        st._behaviorMethodRemoved = function (method, klass) {
            delete klass.fn.prototype[method.jsSelector];
            propagateMethodChange(klass, method, null);
        };

        st._methodReplaced = function (newMethod, oldMethod, traitOrBehavior) {
            traitOrBehavior._methodOrganizationEnter_andLeave_(newMethod, oldMethod);
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
            globals.NonBooleanReceiver._signalOn_(shouldBeBoolean);
        };

        // TODO remove
        st.globalJsVariables = [];
    }

    RuntimeBrik.deps = ["selectorConversion", "smalltalkGlobals", "runtimeClasses"];
    function RuntimeBrik (brikz, st) {
        var globals = brikz.smalltalkGlobals.globals;
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
        SmalltalkMethodContext.prototype.lookupClass = null;
        SmalltalkMethodContext.prototype.outerContext = null;
        SmalltalkMethodContext.prototype.index = 0;

        defineMethod(SmalltalkMethodContext, "fill", function (receiver, selector, locals, lookupClass) {
            this.receiver = receiver;
            this.selector = selector;
            if (locals != null) this.locals = locals;
            this.lookupClass = lookupClass;
            if (this.homeContext) {
                this.homeContext.evaluatedSelector = selector;
            }
        });
        defineMethod(SmalltalkMethodContext, "fillBlock", function (locals, ctx, index) {
            if (locals != null) this.locals = locals;
            this.outerContext = ctx;
            if (index) this.index = index;
        });
        defineMethod(SmalltalkMethodContext, "init", function () {
            var frame = this;
            while (frame) {
                if (frame.init !== this.init) return frame.init();
                frame.setup(frame);
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

        st.withContext = inContext;

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

        function inContext (worker, setup) {
            var oldContext = thisContext;
            thisContext = new SmalltalkMethodContext(thisContext, setup);
            var result = oldContext == null ? resultWithErrorHandling(worker) : worker(thisContext);
            thisContext = oldContext;
            return result;
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
        st.accessJavaScript = function accessJavaScript (self, propertyName, args) {
            var propertyValue = self[propertyName];
            if (typeof propertyValue === "function" && !/^[A-Z]/.test(propertyName)) {
                return propertyValue.apply(self, args || []);
            } else if (args.length === 0) {
                return propertyValue;
            } else {
                self[propertyName] = args[0];
                return self;
            }
        };
    }

    StartImageBrik.deps = ["smalltalkGlobals"];
    function StartImageBrik (brikz, st) {
        var globals = brikz.smalltalkGlobals.globals;

        this.run = function () {
            globals.AmberBootstrapInitialization._run();
        };
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
        brikz.startImage = StartImageBrik;

        brikz.rebuild();
    }

    return configureWithRuntime;
});
