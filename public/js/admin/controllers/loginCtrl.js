angular.module('LoginController', [])
  .controller('loginController', ['$scope', '$rootScope', 'adminService', function($scope, $rootScope, adminService) {

    $scope.sendCreds = function() {
      console.log($scope.password);
      console.log($scope.email);

      adminService.logIn({
        usernameField: $scope.email,
        usernamePassword: $scope.password
      }).then(function() {

        $rootScope.$emit('loginEmit', {loggedIn: true});
      }, function(rejected) {
        console.log("rejected because: ");
        console.log(rejected);
      });
    };

  }]);
