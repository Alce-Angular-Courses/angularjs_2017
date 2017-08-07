// Tercera aproximación al formato "1.5"
// Se define el controller como una clase

angular.module('appPrueba')

.directive("cabeza", function() {
	return {
		restrict : "E",       
		templateUrl : "directivas/cabeza.partial.html",
		scope : true,
		controllerAs : "$ctrl",
		controller : function () {
		    this.sTitulo = "Blog en Angular 1.6" 
		}

	}
}) // Fin de la directiva cabeza

.directive("pie", function() {
	return {
		restrict : "E",       
		templateUrl : "directivas/pie.partial.html",
		scope : true,
		controllerAs : "$ctrl",
		controller : function () {
			this.sAutor="Alejandro L. Cerezo";
			this.sEmpresa = "DesFuFor";
			this.fecha = new Date();
		}
	}
}) // Fin de la directiva pie

.directive("post", function () {
	return {
		restrict : "E",       
		templateUrl : 'Directivas/post.partial.html',
		transclude : true,
		scope: { titulo: '@',
				autor: '@',
				fecha: '@'
		}
	}
}) // Fin de la directiva post
