angular.module("appModule", [])

.provider('saludar',function(){
	// no es una función constructora => return
	this.mensaje = 'Hola!! Prueba de un proveedor.';
	this.saludo = 'Hola ';

	this.$get = function () {
		var saludo = this.saludo;

		return function(name){
			alert(saludo + ', ' + name);
		}
	};

	this.setSaludo = function (saludo) {
		this.saludo = saludo;
	};	
})

.config(function(saludarProvider) { //get the provider injected
	saludarProvider.setSaludo('Adios'); //configure our provider
})

.controller('AppController', ['$scope','saludar', 
								function($scope, saludar){

	$scope.user = {"name" : "Pepe"};

	$scope.boton1 = function () {
		saludar($scope.user.name);
	}

	$scope.boton2 = function () {
		pruebaFactory.mensaje();	
	}


}])
