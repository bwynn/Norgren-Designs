angular.module("AppRoutes", [])
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/admin/messages', {
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
      })
      .when('/admin/login', {
        templateUrl: 'views/login.html',
        controller: 'loginController'
      })
      .otherwise({
        templateUrl: 'views/login.html',
        controller: 'loginController'
      });

      $locationProvider.html5Mode(true);
  }]);
