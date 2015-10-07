angular.module("ndApp", [])
  .controller("homeCtrl", function( $scope, $http ) {
    $http.get("/sites/norgrendesign/data/home.json")
    .success(function( response ) {
      $scope.home = response.home;
    });
  })
  .controller("employeeCtrl", function( $scope, $http ) {
    $http.get("/sites/norgrendesign/data/users.json")
    .success(function(response) {
      $scope.employees = response.employees;
    });
  })
  .controller("servicesCtrl", function( $scope, $http ) {
    // in live site, this get url needs to reflect relative path from root
    // eg /sites/norgrendesign/data/services.json
    $http.get("/sites/norgrendesign/data/services.json")
    .success(function(response) {
      $scope.services = response.services;
    })
  })
  .controller("formCtrl", function( $scope ) {
    $scope.addUser = function( userDetails ) {
      alert("Thanks " + userDetails.name + ", we'll be in touch shortly.");
    }
  });
