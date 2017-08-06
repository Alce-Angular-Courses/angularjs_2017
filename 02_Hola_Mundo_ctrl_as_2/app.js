
angular.module('appMain', [])
.controller('AppController', AppController)


// Controller declarado como una función con nombre
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


