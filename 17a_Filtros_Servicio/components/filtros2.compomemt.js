class Filtros2Controller {

	constructor (numberFilter,dateFilter, uppercaseFilter, jsonFilter ) {
		this.numberFilter = numberFilter;
		this.dateFilter = dateFilter;
		this.uppercaseFilter = uppercaseFilter;
		this.jsonFilter = jsonFilter; 
	}

	// Ademmas del servicio $filter 
	// existen swrvicios específicos de cada uno
	// de los filtros nativos de angular: 

	// filterFilter
	// currencyFilter
	// numberFilter
	// dateFilter
	// jsonFilter
	// lowercaseFilter
	// uppercaseFilter
	// limitToFilter
	// orderByFilter

	$onInit () {       

		this.oDatos = {
			'titulo' : "Inicios de Angular 1.6",
			'autor' : "Alejandro L. Cerezo",
			'empresa' : "CAS Training",
			'fecha' : new Date(),
			'horas' : 50
		}
		
		console.log(this.jsonFilter(this.oDatos));
		console.log(this.uppercaseFilter(this.oDatos.titulo));
		console.log(this.dateFilter(this.oDatos.fecha, "fullDate"));
		console.log(this.numberFilter(this.oDatos.horas, 2));
    }    

} // Fin de la clase


angular.module('appPrueba')
.component("filtros2", {
	template: `<h2>Servicios especícficos de cada filtro</h2>
				<p>Ver consola</p>`,
	controller: Filtros2Controller
})