angular.module("ServicesCtrl", [])
.controller("ServicesController", ['$scope', 'Admin', function($scope, Admin) {

  function getData() {
    Admin.getServices().then(function(services) {
      // get main data
      $scope.services = services.data;
    });
  }
  
  // init
  getData();
}]);
