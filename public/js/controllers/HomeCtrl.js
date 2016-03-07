// public/js/controllers/HomeCtrl.js
angular.module("HomeCtrl", [])
  .controller("HomeController", ["$scope", function($scope) {

    $scope.backgrounds = [
      "bolt",
      "cable",
      "card",
      "circuitboard",
      "coffee",
      "cylinder",
      "hardware",
      "input",
      "prototypes"
    ];

  }]);
