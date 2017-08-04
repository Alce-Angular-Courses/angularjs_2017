angular.module('appMain', [])

// controoller 2 argumentos: 
// - su nombre
// - array de inyeccion de dependencias
//         - nombre de los argumentos
//         - función anonima con dichos argumentos

.controller('AppController', ['$scope', function ($scope) {
    $scope.user = {
        name : 'Pepe',
        apellido : 'Perez'
    }

    $scope.borrar = function () {
        $scope.user.name='';
        $scope.user.apellido='';
    }
}])


