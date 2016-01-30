angular.module("MainCtrl", [])
.controller("MainController", ['$scope', 'Admin', function($scope, Admin) {

  function getData() {
    Admin.getMain().then(function(main) {
      // get main data
      $scope.sections = main.data;
    });
  }
  // init
  getData();
}]);
