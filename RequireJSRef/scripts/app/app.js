/*define(function(require) {
	var print = require('util');
	var HelloObj = require('hello');
	// console.log(print);
	print(HelloObj.output);

	return {
		sayHello: function(name) {
			return 'hello world' + name;
		}
	};
});*/

// global define
define(['util'], function (Util) {
	var print = function (args) {
		Util.log(args);
	};
	return {
		sayHello: print
	};
});