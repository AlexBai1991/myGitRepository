/**
 * @author: AlexBai
 * @date: 2015-07-12
 */
;
(function (win, doc, flib) {
    /**
     * 判断是否是原生Object对象
     * @param  {Object}  obj 传入要判断的对象
     * @return {Boolean}     
     */
    function isPlainObj (obj) {
        return obj instanceof Object && Object.prototype.toString.call(obj) === '[object Object]';
    }
    /**
     * 判断是否是Array数组
     * @param  {Array}  obj 传入要判断的数组
     * @return {Boolean}     
     */
    function isArray (obj) {
        return Array.isArray ? Array.isArray(obj) : Object.prototype.toString.call(obj) === '[object Array]';
    }
    /**
     * 深拷贝
     * @param  {Object} obj 要拷贝的对象
     * @return {Object}     拷贝之后的对象
     */
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
    /**
     * 原生方法实现深拷贝
     * @param  {Object} obj 要拷贝的对象
     * @return {Object}     拷贝之后的对象
     */
    function clone2 (obj) {
        var copyObj = Object.create(Object.getPrototypeOf(obj));
        var propNames = Object.getOwnPropertyNames(obj);

        propNames.forEach(function (name) {
            var desc = Object.getOwnPropertyDescriptor(obj, name);
            Object.defineProperty(copyObj, name, desc);
        });
        return copyObj;
    }
    /**
     * 对象继承
     * @param  {Object}  target 继承目标对象
     * @param  {Object}  source 继承源对象
     * @param  {Boolean} deep   是否深拷贝继承
     * @return {Object}         继承之后的目标对象
     */
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
        clone2: clone2,
        extend: extend
    };

    flib.util = util;

})(window, window.document, window.fLib || (window.fLib = {}));