define(['mod'], function (app) {
	app.controller('BookDetailController', ['$scope', function ($scope) {
		$scope.book = {
			id: '1',
			name: 'AngularJS',
			publishTime: '2014-2-19'
		};
	}]);
});