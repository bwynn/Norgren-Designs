(function() {
	// ------------------------ MODULE SCOPE VARIABLES ---------------------------
	// Background object contains the class array, which is retrieved and
	// removed from the array after being assigned to the background figure
	var background = {
		class: ["bolt", "cable", "card", "circuitboard", "coffee", "cylinder", "hardware", "input", "prototypes"]
	};

	// The clickCount array stores the number of clicks on the About page section
	// Using a conditional in the events to determine the number of clicks to allow for
	// the propagation of one contact button, but if the content section visited
	// more than once, further propagation of the button is restricted.
	var clickCount = [];

	// ------------------------ END MODULE SCOPE VARIABLES -----------------------
	// ------------------------ DOM METHODS ----------------------------------------
	// Begin DOM function /toggleNav/
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

	// Begin DOM function /activeSwitcher/
	var activeSwitcher = function( elems, obj ) {
		elems.removeClass("active");
		obj.addClass("active");
	};
	// End Dom function /activeSwitcher/

	var showContainer = function( btn, container ) {
		var i;

		container.removeClass("show");
		for (i = 0; i < btn.length; i++) {
			if (btn[i].classList.contains("active")) {
					container[i].classList.add("show");
			}
		}
	};

	// Begin DOM function /buildArray/
	// builder anon function to assign class
	var buildArray = function( newArray ) {
		return model.getClass( newArray );
	};
	// End DOM function /buildArray/

	// Begin Dom method /randomClasses/
	// this anon function pulls items out of background class array object
	// assigns it to a random element within the targeted containers, and then
	// removes the item from the array, so that it can be assigned only once.
	var randomClasses = function() {
		var newLength = background.class.length,
				elem = document.querySelectorAll(".background-array > figure");
		for (var i = 0; i < newLength; i++) {
			elem[i].classList.add( buildArray( background.class ) );
		}
	};
	// end DOM method /randomClasses/

	// ------------------------ END DOM METHODS ------------------------------------

	// ------------------------ EVENT HANDLERS -------------------------------------

	// Begin event /navBtn/
	var navBtn = function() {
		var anchor = $("#globalHeader > nav > ul > li > a"),
				section = $("#contentSection > section");

		anchor.on("click", function( e ) {
			e.preventDefault();
			contact.showContactConditional( this, anchor, clickCount );
			activeSwitcher( anchor, $(this) );
			showContainer( anchor, section );
		});
	};
	// End event /navBtn/

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

		mobileNavLink.on("click", function( e ) {
			e.preventDefault();
			contact.showContactConditional( this, mobileNavLink, clickCount );
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
		navBtn();
		toggleMobileNav();
		mobileNav();
		mobileBackground();
		randomClasses();
	};

	return init();
// ------------------------ END PUBLIC METHODS ---------------------------------
})();
