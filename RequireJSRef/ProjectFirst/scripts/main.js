// require.js配置选项
require.config({
	baseUrl: 'scripts/app',
	paths: {
		jquery: '../lib/jquery',
		hello: '../helper/hello',
		util: '../helper/util',
		mod: '../lib/module'
	}
});
// 加载依赖项
require(['mod', 'jquery', 'app', 'controllers/BookList', 'controllers/BookDetail'], function(module, $, app) {
	// 异步加载完jquery和app之后的回调
	angular.bootstrap(document, ['Book']);
	console.log('$加载完成！');
	console.log('app.js加载完成!');
	app.sayHello("没有内容");
});