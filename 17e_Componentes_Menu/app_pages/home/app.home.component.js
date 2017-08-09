class AppHome {

	$onInit () {
		this.pageTitle = "Inicio"
	}

} // Fin de la clase AppHome


angular.module('appMenuComponentes')
.component("appHome", {
	//require: {'parent' : 'MainController'},
	templateUrl : 'app_pages/home/app.home.templ.html',
	controller : AppHome
})