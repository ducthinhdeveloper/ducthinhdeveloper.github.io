myApp.controller('BlogController', ['$scope', '$http', '$location', '$routeParams', '$cookieStore',
    function ($scope, $http, $location, $routeParams, $cookieStore) {
        var root = 'https://green-web-blog.herokuapp.com';
        var config = {
            headers: {
                'Accept': 'application/json;odata=verbose',
                "x-access-token": $scope.token
            }
        };
        $scope.getCategory = function () {
            $http.get(root + '/api/categories').success(function (response) {
                $scope.categories = response;
            }).error(function (data, status, headers, config) {
                console.log(data, status, headers, config);
            });;
        }


        $scope.getArticles = function () {
            $http.get(root + '/api/articles').success(function (response) {
                $scope.articles = response;
            }).error(function (data, status, headers, config) {
                console.log(data, status, headers, config);
            });
        }

        $scope.getArticle = function () {
            var id = $routeParams.id;
            $http.get(root + '/api/article/' + id).success(function (response) {
                $scope.article = response;
            }).error(function (data, status, headers, config) {
                console.log(data, status, headers, config);
            });
        }

        $scope.addArticle = function () {
            console.log($scope.article);
            $scope.article._author = $scope.user._id;
            $http.post(root + '/api/articles/', $scope.article).success(function (response) {
                window.location.href = '#/articles';
            }).error(function (data, status, headers, config) {
                console.log(data, status, headers, config);
            });;
        }

        $scope.updateArticle = function () {
            var id = $routeParams.id;
            $http.put(root + '/api/article/' + id, $scope.book).success(function (response) {
                window.location.href = '#/books/' + $routeParams.id;
            }).error(function (data, status, headers, config) {
                console.log(data, status, headers, config);
            });;
        }

        $scope.removeArticle = function (id) {
            $http.delete(root + '/api/article/' + id).success(function (response) {
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
            $http.post(root + '/api/users/auth', $scope.loginUser).success(function (response) {
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
            $http.post(root + '/api/users/signup/', $scope.signUpUser).success(function (response) {
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
    


