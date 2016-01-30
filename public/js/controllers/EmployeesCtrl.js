angular.module("EmployeesCtrl", [])
.controller("EmployeeController", ['$scope', 'Admin', function($scope, Admin) {

  function getData() {
    Admin.getEmployees().then(function(employees) {
      // get main data
      $scope.employees = employees.data;
    });
  }
  // init
  getData();
}]);
