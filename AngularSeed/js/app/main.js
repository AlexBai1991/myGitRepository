/* global require, angular */

require(['config'], function(cfg) {
	
	'use strict';
	// debugger;
	// console.log(cfg);
	requirejs.config({
		baseUrl: cfg.appDir, // .js/app
		paths: {
			app: '../lib/ng-app'
		}
	});
	
	requirejs(
		[
			'app',
			'services/contactService'
		],
		function (app) {
			// console.log(app);
			angular.bootstrap(document, ['PhoneBook']);
		});

});