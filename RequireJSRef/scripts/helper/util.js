// 定义加载依赖项的函数
define(['hello'], function(Hello) {
	var outputHello = function(args) {
		console.log(Hello.output + args);
	};
	return {
		name: 'util工具',
		log: outputHello
	};
});