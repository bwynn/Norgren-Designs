angular.module("AppRoutes", [])
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/admin', {
        templateUrl: 'views/admin/messages.html',
        controller: 'AdminMessagesController'
      })
      .when('/admin/main', {
        templateUrl: 'views/admin/main.html',
        controller: 'AdminMainController'
      })
      .when('/admin/about', {
        templateUrl: 'views/admin/about.html',
        controller: 'AdminAboutController'
      })
      .when('/admin/services', {
        templateUrl: 'views/admin/services.html',
        controller: 'AdminServiceController'
      }).
      when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginController'
      }).
      .otherwise({
        templateUrl: 'views/admin/messages.html',
        controller: 'AdminMessagesController'
      });

      $locationProvider.html5Mode(true);
  }]);
