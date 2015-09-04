angular.module("formApp", [])
.controller("formCtrl", function( $scope ) {
  $scope.addUser = function( userDetails ) {
    alert("Thanks " + userDetails.name + ", we'll be in touch shortly.");
  }
});
