angular.module("appModule", [
	"appDirectivas"
])
.controller('AppController', ['$scope', function($scope){

	$scope.$parent.sEmpresa = "DesFuFor"

	$scope.oUsuario = {
		nombre: 'Pepe',
		apellido: 'Pérez',
		fechaAlta: new Date(2010, 2, 23),
		consumoDatos: 123.659855,
		plan: 'plan-super-basico'
	};
	
	$scope.borrarDatos = function (){
		$scope.isHidden = true;
		$scope.oUsuario.nombre="";
		$scope.oUsuario.apellido="";
	}	
	
}])
.controller()

