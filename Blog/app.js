var myApp = angular.module('myApp',['ngRoute','ngCookies']);

myApp.config(function($routeProvider){
	$routeProvider.when('/', {
		controller:'BlogController',
		templateUrl: 'views/books.html'
	})
	.when('/books', {
		controller:'BlogController',
		templateUrl: 'views/books.html'
	})
	.when('/books/details/:id',{
		controller:'BlogController',
		templateUrl: 'views/book_details.html'
	})
	.when('/books/add',{
		controller:'BlogController',
		templateUrl: 'views/add_book.html'
	})
	.when('/books/edit/:id',{
		controller:'BlogController',
		templateUrl: 'views/edit_book.html'
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