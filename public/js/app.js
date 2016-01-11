var ndApp = angular.module("ndApp", ["ngRoute"])
  .config(function($routeProvider, $locationProvider) {

    // enable html5Mode for url handling
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

    // set ng-view template paths
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
      });

  });
