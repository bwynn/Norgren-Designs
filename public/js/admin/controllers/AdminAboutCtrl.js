// public/js/admin/controllers/AdminAboutCtrl.js
angular.module("AdminAboutCtrl", [])
  .controller("AdminAboutController", ['$scope', 'Admin', function($scope, Admin) {

    function getData() {
      Admin.getEmployees().then(function(employees) {
        $scope.employees = employees.data;
      });
    }

    // add employee function
    $scope.addEmployee = function() {
      Admin.addEmployee({
        name: $scope.name,
        title: $scope.title,
        class: $scope.class,
        bio: $scope.bio
      }).then(function() {
        getData();
      });
    };

    getData();
  }]);
