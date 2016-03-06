// public/js/controllers/ContactCtrl.js
angular.module("ContactCtrl", [])
  .controller("ContactController", ['$scope', 'Admin', function($scope, Admin) {
    //console.log("what errors?!");

    $scope.addUser = function() {

      Admin.submitMessage({
        name: $scope.name,
        email: $scope.email,
        message: $scope.message
      }).then(function() {
        alert("Thank you for your inquiry. We'll be in touch shortly.");
      });
      
    };
  }]);
