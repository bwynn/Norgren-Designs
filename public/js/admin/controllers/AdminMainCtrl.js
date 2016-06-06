// public/js/admin/controllers/AdminMainCtrl.js
angular.module('AdminMainCtrl', [])
  .controller('AdminMainController', ['$scope', 'Admin', function($scope, Admin) {

    $scope.addSection = false;
    $scope.showForm = false;

    $scope.editContent = function() {
      if (this.showForm) {
        this.showForm = false;
      } else {
        this.showForm = true;
      }
    };

    $scope.toggleNewSection = function() {
      if ($scope.addSection) {
        $scope.addSection = false;
      } else {
        $scope.addSection = true;
      }
    };

    $scope.addContent = function() {
      Admin.sendMain({
        heading: $scope.newHeading,
        content: $scope.newContent
      }).then(function() {
        $scope.newHeading = "";
        $scope.newContent = "";
        $scope.addSection = false;
        getData();
      });
    };

    $scope.updateSection = function(selectedSection) {
      console.log(selectedSection);
      Admin.updateMain({
        heading: selectedSection.heading,
        content: selectedSection.content,
        id: selectedSection._id
      }).then(function() {
        $scope.showForm = false;
        getData();
      });
    };

    $scope.deleteSection = function(selectedSection) {
      console.log(selectedSection);
      Admin.deleteMainSection({
        id: selectedSection._id
      }).then(function() {
        $scope.showForm = false; 
        getData();
      });
    };

    function getData() {
      Admin.getMain().then(function(sections) {
        $scope.sections = sections.data;
        console.log($scope.sections);
      });
    }

    getData();
  }]);
