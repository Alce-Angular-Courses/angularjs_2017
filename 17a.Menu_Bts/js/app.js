// Tercera aproximación al formato "1.5"
// Se define el controller como una clase


class MainController {

    constructor () {
    }

    $onInit () {       

        this.sTitulo="Inicios de Angular 1.6";
        this.sAutor="Alejandro L. Cerezo";
        this.sEmpresa = "CAS Training";
        this.fecha = new Date();

        this.menuTitle = "Desarrollo Web";
        this.aOpciones = [
            {label: "HTML", esActivo : false},
            {label: "CSS", esActivo : false},
            {label: "JS", esActivo : false}
        ];
    }

    mainMenu(pOpcion) {
        for (var i = 0; i < this.aOpciones.length; i++) {
            this.aOpciones[i].esActivo = false;            
        }
        this.aOpciones[pOpcion].esActivo = true;
    }

} // Fin de la clase MainController

angular.module('appPrueba',[])
.controller('MainController', MainController)

