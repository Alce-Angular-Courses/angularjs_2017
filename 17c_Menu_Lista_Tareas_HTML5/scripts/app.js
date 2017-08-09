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
    //'ngAnimate',
    //'ngCookies',
    //'ngResource',
    'ngRoute',
    //'ngSanitize',
    //'ngTouch'
    'ui.sortable', 
    'LocalStorageModule'
  ])
  .config(['localStorageServiceProvider', function(localStorageServiceProvider) {
    localStorageServiceProvider.setPrefix('ls')
  }])
  .config(['$locationProvider', function ($locationProvider){
    $locationProvider.html5Mode(true);
  }])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
     .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
