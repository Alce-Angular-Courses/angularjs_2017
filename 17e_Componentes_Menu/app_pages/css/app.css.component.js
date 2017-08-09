class AppCss {

	$onInit () {
		this.pageTitle = "CSS"
	}

} // Fin de la clase AppCss


angular.module('appMenuComponentes')
.component("appCss", {
	//require: {'parent' : 'MainController'},
	templateUrl : 'app_pages/css/app.css.templ.html',
	controller : AppCss,
})