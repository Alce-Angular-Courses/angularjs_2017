angular.module('appMain', [])

// controoller 2 argumentos: 
// - su nombre
// - la función anonima responsable de instanciar el $scope

.controller('AppController', function () {
   this.user = {
        name : 'Pepe',
        apellido : 'Perez'
    }

   this.borrar = function () {
       this.user.name='';
       this.user.apellido='';
    }
})


