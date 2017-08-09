'use strict';

/**
 * @ngdoc function
 * @name appModule.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appModule
 */
angular.module('appModule')
  .controller('MainCtrl', ["$scope", 'localStorageService', function ($scope, localStorageService) {
  	
  	var tempTareas = localStorageService.get('tareas');

  	$scope.aTareas = tempTareas && tempTareas.split('\n') || [];
  	$scope.$watch('aTareas', function () {
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
