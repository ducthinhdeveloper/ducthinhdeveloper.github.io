var myApp = angular.module('myApp',['ngRoute','ngCookies','ngTagsInput',]);

myApp.config(function($routeProvider){
	$routeProvider.when('/', {
		controller:'BlogController',
		templateUrl: 'views/articles.html'
	})
	.when('/articles', {
		controller:'BlogController',
		templateUrl: 'views/articles.html'
	})
	.when('/article/details/:id',{
		controller:'BlogController',
		templateUrl: 'views/article-detail.html'
	})
	.when('/article/add',{
		controller:'BlogController',
		templateUrl: 'views/article-add.html'
	})
	.when('/article/edit/:id',{
		controller:'BlogController',
		templateUrl: 'views/article-edit.html'
	})
	.when('/login',{
		controller:'BlogController',
		templateUrl: 'views/login.html'
	})
	.when('/signup',{
		controller:'BlogController',
		templateUrl: 'views/signup.html'
	})
	.when('/profile',{
		controller:'BlogController',
		templateUrl: 'views/profile.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});