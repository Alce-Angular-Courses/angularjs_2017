class AppController {

	constructor ($scope, $log) {
		'ngInject';
		this.$scope = $scope;
		this.$log = $log;
	} // Fin del constructor


	$onInit() {		
		this.sEmpresa = "CAS Training"
		this.oUsuario = {
			nombre: 'PEPE',
			apellido: 'PEREZ',
			fechaAlta: new Date(2010, 2, 23),
			consumoDatos: 123.659855,
			plan: 'plan-super-basico'
		};	
	
		this.$log.debug("Acabamos de crear el $scope de prueba_01");
		this.$log.debug(this);
	} // Fin del método $onInit

} // Fin de la clase AppController


angular.module("appModule", [])
.controller('AppController', AppController)

