class Filtros1Controller {

	constructor ($filter) {
		this.$filter = $filter;
	}

	// el servicio $filter permite invocar por su nombre
	// cualquiera de los filtros nativos de angular: 

	// filter
	// currency
	// number
	// date
	// json
	// lowercase
	// uppercase
	// limitTo
	// orderBy

	$onInit () {       

		this.oDatos = {
			'titulo' : "Inicios de Angular 1.6",
			'autor' : "Alejandro L. Cerezo",
			'empresa' : "CAS Training",
			'fecha' : new Date(),
			'horas' : 50
		}
		
		console.log(this.$filter('json')(this.oDatos));
		console.log(this.$filter('uppercase')(this.oDatos.titulo));
		console.log(this.$filter('date')(this.oDatos.fecha, "fullDate"));
		console.log(this.$filter('number')(this.oDatos.horas, 2));
    }    

} // Fin de la clase


angular.module('appPrueba')
.component("filtros1", {
	template: `<h2>Filtros mediante $filter</h2>
				<p>Ver consola</p>`,
	controller: Filtros1Controller
})