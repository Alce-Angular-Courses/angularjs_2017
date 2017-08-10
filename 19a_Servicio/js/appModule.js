angular.module("appModule", [])

.service('pruebaService1',function(){
	this.saludar = function(){ // define un método de instancia
		alert('Hola!! Prueba de un servicio.');
	}
})

.service('pruebaService2',function($timeout){
	this.saludar=function(name){
		$timeout(function(){
		alert('Hola ' + name);
		},2000);	
	}
})


.controller('AppController', ['$scope','pruebaService1', 'pruebaService2', 
								function($scope, pruebaService1, pruebaService2){

	$scope.user = {"name" : "Pepe"};

	$scope.boton1 = function () {
		pruebaService1.saludar(); // helloService is the service object.	
	}

	$scope.boton2 = function () {
		pruebaService2.saludar($scope.user.name); // helloService is the service object.	
	}


}])
