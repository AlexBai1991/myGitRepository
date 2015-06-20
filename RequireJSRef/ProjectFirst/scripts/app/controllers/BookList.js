define(['mod'], function (module) {
	module.controller('BookListController', ['$scope', function ($scope) {
		$scope.books = [
			{
				id: '1',
				name: 'AngularJS',
				publishTime: '2014-2-19'
			},
			{
				id: '2',
				name: 'Javascript',
				publishTime: '2012-5-30'
			}

		];
	}]);
});