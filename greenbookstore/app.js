var myApp = angular.module('myApp',['ngRoute','ngCookies']);

myApp.config(function($routeProvider){
	$routeProvider.when('/', {
		controller:'BooksController',
		templateUrl: 'views/books.html'
	})
	.when('/books', {
		controller:'BooksController',
		templateUrl: 'views/books.html'
	})
	.when('/books/details/:id',{
		controller:'BooksController',
		templateUrl: 'views/book_details.html'
	})
	.when('/books/add',{
		controller:'BooksController',
		templateUrl: 'views/add_book.html'
	})
	.when('/books/edit/:id',{
		controller:'BooksController',
		templateUrl: 'views/edit_book.html'
	})
	.when('/login',{
		controller:'BooksController',
		templateUrl: 'views/login.html'
	})
	.when('/signup',{
		controller:'BooksController',
		templateUrl: 'views/signup.html'
	})
	.when('/profile',{
		controller:'BooksController',
		templateUrl: 'views/profile.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});