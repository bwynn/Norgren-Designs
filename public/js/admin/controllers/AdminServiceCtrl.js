// public/js/admin/controllers/AdminServiceCtrl.js
angular.module('AdminSrvCtrl', [])
  .controller('AdminServiceController', ['$scope', 'Admin', function($scope, Admin) {
    $scope.showForm = false;
    $scope.showItemForm = false;
    $scope.serviceTitle = false;

    $scope.targetItem = {};

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

        $scope.showItemForm = true;
        $scope.serviceTitle = true;

        getData();
      });
    };

    $scope.addItem = function() {
      $scope.serviceItems.push($scope.newItem);
      $scope.newItem = "";
      console.log($scope.serviceItems);
    };

    // Add Service Item
    // this requires id, title and items as values to work properly, and therefore needs to be assigned via id.
    $scope.addServiceItems = function() {
      console.log($scope.targetItem);
      Admin.addServiceItem({
        id: $scope.targetItem._id,
        title: $scope.targetItem.title,
        items: $scope.serviceItems
      }).then(function() {

        $scope.items = []; // clear out array items
        $scope.showItemForm = true; // hide form after submit
        $scope.targetItem = {}; // clear out object data

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

        // get last scope item
        var idx = $scope.services.length - 1;
        console.log(idx);
        console.log($scope.services);
        $scope.targetItem = $scope.services[idx];
        console.log($scope.targetItem);
      });
    }

    getData();
  }]);
