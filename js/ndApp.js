angular.module("ndApp", [])
  .controller("employeeCtrl", function( $scope, $http ) {
    $http.get("../data/users.json")
    .success(function(response) {
      $scope.employees = response.employees;
    });
  })
  .controller("servicesCtrl", function( $scope, $http ) {
    $http.get("../data/services.json")
    .success(function(response) {
      $scope.services = response.services;
    })
  })
  .controller("formCtrl", function( $scope ) {
    $scope.addUser = function( userDetails ) {
      alert("Thanks " + userDetails.name + ", we'll be in touch shortly.");
    }
  });
