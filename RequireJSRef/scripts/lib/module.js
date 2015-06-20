define([''], function () {
	var app = angular.module('Book', []);
	app.config(['$routeProvider', '$controllerProvider', function ($routeProvider, $controllerProvider) {
		// app.register = {
		// 	controller: $controllerProvider.register
		// };
		$routeProvider.

		when('/booklist', {
			controller: 'BookListController',
			templateUrl: 'scripts/app/views/bookList.html'
		}).

		when('/bookdetail', {
			controller: 'BookDetailController',
			templateUrl: 'scripts/app/views/bookDetail.html'
		}).

		otherwise({
			redirectTo: '/booklist'
		});
	}]);
	return app;
});