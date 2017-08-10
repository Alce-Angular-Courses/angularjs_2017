class AppCabeza {

    constructor (textos) {
        //this.textos = textos
    }

    $onInit () {
        this.textos = {
            titulo : "Hola"
            //parent.sTitulo
        }
       
    }

} // Fin de la clase AppCabeza


angular.module('appMenuComponentes')
.component("appCabeza", {
    require: {'parent' : 'appMainController'},
    templateUrl : 'app_components/cabeza/app.cabeza.templ.html',
    controller : AppCabeza,
})