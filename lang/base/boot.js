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
 | Copyright (c) 2012-2019
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

define([
    'require', './kernel-checks', './brikz', './kernel-fundamentals', './kernel-language'
], function (require, _, Brikz, configureWithFundamentals, configureWithHierarchy) {
    "use strict";

    var runtimeLoadedPromise = new Promise(function (resolve, reject) {
        require(['./kernel-runtime'], resolve, reject);
    });

    SmalltalkInitBrik.deps = ["smalltalkGlobals"];
    function SmalltalkInitBrik (brikz, st) {
        var globals = brikz.smalltalkGlobals.globals;
        var initialized = false;

        globals.SmalltalkSettings = {};

        /* Smalltalk initialization. Called on page load */

        st.initialize = function () {
            return runtimeLoadedPromise.then(function (configureWithRuntime) {
                if (initialized) return;
                brikz.classes.bootstrapHierarchy();
                configureWithRuntime(brikz);
                return Promise.resolve(brikz.startImage.run())
                    .then(function () {
                        initialized = true;
                    });
            });
        };
    }

    /* Adds AMD and requirejs related methods to the api */
    function AMDBrik (brikz, st) {
        st.amdRequire = require;
        st.defaultTransportType = st.defaultTransportType || "amd";
        st.defaultAmdNamespace = st.defaultAmdNamespace || "amber/core";
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
            else if (o.a$cls != null) return o;
            else return st.wrapJavaScript(o);
        };
    }

    var api = {};
    var brikz = Brikz(api);

    configureWithFundamentals(brikz);

    configureWithHierarchy(brikz);

    brikz.asReceiver = AsReceiverBrik;
    brikz.stInit = SmalltalkInitBrik;
    brikz.amd = AMDBrik;

    brikz();

    // TODO deprecated, remove
    Object.defineProperty(brikz.smalltalkGlobals.globals, "CharacterArray", {
        enumerable: true,
        configurable: true,
        get: function () {
            return this.String;
        }
    });

    return {
        api: api,
        nilAsReceiver: brikz.nil.nilAsReceiver,
        nilAsValue: brikz.nil.nilAsValue,
        nilAsClass: brikz.classes.nilAsClass,
        globals: brikz.smalltalkGlobals.globals,
        asReceiver: brikz.asReceiver.asReceiver
    };
});
