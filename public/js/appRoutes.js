angular.module("appRoutes", [])
  .config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {

    // enable html5Mode for url handling
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

    // set ng-view template paths
    $routeProvider.
      when('/main', {
        templateUrl: 'views/main.html',
        controller: "MainController"
      }).
      when('/services', {
        templateUrl: 'views/services.html',
        controller: "ServicesController"
      }).
      when('/about', {
        templateUrl: 'views/about.html',
        controller: "EmployeeController"
      }).
      when('/contact', {
        templateUrl: 'views/contact.html',
        controller: "ContactController"
      }).
      otherwise({
        redirectTo: '/main',
        controller: "MainController"
      });

  }]);
