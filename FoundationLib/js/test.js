// function filter(isBig) {
// Array.prototype.f = function (isBig) {
//     var _this = this;
//     console.log(_this);
//     var tmp = [];
//     /*  _this.forEach(function (item, index, array) {
//         if (isBig(item)) {
//             tmp.push(item);
//         }
//     });*/
//     for (var i = 0; i < _this.length; i++) {
//         if (isBig(_this[i])) {
//             tmp.push(_this[i]);
//         }
//     }
//     return tmp;
// }

// var arr = [1, 10, 8, 20, 3];
// var filtered = arr.f(function (item) {
//     return item >= 10;
// });
// console.log(filtered);

// }

function copy (obj) {
    var copyObj = Object.create(Object.getPrototypeOf(obj));
    var propNames = Object.getOwnPropertyNames(obj);

    propNames.forEach(function (name) {
        var desc = Object.getOwnPropertyDescriptor(obj, name);
        Object.defineProperty(copyObj, name, desc);
    });
    return copyObj;
}

function copy1 (obj) {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }
    var copyObj,
        _toString = Object.prototype.toString;

    if (_toString.call(obj) === '[object Object]') {
        copyObj = {};
    } else if (_toString.call(obj) === '[object Array]') {
        copyObj = [];
    }

    for (var name in obj) {
        copyObj[name] = copy1(obj[name]);
    }
    return copyObj;
}

HTMLElement.prototype.delegate = function (selector, type, handler, useCapture) {
        var _this = this,
        fn;

        function handlerGenerator (node, selector, handler) {
            return function (e) {
                var target = e.target;
                while (node.contains(target)) {
                    if (target.webkitMatchesSelector(selector)) {
                        handler.call(target, e);
                        //e.stopImmediatePropagation();
                        //e.stopPropagation();
                        break;
                    }
                    target = target.parentNode;
                }
            }
        }

        // delegate(type, handler, useCapture)
        if (type instanceof Function) {
            useCapture = handler;
            fn = handler = type;
            type = selector;
            selector = '';
        }
        // delegate(selector, type, handler)
        else {
            // 将最终执行的事件映射到 handler 上，方便 undelegate
            // XXX: 如果一个 handler 加在了多个 delegate 上，realFn 会被覆盖，不过这种 case 的机率几乎为零
            fn = handler.realFn = handlerGenerator(_this, selector, handler);
        }

        // _this.addEventListener(type, fn, useCapture);
        _this.addEventListener(type, function (e) {
            var target = e.target;
            while (this.contains(target)) {
                if (target.webkitMatchesSelector(selector)) {
                    handler.call(target, e);
                }
                target = target.parentNode;
            }
        }, useCapture);
    };

var o1 = {
    a1: [1, 2, 4],
    a2: 'object1'
};
var copyO1 = copy1(o1);
o1.a1.push('sss');
console.log(o1);
console.log(copyO1);