// public/js/admin/controllers/AdminAboutCtrl.js
angular.module("AdminAboutCtrl", [])
  .controller("AdminAboutController", ['$scope', 'Admin', function($scope, Admin) {

    function getData() {
      Admin.getEmployees().then(function(employees) {
        $scope.employees = employees.data;
      });
    }

    getData();
  }]);
