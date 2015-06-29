(function (win, doc, flib) {
	function hasClass (oElement, sClass) {
		var hasClass = false;
		try {
			hasClass = oElement.classList.contains(sClass);
		} catch (ex) {
			var reg = new RegExp('(^|\\s)' + sClass + '(\\s|$)');
			hasClass = reg.test(oElement.className);
		}
		// return oElement.className.match(new RegExp('(^|\\s)' + sClass + '(\\s|$)'));
		return hasClass;
	}
	function getByClass (oParent, sClass) {
		var matchedElements = [];
		try {
			matchedElements = oParent.getElementsByClassName(sClass);
		} catch (ex) {
			var allChildren = oParent.getElementsByTagName('*');
			var i, len;
			var reg = new RegExp('(^|\\s)'+ sClass +'(\\s|$)');
			for (i = 0, len = allChildren.length; i < len; i++) {
				if (reg.test(allChildren[i].className)) {
					matchedElements.push(allChildren[i]);
				}
			}
		}
		return matchedElements;
	}
	function addClass (oElement, sClass) {
		if (!hasClass(oElement, sClass)) {
			try {
				oElement.classList.add(sClass);
			} catch (ex) {
				oElement.className += ' ' + sClass;
			}
		}
	}
	function removeClass (oElement, sClass) {
		if (hasClass(oElement, sClass)) {
			try {
				oElement.classList.remove(sClass);
			} catch (ex) {
				var pos = -1,
					i,
					len;
				var classNames = oElement.className.split(/\s+/);
				for (i = 0, len = classNames.length; i < len; i++) {
					if (classNames[i] === sClass) {
						pos = i;
						break;
					}
				}
				classNames.splice(pos, 1);
				oElement.className = classNames.join(' ');
			}
			// oElement.className = oElement.className.replace(new RegExp(sClass), '');
		}
	}
	function getStyle (oElement, name) {
		if (oElement.currentStyle) {
			return oElement.currentStyle[name];
		} else {
			return getComputedStyle(oElement, false)[name];
		}
	}
	function convertToArray (node) {
		try {
			return Array.prototype.slice.call(node, 0);
		} catch (ex) {
			var array = [];
			for (var i = 0; i < node.length; i++) {
				array.push(node[i]);
			}
			return array;
		}
	}
	flib.style = {
		hasClass: hasClass,
		getByClass: getByClass,
		addClass: addClass,
		removeClass: removeClass,
		getStyle: getStyle
	};
})(window, window.document, window.fLib || (window.fLib = {}));
