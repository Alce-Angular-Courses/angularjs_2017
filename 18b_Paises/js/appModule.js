angular.module("appModule", [])
.controller('AppController', ['$scope', '$http', function($scope, $http){

	$scope.aPaises = []
	// $scope.url  corresponde al continente seleccionado en el API REST
	
	
	



	$scope.cambios = function () {
		buscarPaises(); 
	
	}
	
	buscarPaises = function () {
		// solicita por AJAX los datos del continente seleccionado
	
		$http({method : 'GET', url: $scope.url})
		//$http.get($scope.url)
		.then( function (response, status ) {	
			$scope.aPaises = response.data;
		});
	} // Fin de la función buscarPaises	

	
}]); // fin de la función del controlador
