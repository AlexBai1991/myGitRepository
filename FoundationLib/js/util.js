/**
 * @author AlexBai
 * @date 2015-07-12
 */

(function (win, doc, flib) {
    function isPlainObj (obj) {
        return obj instanceof Object && Object.prototype.toString.call(obj) === '[object Object]';
    }
    function isArray (obj) {
        return Array.isArray ? Array.isArray(obj) : Object.prototype.toString.call(obj) === '[object Array]';
    }
    function clone (obj) {
        if (typeof obj !== 'object' || obj === null) {
                return obj;
            }
            var cloneObj;
            if (isArray(obj)) {
                cloneObj = [];
            }
            if (isPlainObj(obj)) {
                cloneObj = {};
            }
            for (var key in obj) {
                // 深拷贝
                cloneObj[key] = arguments.callee(obj[key]);
            }
            return cloneObj;
    }
    function extend (target, source, deep) {
        for (key in source) {
            if (deep && (isPlainObj(source[key]) || isArray(source[key]))) {
                if (isPlainObj(source[key]) && !isPlainObj(target[key])) {
                    target[key] = {};
                }
                if (isArray(source[key]) && !isArray(target[key])) {
                    target[key] = [];
                }
                arguments.callee(target[key], source[key], deep);
            } else if (source[key] !== undefined) {
                target[key] = source[key];
            }               
        }
        return target;
    }

    var util = {
        isPlainObj: isPlainObj,
        isArray: isArray,
        clone: clone,
        extend: extend
    };

    flib.util = util;

})(window, window.document, window.fLib || (window.fLib = {}));