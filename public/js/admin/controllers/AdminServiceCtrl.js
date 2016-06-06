// public/js/admin/controllers/AdminServiceCtrl.js
angular.module('AdminSrvCtrl', [])
  .controller('AdminServiceController', ['$scope', 'Admin', function($scope, Admin) {
    $scope.showForm = false;
    $scope.showItemForm = false;
    $scope.serviceTitle = false;

    // service item array
    $scope.serviceItems = [];

    // Show Service form
    $scope.toggleForm = function() {
      if (this.showForm) {
        this.showForm = false;
      } else {
        this.showForm = true;
      }
    };

    // Add Service
    $scope.addService = function() {
      console.log($scope.title);
      Admin.addService({
        title: $scope.title
      }).then(function() {

        $scope.showForm = false;
        $scope.showItemForm = true;
        $scope.serviceTitle = true;

        getData();
      });
    };

    $scope.addItem = function() {
      $scope.serviceItems.push($scope.newItem);
      $scope.newItem = "";
    };

    // Add Service Item
    $scope.addServiceItems = function(item) {
      Admin.addServiceItem({
        id: item._id,
        title: item.title,
        items: $scope.serviceItems
      }).then(function() {

        $scope.items = []; // clear out array items
        $scope.showItemForm = false; // hide form after submit

        getData();
      });
    };

    // toggle item form
    $scope.toggleItemForm = function() {
      if ($scope.showItemForm) {
        $scope.serviceTitle = true;
        $scope.showItemForm = false;
      }
      else {
        $scope.serviceTitle = false;
        $scope.showItemForm = true;
      }
    };

    // Delete Service

    function getData() {
      Admin.getServices().then(function(services) {
        $scope.services = services.data;
      });
    }

    getData();
  }]);
