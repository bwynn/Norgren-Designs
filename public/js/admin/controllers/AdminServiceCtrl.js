// public/js/admin/controllers/AdminServiceCtrl.js
angular.module('AdminSrvCtrl', [])
  .controller('AdminServiceController', ['$scope', 'Admin', function($scope, Admin) {

    function getData() {
      Admin.getServices().then(function(services) {
        $scope.services = services.data;
      });
    }

    getData();
  }]);
