class AppCabeza {

    constructor (textos) {
        this.textos = textos
    }

    $onInit () {
    }

} // Fin de la clase AppCabeza


angular.module('appMenuComponentes')
.component("appCabeza", {
    //require: {'parent' : 'MainController'},
    templateUrl : 'app_components/cabeza/app.cabeza.templ.html',
    controller : AppCabeza,
})