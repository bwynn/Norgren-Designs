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
  }

  // ------------------------ END MODEL ------------------------------------------
  return {
    getClass : getClass,
    topOfPage : topOfPage
  }

}());
