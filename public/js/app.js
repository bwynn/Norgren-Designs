angular.module("ndApp", ["ngRoute"])
  .config(function($routeProvider) {
    $routeProvider.
      when('/main/', {
        templateUrl: '../../views/main.html'
      }).
      when('/services/', {
        templateUrl: '../../views/services.html'
      }).
      when('/about/', {
        templateUrl: '../../views/about.html'
      }).
      when('/contact/', {
        templateUrl: '../../views/contact.html'
      }).
      otherwise({
        redirectTo: '/main/'
      })
  })
  .controller("ndCtrl", function($scope) {
    $scope.template = {
      name: 'header.html',
      url: '../../views/header.html'
    }
  })
