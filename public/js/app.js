angular.module("ndApp", ["ngRoute"])
  .config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

    $routeProvider.
      when('/main', {
        templateUrl: '/views/main.html'
      }).
      when('/services', {
        templateUrl: '/views/services.html'
      }).
      when('/about', {
        templateUrl: '/views/about.html'
      }).
      when('/contact', {
        templateUrl: '/views/contact.html'
      }).
      otherwise({
        redirectTo: '/main'
      })
  })
  .controller("ndCtrl", function($scope) {

  })
