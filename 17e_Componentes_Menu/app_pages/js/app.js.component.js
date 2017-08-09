class AppJs {

	$onInit () {
		this.pageTitle = "JS"
	}

} // Fin de la clase AppJs


angular.module('appMenuComponentes')
.component("appJs", {
	//require: {'parent' : 'MainController'},
	templateUrl : 'app_pages/js/app.js.templ.html',
	controller : AppJs,
})