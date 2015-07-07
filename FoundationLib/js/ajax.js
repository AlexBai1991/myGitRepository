(function (win, doc, flib) {
	function getData (json) {
		var data = [];
		for (attr in json) {
			data.push(attr + '=' + json[attr]);
		}
		return data.join('&');
	}
	function ajax (json, success, failed) {
		var xhr = null,
		 	that =  this, 
		 	method = json.method || 'get',
		 	api = json.api,
		 	data = json.data || {};
		try {
			xhr = new XMLHttpRequest();
		} catch (e) {
			xhr = ActiveXObject('Microsoft.XMLHTTP');
		}
		if ('get' === method && data && api) {
			api += '?' + getData(data);
		}
		xhr.open(method, api, true);
		if ('post' === method) {
			xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
			xhr.send(getData(data));
		} else if ('get' === method) {
			xhr.send();
		}
		xhr.onreadystatechange = function () {
	        if (xhr.readyState === 4) {
	            if (xhr.status === 200) {
	            	var res = JSON.parse(xhr.responseText);
	                success && success.call(that, res);
	            } else {
	                var status = JSON.parse(xhr.status);
	                failed && failed.call(that, status);
	            }
	        }
	    };
	}

	flib.ajax = {
		request: ajax
	};
})(window, window.document, window.fLib || (window.fLib = {}));
