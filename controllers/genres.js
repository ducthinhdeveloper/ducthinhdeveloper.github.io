myApp.controller('BooksController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('BooksController loaded...');
	var root = 'http://localhost:3000';
	$scope.getGenres = function(){
		$http.get(root+'/api/genres').success(function(response){
			$scope.genres = response;
		});
	}
}]);