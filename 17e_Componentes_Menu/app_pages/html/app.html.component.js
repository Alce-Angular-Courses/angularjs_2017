class AppHtml {

	$onInit () {
		this.pageTitle = "HTML"
	}

} // Fin de la clase AppHtml


angular.module('appMenuComponentes')
.component("appHtml", {
	//require: {'parent' : 'MainController'},
	templateUrl : 'app_pages/html/app.html.templ.html',
	controller : AppHtml,
})