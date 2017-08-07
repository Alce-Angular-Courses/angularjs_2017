
class MainController {

    constructor () {
    }

    $onInit () {   
        this.persona = {nombre :"Pepe", apellido:"Pérez"} 
        this.fecha = new Date();
    }

} // Fin de la clase MainController

angular.module('appPrueba',[])
.controller('MainController', MainController)

.directive("bloque", function () {
    
    return {
        restrict : "E",
        templateUrl: 'directivas/bloque.partial.html',
        scope : {
            user : "=user"
        }
    }
})
