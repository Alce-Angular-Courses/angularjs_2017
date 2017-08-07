/*'use strict';

/**
 * @ngdoc overview
 * @name 03cProyectoYoApp
 * @description
 * # 03cProyectoYoApp
 *
 * Main module of the application.
 */
angular
  .module('appModule', [
    'LocalStorageModule'
  ])  
  .config(['localStorageServiceProvider', function(localStorageServiceProvider) {
    localStorageServiceProvider.setPrefix('ls')
  }])