angular.module('appModule')
.controller('AppController', ["$scope", 'localStorageService', function ($scope, localStorageService) {
    
   	$scope.sEmpresa = "CAS Training"

    var tempTareas = localStorageService.get('tareas');

    $scope.aTareas = tempTareas && tempTareas.split('\n') || [];
    $scope.$watchCollection('aTareas', function () {
    localStorageService.add('tareas', $scope.aTareas.join('\n'));   
      }, true);

    $scope.addTarea = function () {
      $scope.aTareas.push($scope.sTarea);
      $scope.sTarea = "";
    }

    $scope.eliminarTarea = function (index) {
      $scope.aTareas.splice(index,1)
    }

  }]);
