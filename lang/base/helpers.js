define(["./boot", "./kernel-goodies", "require"], function (boot, $goodies, require) {
    var globals = boot.globals,
        exports = {},
        extend = $goodies.extend,
        api = boot.api;

    // API

    exports.popupHelios = function () {
        require(['helios/index'], function (helios) {
            helios.popup();
        }, function (err) {
            window.alert("Error loading helios.\nIf not present, you can install it with 'npm install @ambers/helios --save-dev'.\nThe error follows:\n" + err);
        });
    };
    Object.defineProperty(exports, "api", {
        value: api,
        enumerable: true, configurable: true, writable: false
    });
    Object.defineProperty(exports, "globals", {
        value: globals,
        enumerable: true, configurable: true, writable: false
    });
    Object.defineProperty(exports, "$nil", {
        value: boot.nilAsReceiver,
        enumerable: true, configurable: true, writable: false
    });
    Object.defineProperty(exports, "nil", {
        value: boot.nilAsValue,
        enumerable: true, configurable: true, writable: false
    });

    function settingsInLocalStorage () {
        //jshint evil:true
        var storage = 'localStorage' in global && global.localStorage;

        if (storage) {
            var fromStorage;
            try {
                fromStorage = JSON.parse(storage.getItem('amber.SmalltalkSettings'));
            } catch (ex) {
                // pass
            }
            extend(globals.SmalltalkSettings, fromStorage || {});
            if (typeof window !== "undefined") {
                window.addEventListener('beforeunload', function () {
                    storage.setItem('amber.SmalltalkSettings', JSON.stringify(globals.SmalltalkSettings));
                });
            }
        }
    }

    exports.initialize = function (options) {
        return new Promise(function (resolve) {
            globals.SmalltalkSettings['transport.defaultAmdNamespace'] = "amber/core";
            api.amdRequire = require; // TODO better
            settingsInLocalStorage();
            extend(globals.SmalltalkSettings, options || {});
            resolve(api.initialize());
        });
    };

    exports.loadPackages = function (modules) {
        return new Promise(function (resolve, reject) {
            require(modules, resolve, reject);
        }).then(function () {
            return globals.Smalltalk._postLoad();
        });
    };

    exports.beClean = function () {
        return globals.Smalltalk._beClean();
    };

    // Exports

    return exports;
});
