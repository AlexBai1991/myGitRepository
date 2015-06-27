(function (win, doc, flib) {
	function hasClass (oElement, sClass) {
		var reg = new RegExp('(^|\\s)' + sClass + '(\\s|$)');
		// return oElement.className.match(new RegExp('(^|\\s)' + sClass + '(\\s|$)'));
		return reg.test(oElement.className);
	}
	function getByClass (oParent, sClass) {
		var allChildren = oParent.getElementsByTagName('*');
		var matchedElements = [];
		var reg = new RegExp('(^|\\s)'+ sClass +'(\\s|$)');
		for (var i = 0; i < allChildren.length; i++) {
			if (reg.test(allChildren[i].className)) {
				matchedElements.push(allChildren[i]);
			}
		}
		return matchedElements;
	}
	function addClass (oElement, sClass) {
		if (!hasClass(oElement, sClass)) {
			oElement.className += ' ' + sClass;
		}
	}
	function removeClass (oElement, sClass) {
		if (hasClass(oElement, sClass)) {
			oElement.className = oElement.className.replace(new RegExp(sClass), '');
		}
	}
	function getStyle (oElement, name) {
		if (oElement.currentStyle) {
			return oElement.currentStyle[name];
		} else {
			return getComputedStyle(oElement, false)[name];
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
