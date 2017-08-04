
angular.module('appMain', [])

// controoller 2 argumentos: 
// - su nombre
// - array de inyeccion de dependencias
//         - nombre de los argumentos
//         - función anonima con dichos argumentos

.controller('AppController', AppController)


function AppController () {
   this.user = {
        name : 'Pepe',
        apellido : 'Perez'
    }

   this.borrar = function () {
       this.user.name='';
       this.user.apellido='';
    }
}    


