class AppMainController {

    constructor () {
    }

    $onInit () {       

        this.sTitulo="Inicios de Angular 1.6";
        this.sAutor="Alejandro L. Cerezo";
        this.sEmpresa = "CAS Training";
        this.fecha = new Date();

    }
} // Fin de la clase MainController

angular.module('appPrueba')
.component("appMain", {
    templateUrl: "main/app.main.template.html",
    controller: AppMainController
})



