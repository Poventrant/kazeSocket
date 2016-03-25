var mainApp = angular.module('mainApp', ['ui.router']);

mainApp.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise("/");

	$stateProvider
		.state('socket', {
			url: "/socket",
			templateUrl: "/labs/socket"
		}).state('pixiv', {
			url: "/pixiv",
			templateUrl: "/labs/pixiv"
		}).state('/', {
			url: "/",
			templateUrl: "/home"
		});
});