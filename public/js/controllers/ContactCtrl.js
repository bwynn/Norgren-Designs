// public/js/controllers/ContactCtrl.js
angular.module("ContactCtrl", [])
  .controller("ContactController", ['$scope', 'Admin', '$location', function($scope, Admin, $location) {
    //console.log("what errors?!");

    $scope.addUser = function() {

      Admin.submitMessage({
        name: $scope.name,
        email: $scope.email,
        message: $scope.message
      }).then(function() {
        // state message
        $location.url('/main');
      });

    };
  }]);
