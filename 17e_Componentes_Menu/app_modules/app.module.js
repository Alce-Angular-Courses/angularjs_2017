angular.module('appMenuComponentes', [
    'ngRoute'
])
.config(['$locationProvider', function ($locationProvider){
    $locationProvider.html5Mode(true);
}])
.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        template : '<app-home></app-home>'
//        templateUrl: 'views/main.html',
//        controller: 'MainCtrl',
//        controllerAs: 'main'
    })
    .when('/html', {
        template: '<app-html></app-html>',
//        controller: 'AboutCtrl',
//        controllerAs: 'about'
    })
    .when('/css', {
        template : '<app-css></app-css>'
    })
    .when('/js', {
        template : '<app-js></app-js>'
    })
    .when('/about', {
//        templateUrl: 'views/about.html',
//        controller: 'AboutCtrl',
//        controllerAs: 'about'
    })
    .otherwise({
        redirectTo: '/'
    });
});
