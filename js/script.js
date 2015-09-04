//(function() {
var background = {
	class: ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
};

// ------------------------ BEGIN MODEL ----------------------------------------
// begin model function /getClass/
// Purpose: this function is run for each array item in the background content
// section. It pulls a random item out of the background.class array and then
// removes that item from the array.
var getClass = function() {
	// get random string from array, will hold class value
 	var random = Math.floor(Math.random() * background.class.length),
	 		cur_class = background.class.splice( random, 1 );

	if ( background.class.length > 0 ) {
		return cur_class;
	}
	else {
		console.log("There aren't any more background images to place.");
	}

};
// end model function /getClass/
// ------------------------ END MODEL ------------------------------------------

// ------------------------ UTILITY METHODS ------------------------------------
// ------------------------ END UTILITY METHODS --------------------------------

// ------------------------ DOM METHODS ----------------------------------------
// Begin DOM method /toggleNav/
// Purpose: To set the navigation display on devices smaller than a viewport width of 768px.
// Arguments: Content section and background modal section. -- to be defined in a later build, after dom
// is established in an html build. For the time being, this gets a boolean value to
// determine what state the mobile navigation menu should be in, as well as the mobile background
// container. If the mobile nav button state has been assigned the display property of block,
// this will set a display property state change on the mobile nav element. It also switches the order
// in which each section is shown/hidden, to give a transition effect where the background is
// layed down first, and then the nav is revealed.
//
var toggleNav = function() {
	var cont = $("#mobileNav > nav"),
			background = $(".nav-background");
			height = $("html").css("height") === window.outerHeight + "px";

		if (cont.css("display") === "block") {
			cont.slideToggle(500, function() {
				background.slideToggle(500, "linear");
			});
		}
		else if (cont.css("display") === "none") {
			background.slideToggle(500, function() {
				cont.slideToggle(500, "linear");
			});
		}
		else {
			console.log("something went wrong");
		}
};
// End DOM method /toggleNav/

// Begin DOM method /activeSwitcher/
var activeSwitcher = function( elems, obj ) {
	elems.removeClass("active");
	obj.addClass("active");
};
// End Dom method /activeSwitcher/

var showContainer = function( btn, container ) {
	var i;

	container.removeClass("show");
	for (i = 0; i < btn.length; i++) {
		if (btn[i].classList.contains("active")) {
				container[i].classList.add("show");
		}
	}
};


// ------------------------ END DOM METHODS ------------------------------------

// ------------------------ EVENT HANDLERS -------------------------------------

var navBtn = function() {
	var anchor = $("#globalHeader > nav > ul > li > a"),
			section = $("#contentSection > section");

	anchor.on("click", function( e ) {
		e.preventDefault();
		activeSwitcher( anchor, $(this) );
		showContainer( anchor, section );
	});
};

// Begin event /toggleMobileNav/
var toggleMobileNav = function() {
	var btn = $("button#mobileNavBtn");
	btn.on("click", function() {
		toggleNav();
	});
};
// End event /toggleMobileNav/

var mobileNav = function() {
	var mobileNavLink = $("#mobileNav > nav > ul > li > a"),
			section = $("#contentSection > section");

	mobileNavLink.on("click", function() {
		activeSwitcher( mobileNavLink, $(this));
		showContainer( mobileNavLink, section );
		toggleNav();
	});
};

var mobileBackground = function() {
	$(".nav-background").on("click", function() {
		toggleNav();
	});
};


// ------------------------ END EVENT HANDLERS ---------------------------------

// ------------------------ PUBLIC METHODS -------------------------------------
var init = function() {

	// init config map
	navBtn();
	toggleMobileNav();
	mobileNav();
	mobileBackground();
};

init();

//return init();
// ------------------------ END PUBLIC METHODS ---------------------------------
//})();
