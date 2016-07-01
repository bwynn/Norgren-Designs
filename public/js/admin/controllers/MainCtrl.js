angular.module("MainCtrl", [])
  .controller("MainController", ['$scope', '$rootScope', 'adminService', 'filepickerService', function($scope, $rootScope, adminService, filepickerService) {

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

    // upload picture of the bike using filepicker
    $scope.upload = function() {
      filepickerService.pick({
        mimetype: 'image/*',
        language: 'en',
        services: ['COMPUTER', 'DROPBOX', 'GOOGLE_DRIVE', 'IMAGE_SEARCH'],
        openTo: 'IMAGE_SEARCH'
      },
      function(Blob) {
        //console.log(JSON.stringify(Blob));
        $scope.newImage = Blob;
        $scope.$apply();
      });
    };

  }]);
