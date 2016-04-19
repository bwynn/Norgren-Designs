// public/js/controllers/HomeCtrl.js
angular.module("HomeCtrl", [])
  .controller("HomeController", ["$scope", function($scope) {
    $scope.backgrounds = ["bolt", "cable", "card", "circuitboard", "coffee", "cylinder", "hardware", "input", "prototypes"];

    // begin model function /getClass/
    // Purpose: this function is run for each array item in the background content
    // section. It pulls a random item out of the background.class array and then
    // removes that item from the array.
    $scope.getClass = function() {

    	for (var i = 0; i < backgrounds.length; i++) {
        // get random string from array, will hold class value
       	var random = Math.floor(Math.random() * backgrounds.length);
        $scope.backgrounds.push(random);
        backgrounds.splice( random, 1 );
      }
      console.log($scope.backgrounds);
    };
    // end model function /getClass/


    // THIS IS ALL SCREWED UP RIGHT NOW. FIX THIS TOMORROW...
    $scope.randomClasses = function() {
    var backgrounds = [];
		var newLength = backgrounds.length;
		for (var i = 0; i < newLength; i++) {
			elem[i].classList.add( buildArray( background.class ) );
		}
	};

  }]);
