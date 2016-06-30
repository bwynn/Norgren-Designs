angular.module("MainCtrl", [])
  .controller("MainController", ['$scope', '$rootScope', 'adminService', function($scope, $rootScope, adminService) {

    $rootScope.loggedIn = false;

    $rootScope.$on('loginEmit', function(e, args) {
      console.log(args);
      $rootScope.loggedIn = args.loggedIn;
    });

    $scope.logout = function() {
      console.log("Clicked");
      adminService.logOut().then(function() {
        $rootScope.loggedIn = false;
        console.log($rootScope.loggedIn);
      });
    };

  }]);
