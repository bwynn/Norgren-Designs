// public/js/controllers/ContactCtrl.js
angular.module("ContactCtrl", [])
  .controller("ContactController", ['$scope', 'Admin', '$location', function($scope, Admin, $location) {
    //console.log("what errors?!");

    $scope.thankYouMsg = false;

    $scope.addUser = function() {

      Admin.submitMessage({
        name: $scope.name,
        email: $scope.email,
        message: $scope.message
      }).then(function() {
        // state message
        $scope.thankYouMsg = true;
      });
    };

    // show this message to users after submitting their contact form
    $scope.closeThankYou = function() {
      $scope.thankYouMsg = false;
      $location.url('/main');
    };

  }]);
