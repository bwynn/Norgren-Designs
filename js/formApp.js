angular.module("formApp", [])
.controller("formCtrl", function( $scope ) {
  $scope.addUser = function( userDetails ) {
    if (ndForm.$valid) {
      alert("Thanks " + userDetails.name + ", we'll be in touch shortly.");
    }
    else {
      $scope.showValidation = true;
    }
  }
});
