angular.module("appModule", [])
.controller('AppController', ['$scope', function($scope){

	$scope.sEmpresa = "CAS Training"

	$scope.scheduleTask_Old = function() {
		setTimeout(function() {
			$scope.message = 'Generado despues de 3 segundos';
			console.log('mensaje = ' + $scope.message); //log this to console
		}, 3000);
	};


	$scope.scheduleTask = function() {
		setTimeout(function() {
			$scope.$apply(function() { // wrapped the code in $apply()
				$scope.message = 'Generado despues de 3 segundos';
				console.log('mensaje = ' + $scope.message); //log this to console
			});
		}, 3000);
	};

	
}])
