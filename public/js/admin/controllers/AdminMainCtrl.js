// public/js/admin/controllers/AdminMainCtrl.js
angular.module('AdminMainCtrl', [])
  .controller('AdminMainController', ['$scope', 'Admin', function($scope, Admin) {

    $scope.edit = false;

    $scope.update = function() {
      if (!$scope.edit) {
        $scope.edit = true;
      } else {
        $scope.edit = false;
      }
    };

    $scope.updateSection = function() {
      Admin.updateMain({
        heading: $scope.sections.heading,
        content: $scope.sections.content,
        id: $scope.sections._id
      }).then(function() {
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
