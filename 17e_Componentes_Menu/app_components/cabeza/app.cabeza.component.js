class AppCabeza {

    constructor (textos) {
        //this.textos = textos
    }

    $onInit () {
        this.textos = {
            titulo : this.parent.sTitulo
        }
       
    }

} // Fin de la clase AppCabeza

// Incluido en el componente appMain, 
// referenciado en la variable parent del componete
angular.module('appMenuComponentes')
.component("appCabeza", {
    require: {'parent' : '^appMain'},
    templateUrl : 'app_components/cabeza/app.cabeza.templ.html',
    controller : AppCabeza
})