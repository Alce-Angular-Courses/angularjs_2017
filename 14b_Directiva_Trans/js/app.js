// Tercera aproximación al formato "1.5"
// Se define el controller como una clase


class MainController {

	constructor () {
	}

	$onInit () {   


		this.aPost = [
			{ 	autor : 'Alberto Lubert', 
				titulo : 'Primer post',
				fecha : new Date("2014-12-11")}, 
			{ 	autor : 'Ernesto Jung', 
				titulo : 'Directivas y transclusion',
				fecha : new Date("2015-01-21")}, 
		]

	}




} // Fin de la clase MainController

angular.module('appPrueba',[])
.controller('MainController', MainController)

