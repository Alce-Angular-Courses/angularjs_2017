// class LibroTecnico extends Libro {  
//    constructor(...) {
//        // ...
//    }
//    me todo() {
//        // ...
//    }
//}

class AppController {
    constructor () {
        // Sólo se usa para inyeccion deddependencias
    }

    $onInit () {
        this.user = {
            name : 'Pepe',
            apellido : 'Perez'
        } 
    }

    borrar () {
       this.user.name = '';
       this.user.apellido = '';
    }
}    

angular.module('appMain')
.controller('AppController', AppController)

