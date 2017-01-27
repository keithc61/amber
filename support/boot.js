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

define([
    'require', './brikz', './kernel-fundamentals', './kernel-language', './compatibility'
], function (require, Brikz, configureWithFundamentals, configureWithHierarchy) {
    "use strict";

    require(['./kernel-runtime']); // preload

    SmalltalkInitBrik.deps = ["classes"];
    function SmalltalkInitBrik (brikz, st) {
        var bootstrapHierarchy = brikz.classes.bootstrapHierarchy;

        var initialized = false;
        var runtimeLoadedPromise = new Promise(function (resolve, reject) {
            require(['./kernel-runtime'], resolve, reject);
        });

        /* Smalltalk initialization. Called on page load */

        st.initialize = function () {
            return runtimeLoadedPromise.then(function (configureWithRuntime) {
                if (initialized) return;
                bootstrapHierarchy();
                configureWithRuntime(brikz);
                initialized = true;
            });
        };
    }

    /* Adds AMD and requirejs related methods to the api */
    function AMDBrik (brikz, st) {
        st.amdRequire = require;
        st.defaultTransportType = st.defaultTransportType || "amd";
        st.defaultAmdNamespace = st.defaultAmdNamespace || "amber_core";
    }

    var api = {};
    var brikz = new Brikz(api);

    configureWithFundamentals(brikz);

    configureWithHierarchy(brikz);

    brikz.stInit = SmalltalkInitBrik;
    brikz.amd = AMDBrik;

    brikz.rebuild();

    return {
        api: api,
        nil/* TODO deprecate */: brikz.nil.nilAsReceiver,
        nilAsReceiver: brikz.nil.nilAsReceiver,
        dnu/* TODO deprecate */: brikz.classes.nilAsClass,
        nilAsClass: brikz.classes.nilAsClass,
        globals: brikz.smalltalkGlobals.globals,
        asReceiver: brikz.asReceiver.asReceiver
    };
});
