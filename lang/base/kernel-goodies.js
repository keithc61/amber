//jshint eqnull:true

define(function () {
    "use strict";

    function inherits (child, parent) {
        child.prototype = Object.create(parent.prototype, {
            constructor: {
                value: child,
                enumerable: false, configurable: true, writable: true
            }
        });
        return child;
    }

    function defineMethod (klass, name, method) {
        Object.defineProperty(klass.prototype, name, {
            value: method,
            enumerable: false, configurable: true, writable: true
        });
    }

    function installJSMethod (obj, jsSelector, fn) {
        Object.defineProperty(obj, jsSelector, {
            value: fn,
            enumerable: false, configurable: true, writable: true
        });
    }

    /* Convert a Smalltalk selector into a JS selector */
    function st2js (string) {
        return '_' + string
            .replace(/:/g, '_')
            .replace(/[\&]/g, '_and')
            .replace(/[\|]/g, '_or')
            .replace(/[+]/g, '_plus')
            .replace(/-/g, '_minus')
            .replace(/[*]/g, '_star')
            .replace(/[\/]/g, '_slash')
            .replace(/[\\]/g, '_backslash')
            .replace(/[\~]/g, '_tild')
            .replace(/%/g, '_percent')
            .replace(/>/g, '_gt')
            .replace(/</g, '_lt')
            .replace(/=/g, '_eq')
            .replace(/,/g, '_comma')
            .replace(/[@]/g, '_at');
    };

    function js2st (selector) {
        if (selector.match(/^__/)) {
            return binaryJsToSt(selector);
        } else {
            return keywordJsToSt(selector);
        }
    }

    function keywordJsToSt (selector) {
        return selector.replace(/^_/, '').replace(/_/g, ':');
    }

    function binaryJsToSt (selector) {
        return selector
            .replace(/^_/, '')
            .replace(/_and/g, '&')
            .replace(/_or/g, '|')
            .replace(/_plus/g, '+')
            .replace(/_minus/g, '-')
            .replace(/_star/g, '*')
            .replace(/_slash/g, '/')
            .replace(/_backslash/g, '\\')
            .replace(/_tild/g, '~')
            .replace(/_percent/g, '%')
            .replace(/_gt/g, '>')
            .replace(/_lt/g, '<')
            .replace(/_eq/g, '=')
            .replace(/_comma/g, ',')
            .replace(/_at/g, '@');
    }

    return {
        js2st: js2st,
        st2js: st2js,
        installJSMethod: installJSMethod,
        defineMethod: defineMethod,
        inherits: inherits
    }
});
