angular.module("appModule", [])

.factory('pruebaFactory',function(){
	// no es una función constructora => return
	return {
		mensaje : function(){ // define un método de instancia
			alert('Hola!! Prueba de una factoría.');
		},
		saludar : function(name){
			alert('Hola ' + name);
		}
	}	
})


.controller('AppController', ['$scope','pruebaFactory', 
								function($scope, pruebaFactory){

	$scope.user = {"name" : "Pepe"};

	$scope.boton1 = function () {
		pruebaFactory.saludar($scope.user.name);
	}

	$scope.boton2 = function () {
		pruebaFactory.mensaje();	
	}


}])
