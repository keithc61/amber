define([], function () {
    return function Brikz(api, apiKey, initKey, backupKey) {
        "use strict";

        //jshint eqnull:true

        var backup = {};
        apiKey = apiKey || 'exports';
        initKey = initKey || '__init__';
        backupKey = backupKey || 'backup';

        function mixin(src, target, what) {
            for (var keys = Object.keys(what || src), l = keys.length, i = 0; i < l; ++i) {
                if (src == null) {
                    target[keys[i]] = undefined;
                } else {
                    var value = src[keys[i]];
                    if (typeof value !== "undefined") {
                        target[keys[i]] = value;
                    }
                }
            }
            return target;
        }

        return function brikz() {
            Object.keys(backup).forEach(function (key) {
                mixin(null, api, (backup[key] || 0)[apiKey] || {});
            });
            var oapi = mixin(api, {}),
                order = [],
                chk = {};

            function ensure(key) {
                var b = brikz[key],
                    bak = backup[key];
                while (typeof b === "function") {
                    (b.deps || []).forEach(ensure);
                    b[backupKey] = bak;
                    mixin(null, api, api);
                    b = new b(brikz, api);
                }
                brikz[key] = b;
                if (b && !chk[key]) {
                    chk[key] = true;
                    order.push(b);
                }
                if (b && !b[apiKey]) {
                    b[apiKey] = mixin(api, {});
                }
            }

            Object.keys(brikz).forEach(ensure);
            mixin(oapi, mixin(null, api, api));
            order.forEach(function (brik) {
                mixin(brik[apiKey] || {}, api);
            });
            order.forEach(function (brik) {
                if (brik[initKey]) {
                    brik[initKey]();
                    if (brik[initKey].once) {
                        delete brik[initKey];
                    }
                }
            });
            backup = mixin(brikz, {});
        };
    };
});