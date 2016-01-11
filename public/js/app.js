angular.module("ndApp", ["ngRoute"])
  .config(function($routeProvider) {
    $routeProvider.
      when('/main', {
        templateUrl: '/main.html'
      }).
      when('/services', {
        templateUrl: '/services.html'
      }).
      when('/about', {
        templateUrl: '/about.html'
      }).
      when('/contact', {
        templateUrl: '/contact.html'
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
