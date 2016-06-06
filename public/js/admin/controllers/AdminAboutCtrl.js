// public/js/admin/controllers/AdminAboutCtrl.js
angular.module("AdminAboutCtrl", [])
  .controller("AdminAboutController", ['$scope', 'Admin', function($scope, Admin) {

    $scope.showEmployeeForm = false;

    $scope.toggleForm = function() {
      if (this.showEmployeeForm) {
        this.showEmployeeForm = false;
      } else {
        this.showEmployeeForm = true;
      }
    };

    $scope.updateEmployee = function(upEmp) {
      console.log(upEmp);
      Admin.updateEmployee({
        name: upEmp.name,
        title: upEmp.title,
        class: upEmp.class,
        bio: upEmp.bio,
        id: upEmp._id
      }).then(function() {
        getData();
      })
    };

    $scope.deleteEmployee = function(emp) {
      console.log(emp);
      Admin.deleteEmployee({
        id: emp._id
      }).then(function() {
        getData();
      });
    };

    // add employee function
    $scope.addEmployee = function() {
      Admin.addEmployee({
        name: $scope.name,
        title: $scope.title,
        class: $scope.class,
        bio: $scope.bio
      }).then(function() {
        $scope.name = "";
        $scope.title = "";
        $scope.class = "";
        $scope.bio = "";
        getData();
      });
    };

    function getData() {
      Admin.getEmployees().then(function(employees) {
        $scope.employees = employees.data;
      });
    }

    getData();
  }]);
