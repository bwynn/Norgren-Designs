angular.module("MainCtrl", [])
  .controller("MainController", ['$scope', '$rootScope', function($scope, $rootScope) {

    $rootScope.loggedIn = false;

    $rootScope.$on('loginEmit', function(e, args) {
      console.log(args);
      $rootScope.loggedIn = args.loggedIn;
    });

  }]);
