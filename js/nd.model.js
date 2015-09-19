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

  /*contactCondition = function( elem ) {
    var count = [];

    if (this === elem[1]) {
      if (count.length < 1) {
        count.push(1);
        contactBtn();
      }
      else {
        console.log("something went wrong with the array count");
      }
      console.log(count);
    }
    else {
      console.log(count);
      console.log("something went wrong with element scope");
    }
  }*/
  // ------------------------ END MODEL ------------------------------------------
  return {
    getClass : getClass//,
    //contactCondition : contactCondition
  }

}());
