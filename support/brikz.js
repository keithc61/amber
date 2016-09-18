define([], function () {
    return function Brikz(api, apiKey, initKey) {
        //jshint eqnull:true

        var brikz = this,
            backup = {};
        apiKey = apiKey || 'exports';
        initKey = initKey || '__init__';

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

        Object.defineProperties(this, {
            rebuild: { value: null, enumerable: false, configurable: true, writable: true }
        });
        var exclude = mixin(this, {});

        this.rebuild = function () {
            Object.keys(backup).forEach(function (key) {
                mixin(null, api, (backup[key] || 0)[apiKey] || {});
            });
            var oapi = mixin(api, {}),
                order = [],
                chk = {};

            function ensure(key) {
                if (key in exclude) {
                    return null;
                }
                var b = brikz[key],
                    bak = backup[key];
                mixin(null, api, api);
                while (typeof b === "function") {
                    (b.deps || []).forEach(ensure);
                    b = new b(brikz, api, bak);
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