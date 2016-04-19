// public/js/controllers/HomeCtrl.js
angular.module("HomeCtrl", [])
  .controller("HomeController", ["$scope", function($scope) {
    $scope.backgrounds = [];

    // begin model function /getClass/
    // Purpose: this function is run for each array item in the background content
    // section. It pulls a random item out of the background.class array and then
    // removes that item from the array.
    $scope.getClass = function() {
      var backgrounds = [
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
    	// get random string from array, will hold class value
     	var random = Math.floor(Math.random() * backgrounds.length),
    	 		cur_class = backgrounds.splice( random, 1 );

    	while (backgrounds.length >= 0) {
    		$scope.backgrounds.push(cur_class);
    	}
    };
    // end model function /getClass/

  }]);
