/**
 * @author
 * @date  
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
            
        }
    };

})(window, window.document, window.fLib || (window.fLib = {}));