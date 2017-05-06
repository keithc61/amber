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
        return new Function("return this")().Object === Object;
    });
    assert(function () {
        return Object.create(new Function("return this")()).Object === Object;
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
});
