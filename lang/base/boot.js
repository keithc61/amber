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
 | Copyright (c) 2012-2020
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
], function (require, _, Brikz, FundamentalsFactory, LanguageFactory) {
    "use strict";

    var globals = Object.create(globalThis);
    var emit = Object.create(null);

    var runtimeLoadedPromise = new Promise(function (resolve, reject) {
        require(['./kernel-runtime'], resolve, reject);
    });

    function SmalltalkInitBrik (brikz, st) {
        var initialized = false;

        globals.SmalltalkSettings = {};

        /* Smalltalk initialization. Called on page load */

        st.initialize = function () {
            return runtimeLoadedPromise.then(function (RuntimeFactory) {
                if (initialized) return;
                brikz.classModel.bootstrapHierarchy(globals.Class);
                RuntimeFactory(globals, emit).configure(brikz);
                return Promise.resolve(brikz.startImage.run())
                    .then(function () {
                        initialized = true;
                    });
            });
        };
    }

    var api = {};
    var brikz = Brikz(api);

    var fundamentals = FundamentalsFactory(globals, emit);
    fundamentals.configure(brikz);

    LanguageFactory(fundamentals.specialConstructors, emit).configure(brikz);

    brikz.stInit = SmalltalkInitBrik;

    brikz();

    return {
        api: api,
        nilAsReceiver: brikz.nil.nilAsReceiver,
        nilAsValue: brikz.nil.nilAsValue,
        nilAsClass: brikz.classModel.nilAsClass,
        globals: globals,
        asReceiver: brikz.classModel.asReceiver
    };
});
