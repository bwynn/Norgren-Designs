var model = (function() {
  // ------------------------ BEGIN MODEL ----------------------------------------
  

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
