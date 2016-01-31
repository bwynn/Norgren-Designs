angular.module("appRoutes", [])
  .config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {

    // enable html5Mode for url handling
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

    // set ng-view template paths
    $routeProvider.
      // main view - initial page
      when('/main', {
        templateUrl: 'views/main.html',
        controller: "MainController"
      }).
      // services view
      when('/services', {
        templateUrl: 'views/services.html',
        controller: "ServicesController"
      }).
      // about
      when('/about', {
        templateUrl: 'views/about.html',
        controller: "EmployeeController"
      }).
      // contact
      when('/contact', {
        templateUrl: 'views/contact.html',
        controller: "ContactController"
      }).
      // default to /main 
      otherwise({
        redirectTo: '/main',
        controller: "MainController"
      });

  }]);
