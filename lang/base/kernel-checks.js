//jshint eqnull:true

define(function () {
    "use strict";

    function assert (fn) {
        try {
            if (fn()) return;
        } catch (ex) {
            throw new Error("Error:\n" + ex + "in assertion:\n" + fn);
        }
        throw new Error("Assertion failed:\n" + fn);
    }

    assert(function () {
        return !("hasOwnProperty" in Object.create(null));
    });
    assert(function () {
        return Object.getPrototypeOf(Object.create(null)) === null;
    });
    assert(function () {
        var p = {};
        return Object.getPrototypeOf(Object.create(p)) === p;
    });
    assert(function () {
        var p = {x: 4, y: 5}, q = {x: 6};
        var r = Object.setPrototypeOf(q, p);
        return r === q &&
            q.x === 6 &&
            q.y === 5;
    });
    // assert(function () {
    //     return new Function("return this")().Object === Object;
    // });
    // assert(function () {
    //     return Object.create(new Function("return this")()).Object === Object;
    // });
    assert(function () {
        return typeof globalThis !== "undefined";
    });
    assert(function () {
        return globalThis.Object === Object;
    });
    assert(function () {
        return Object.create(globalThis).Object === Object;
    });
    assert(function () {
        return (function () {
                return this;
            }).apply(void 0) === void 0;
    });
    assert(function () {
        return (function () {
                return this;
            }).apply(null) === null;
    });
    assert(function () {
        return (function () {
                return this;
            }).apply(3) === 3;
    });
    assert(function () {
        return (function () {
                return this;
            }).apply("foo") === "foo";
    });
    assert(function () {
        return (function () {
                return this;
            }).apply(true) === true;
    });
    assert(function () {
        var o = Object.freeze({});
        try {
            o.foo = "bar";
        } catch (ex) {
        }
        return o.foo == null;
    });
    assert(function () {
        return typeof Promise === "function";
    });
    assert(function () {
        return typeof Promise.resolve === "function";
    });
    assert(function () {
        return typeof Promise.reject === "function";
    });
    assert(function () {
        return typeof new Promise(function () {
            }).then === "function";
    });
});
