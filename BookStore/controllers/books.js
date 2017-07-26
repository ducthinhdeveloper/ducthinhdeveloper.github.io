var myApp = angular.module('myApp');

myApp.controller('BooksController', ['$scope', '$http', '$location', '$routeParams', '$cookieStore',
    function ($scope, $http, $location, $routeParams, $cookieStore) {
        console.log('BooksController loaded...');
        //var root = 'http://localhost:5000';
        var root = 'https://green-web-bookstore.herokuapp.com';
        var config = {
            headers: {
                'Accept': 'application/json;odata=verbose',
                "x-access-token": $scope.token
            }
        };

        $scope.getBooks = function () {
            $http.get(root + '/api/books').success(function (response) {
                $scope.books = response;
            }).error(function (data, status, headers, config) {
                console.log(data, status, headers, config);
            });;
        }
        $scope.getGenres = function () {
            $http.get(root + '/api/genres').success(function (response) {
                $scope.genres = response;
            }).error(function (data, status, headers, config) {
                console.log(data, status, headers, config);
            });;
        }

        $scope.getBook = function () {
            var id = $routeParams.id;
            $http.get(root + '/api/books/' + id).success(function (response) {
                $scope.book = response;
            }).error(function (data, status, headers, config) {
                console.log(data, status, headers, config);
            });;
        }

        $scope.addBook = function () {
            console.log($scope.book);
            $http.post(root + '/api/books/', $scope.book).success(function (response) {
                window.location.href = '#/books';
            }).error(function (data, status, headers, config) {
                console.log(data, status, headers, config);
            });;
        }

        $scope.updateBook = function () {
            var id = $routeParams.id;
            $http.put(root + '/api/books/' + id, $scope.book).success(function (response) {
                window.location.href = '#/books/' + $routeParams.id;
            }).error(function (data, status, headers, config) {
                console.log(data, status, headers, config);
            });;
        }

        $scope.removeBook = function (id) {
            $http.delete(root + '/api/books/' + id).success(function (response) {
                $location.url("/")
            }).error(function (data, status, headers, config) {
                console.log(data, status, headers, config);
            });;
        }

        $scope.loadLogin = function () {
            var token = $cookieStore.get('token');
            if (token !== undefined) {
                $location.url("/")
            }
        }

        $scope.logOut = function () {
            $cookieStore.remove('token');
            $cookieStore.remove('user');
        }

        $scope.viewProfile = function () {
            var token = $cookieStore.get('token');
            if (token === undefined) {
                $location.url("/login")
            }
        }


        $scope.summitLogin = function () {
            $http.post(root + '/api/auth', $scope.loginUser).success(function (response) {
                var isSuccess = response.success;
                if (isSuccess) {
                    $cookieStore.put('token', response.token);
                    $cookieStore.put('user', response.user);
                    $scope.user = $cookieStore.get('user');
                    $scope.token = $cookieStore.get('token');
                    //Redirect here
                    $location.url("/")
                } else {
                    //Raise Error
                    alert(response.message);
                }
            }).error(function (data, status, headers, config) {
                console.log(data, status, headers, config);
            });;
        }

        $scope.summitSignup = function () {
            $http.post(root + '/api/signup/', $scope.signUpUser).success(function (response) {
                var isSuccess = response.success;
                if (isSuccess) {
                    $cookieStore.put('token', response.token);
                    $cookieStore.put('user', response.user);
                    $scope.user = $cookieStore.get('user');
                    $scope.token = $cookieStore.get('token');
                    //Redirect here
                    $location.url("/")
                } else {
                    //Raise Error
                    alert(response.message);
                }
            }).error(function (data, status, headers, config) {
                console.log(data, status, headers, config);
            });
        }

        $scope.init = function () {
            $scope.user = $cookieStore.get('user');
            $scope.token = $cookieStore.get('token');
        }

        $scope.isLogged = function(){
            return $cookieStore.get('token') != undefined;
        }

    }]);
    


