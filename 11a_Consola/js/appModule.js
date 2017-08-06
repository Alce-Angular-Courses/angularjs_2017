angular.module("appModule", [])
.controller('AppController', ['$scope', '$log',  function($scope, $log){

	$scope.sEmpresa = "CAS Training"
	$scope.oUsuario = {
		nombre: 'PEPE',
		apellido: 'PEREZ',
		fechaAlta: new Date(2010, 2, 23),
		consumoDatos: 123.659855,
		plan: 'plan-super-basico'
	};	
	
	$log.debug("Acabamos de crear el $scope de prueba_01");
	$log.debug($scope);
}])
