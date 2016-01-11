var model = (function() {
  // ------------------------ BEGIN MODEL ----------------------------------------
  // begin model function /getClass/
  // Purpose: this function is run for each array item in the background content
  // section. It pulls a random item out of the background.class array and then
  // removes that item from the array.
  getClass = function( newArray ) {
  	// get random string from array, will hold class value
   	var random = Math.floor(Math.random() * newArray.length),
  	 		cur_class = newArray.splice( random, 1 );

  	if ( newArray.length >= 0 ) {
  		return cur_class;
  	}
  	else {
  		console.log("There aren't any more background images to place.");
  	}

  };
  // end model function /getClass/

  topOfPage = function() {
    return window.scrollTo(0, 0);
  };

  switchLogic = function( arr, cont ) {
		if (arr.classList.contains("active")) {
			cont.classList.add("show");
		}

		if ( cont.classList.contains("show")) {
			$.Velocity(cont, { opacity: 1 }, { display: "block" }, 100, { easing: "ease-in-out" });
		}
	};

  curYear = function() {
    var d = new Date();
    return d.getFullYear();
  }

  // ------------------------ END MODEL ------------------------------------------
  return {
    getClass : getClass,
    topOfPage : topOfPage,
    switchLogic : switchLogic,
    curYear: curYear
  }

}());
