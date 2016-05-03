// public/js/controllers/HomeCtrl.js
angular.module("HomeCtrl", [])
  .controller("HomeController", ["$scope", function($scope) {
    $scope.backgrounds = ["bolt", "cable", "card", "circuitboard", "coffee", "cylinder", "hardware", "input", "prototypes"];
    // begin model function /getClass/
    // Purpose: this function is run for each array item in the background content
    // section. It pulls a random item out of the background.class array and then
    // removes that item from the array.
    $scope.getClass = function() {
      sort($scope.backgrounds);
    };
    // end model function /getClass/
  }]);

  // Fisher-Yates sort
  function sort(array) {
    var idx = array.length, tempIdx, randomIdx;

    while(0 !== idx) {
      // set new vals
      randomIdx = Math.floor(Math.random() * idx);
      idx -= 1;

      tempIdx = array[idx];
      array[idx] = array[randomIdx];
      array[randomIdx] = tempIdx;
    }
    return array;
  }
