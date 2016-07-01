angular.module('LoginController', [])
  .controller('loginController', ['$scope', '$rootScope', 'adminService', '$location', function($scope, $rootScope, adminService, $location) {

    /*$scope.sendCreds = function() {
      console.log($scope.password);
      console.log($scope.email);

      adminService.logIn({
        username: $scope.email,
        password: $scope.password
      }).then(function(data) {
        console.log(data);
        //$location.url('/admin/messages');
        //$rootScope.$emit('loginEmit', {loggedIn: true});

      }, function(rejected) {
        console.log("rejected because: ");
        console.log(rejected);
      });
    };*/

  }]);
