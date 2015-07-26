/**
 * @author: AlexBai
 * @date: 2015-07-07
 */

(function (win, doc, flib) {

    flib.event = {
        $: function (selector, context) {
            var context = context || doc;
            if (typeof context === 'string') {
                context = doc.querySelector(context);
            }
            return context.querySelector(selector);
        },
        $$: function (selector, context) {
            var context = context || doc;
            if (typeof context === 'string') {
                context = doc.querySelector(context);
            }
            return context.querySelectorAll(selector);
        },
        addClass: function (el, cls) {
            if (el.classList) {
                el.classList.add(cls);
            } else {
                var clss = el.className.split(/\s+/);
                if (clss.indexOf(cls) === -1) {
                    clss.push(cls);
                    el.className = clss.join(' ');
                }
            }
        },
        removeClass: function (el, cls) {
            if (el.classList) {
                el.classList.remove(cls);
            } else {
                var reg = new RegExp('\\b' + cls + '\\b', g);
                el.className = el.className.replace(reg, '');
            }
        },
        hasClass: function (el, cls) {
            if (el.classList) {
                return el.classList.contains(cls);
            } else {
                return el.className.split(/\s+/).indexOf(cls) > -1;
            }
        },
        toggleClass: function (el, cls) {
            if (flib.event.hasClass(el, cls)) {
                flib.event.removeClass(el, cls);
            } else {
                flib.event.addClass(el, cls);
            }
        },
        escapeHTML: function (input) {
            var textNode = doc.createTextNode(input);
            var element = doc.createElement('div');
            element.appendChild(textNode);
            return element.innerHTML;
        },
        delegate: function (el, selector, event, handler, useCapture) {
            function handlerGenerator (el, selector, handler) {
                return function (e) {
                    var target = e.target;

                    while (el.contains(target)) {
                        if (target.webkitMatchesSelector(selector)) {
                            handler.call(target, e);
                            break;
                        }
                        target = target.parentNode;
                    }
                };
            }
            var fn = handlerGenerator(el, selector, handler);
            el.addEventListener(event, fn, useCapture);
        },
        template: function (tmpl, data) {
            var _this = this;
            if (!data) {
                return tmpl;
            } else {
                var tmplReg = /\{([@!]?)([\w.-]+)\}/g;
                return tmpl.replace(tmplReg, function (matchStr, mask, key, offset, theStr){
                    var val = data[key];
                    if (val !== undefined) {
                        var ret;
                        if (val instanceof Function) {
                            ret = val.call(data);
                        } else {
                            ret = val;
                        }
                        if (ret === null) {
                            return '';
                        }
                        if (mask === '!') {
                            return ret;
                        } else if (mask === '@') {
                            return _this.escapeHTML(ret)
                        }
                        return tmplReg.test(ret) ? _this.template(ret, data) : ret;
                    } else {
                        //如果未能够在模板中找到对应的key就返回
                        return matchStr;
                    }
                });
            }
        }
    };

})(window, window.document, window.fLib || (window.fLib = {}));