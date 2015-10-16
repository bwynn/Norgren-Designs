(function() {
	// ------------------------ MODULE SCOPE VARIABLES ---------------------------
	// Background object contains the class array, which is retrieved and
	// removed from the array after being assigned to the background figure
	var background = {
		class: ["bolt", "cable", "card", "circuitboard", "coffee", "cylinder", "hardware", "input", "prototypes"]
	};

	// The clickCount array stores the number of clicks on the About content section.
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
						$.Velocity( cont, { opacity: 0 }, { display: "none" }, 3000, { easing: "ease-in-out" }); // animate the content
						setTimeout(function() { // set timeout to animate the background after the content has finished
							$.Velocity( background, { opacity: 0}, { display: "none" }, 3000, { easing: "ease-in-out" });
						}, 300);
					}
					else if (cont.css("display") === "none") {
						$.Velocity( background, { opacity: 0.8 }, { display: "block" }, 2000, { easing: "spring" }); // animate background
						setTimeout(function() { // set timeout to animate the content section after the background has finished
							$.Velocity( cont, { opacity: 1 }, { display: "block" }, 4000, { easing: "spring" });
						}, 300);
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

	// Begin DOM function /showContainer/
	// Purpose: Provides dom manipulation based on the nav btn clicked on
	// and selects the corresponding content section
	var showContainer = function( btn, container ) {
		var i;

		container.removeClass("show");
		//container.hide();
		$.Velocity(container, { opacity: 0 }, { display: "none" }, 100, { easing: "spring" });
		for (i = 0; i < btn.length; i++) {
			model.switchLogic( btn[i], container[i] );
		}
	};
	// End DOM function /showContainer/

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

	// Begin DOM method /setYear/
	var setYear = function() {
		var elem = $(".copy-footer span");
		elem.html( model.curYear );
	}
	// End DOM method /setYear/

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
		var svg = $("button#mobileNavBtn > svg > path.bar");

		// device detection conditional -- this can sort out and make sure the appropriate
		// device is handling the event only once.
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			btn.on("touchstart", function() {
				btn.css("background-color", "#222");
				svg.css("fill", "#fff");
				toggleNav();
			});

			btn.on("touchend", function() {
				btn.css("background-color", "#fff");
				svg.css("fill", "#222");
			});
		}
		else {
			btn.on("mousedown", function(e) {
				btn.css("background-color", "#222");
				svg.css("fill", "#fff");
				toggleNav();
			});

			btn.on("mouseup", function(e) {
				btn.css("background-color", "#fff");
				svg.css("fill", "#222");
			});
		}

	};
	// End event /toggleMobileNav/

	// Begin event /mobileNav/
	// Interaction with any of the mobile navigation list elements
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
	// End event /mobileNav/

	// Begin event /mobileBackground/
	// Purpose: interaction with any part of the nav-background element will
	// close the mobile nav overlay.
	var mobileBackground = function() {
		$(".nav-background").on("click", function() {
			toggleNav();
		});
	};
	// End event /mobileBackground/


	// ------------------------ END EVENT HANDLERS ---------------------------------

	// ------------------------ PUBLIC METHODS -------------------------------------
	var init = function() {
		navBtn();
		toggleMobileNav();
		mobileNav();
		mobileBackground();
		randomClasses();
		showContainer( $("#globalHeader > nav > ul > li > a"), $("#contentSection > section") );
		setYear();
	};

	return init();
// ------------------------ END PUBLIC METHODS ---------------------------------
})();
