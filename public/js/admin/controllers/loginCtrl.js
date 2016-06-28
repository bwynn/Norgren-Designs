angular.module('LoginController', [])
  .controller('loginController', ['$scope', function($scope) {

    $scope.sendCreds = function() {
      console.log($scope.password);
      console.log($scope.email);
    };

  }]);
