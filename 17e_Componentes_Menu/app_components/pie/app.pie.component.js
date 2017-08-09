class AppPie {

	    constructor (textos) {
        this.textos = textos
    }

	$onInit () {

		this.fecha = new Date();
	}

} // Fin de la clase AppCabeza


angular.module('appMenuComponentes')
.component("appPie", {
	//require: {'parent' : 'MainController'},
	templateUrl : 'app_components/pie/app.pie.templ.html',
	controller : AppPie,
})