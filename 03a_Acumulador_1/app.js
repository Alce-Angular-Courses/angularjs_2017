angular.module("acumulador", [])
.controller('AcumuladorCtrl', ['$scope', function($scope){
    //código del controlador
    $scope.incremento = 10;
    $scope.total = $scope.incremento;

    $scope.sumar = function(){;
        $scope.total += parseInt($scope.incremento);
    }
    $scope.restar = function(){
        $scope.total -= parseInt($scope.incremento);
    }			
}])