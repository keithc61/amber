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

    function installMethodOfJsObject (obj, name, fn) {
        Object.defineProperty(obj, name, {
            value: fn,
            enumerable: false, configurable: true, writable: true
        });
    }

    function noop () {
    }

    function declareJsMethod (obj, name) {
        if (obj[name] == null) installMethodOfJsObject(obj, name, noop);
    }

    var table = {
        ':': '_',
        '&': '_and',
        '|': '_or',
        '+': '_plus',
        '-': '_minus',
        '*': '_star',
        '/': '_slash',
        '\\': '_backslash',
        '~': '_tild',
        '%': '_percent',
        '>': '_gt',
        '<': '_lt',
        '=': '_eq',
        ',': '_comma',
        '@': '_at'
    };

    /* Convert a Smalltalk selector into a JS selector */
    function st2js (string) {
        return '_' + string
            .replace(/[:&|+\-*/\\~%><=,@]/g, function (ch) {
                return table[ch];
            });
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

    function addElement (array, el) {
        if (typeof el === 'undefined') {
            return;
        }
        if (array.indexOf(el) === -1) {
            array.push(el);
        }
    }

    function removeElement (array, el) {
        var i = array.indexOf(el);
        if (i !== -1) {
            array.splice(i, 1);
        }
    }

    function extend (target, source) {
        Object.keys(source).forEach(function (key) {
            target[key] = source[key];
        });
        return target;
    }

    function extendWithMethods (target, source) {
        Object.keys(source).forEach(function (key) {
            installMethodOfJsObject(target, key, source[key]);
        });
        return target;
    }

    function deleteKeysFrom (keys, obj) {
        keys.forEach(function (each) {
            delete obj[each];
        });
    }

    return {
        deleteKeysFrom: deleteKeysFrom,
        extendWithMethods: extendWithMethods,
        extend: extend,
        removeElement: removeElement,
        addElement: addElement,
        js2st: js2st,
        st2js: st2js,
        declareJsMethod: declareJsMethod,
        installMethodOfJsObject: installMethodOfJsObject,
        inherits: inherits
    }
});
