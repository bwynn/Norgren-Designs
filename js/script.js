(function() {
// ------------------------ MODULE SCOPE VARIABLES -----------------------------
var pageContent = {
	homeScreen : {
		title: "Our design philosophy – an uncommon perspective",
		home_p1: "Norgren Designs was founded by Erik Norgren as a platform to bring creative ideas to life. Inspired by organic form and function, Norgren Designs takes pride in its ability to create elegant solutions to the strictest design constraints and toughest functional challenges. Clients rely on our experience and knowledge to help design products that meet their goals quickly and efficiently. Let Norgren Designs help you with your next mechanical engineering design project.",
		home_p2: "Our design philosophy – An uncommon perspective. Engineering is often perceived as a dry, technical, numbers game, transforming ideas into products through mathematical tools and methods. Norgren Designs understands that wiz-bang 3D modeling, FEA, and other technical engineering practices are tools that can easily be wasted without a solid foundation on which to apply them. We value the highly creative stage in the design process that is often overlooked and undervalued. We excel at this creative stage by leveraging experience and intuition to quickly arrive at an optimal starting point. Any design can be optimized in a technical sense, but not every optimized design is an optimal solution. We focus on the creative stage up front to set your project up for success later. Our motto: Creativity, Quantified."
	},
	aboutScreen : {
		new_title: "About",
		about_p: "Erik comes from a family with multiple generations of creative engineers - engineering is in his blood. He has a Masters in Mechanical Engineering from the University of Colorado, Boulder, and 15+ years' experience designing mechatronic systems from the ground up. Robotics and mechanism design are his specialties. He has a proven ability to create successful products from primitive concepts. He enjoys rock climbing and hiking in his spare time.",
		collaborators_p: "I am continuously making progress on a handful of in-house development projects alongside client-based projects. Think think-tank meets technical competency. I am looking for creative minds to augment my mechanical engineering technical expertise. If you have an innate ability to do what you do, are self-motivated, and want to test your abilities in a new setting, I am interested in hearing from you."
	}
};

// ------------------------ END MODULE SCOPE VARIABLES -------------------------
// ------------------------ BEGIN MODEL ----------------------------------------

// ------------------------ END MODEL ------------------------------------------

// ------------------------ UTILITY METHODS ------------------------------------
var buildPageContent = function( obj, str ) {
	obj.text(str);
};
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

// Begin DOM method /homeScreenContent/
var homeScreenContent = function() {
	var h1 = $("#homePageContent h1"),
	 		p1 = $("#homePageContent p:first"),
	 		p2 = $("#homePageContent p:last");
	buildPageContent( h1, pageContent.homeScreen.title );
	buildPageContent( p1, pageContent.homeScreen.home_p1 );
	buildPageContent( p2, pageContent.homeScreen.home_p2 );
};
// End DOM method /homeScreenContent/

// Begin DOM method /aboutScreenContent/
var aboutScreenContent = function() {
	var h1 = $("#aboutPageContent h1"),
	 		p1 = $("#aboutPageContent p:first"),
	 		p2 = $("#aboutPageContent p:last");
	buildPageContent( h1, pageContent.aboutScreen.new_title );
	buildPageContent( p1, pageContent.aboutScreen.about_p );
	buildPageContent( p2, pageContent.aboutScreen.collaborators_p );
};
// End DOM method /aboutScreenContent/

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
	//$("#nd").html(nd.shell);
	homeScreenContent();
	aboutScreenContent();
	navBtn();
	toggleMobileNav();
	mobileNav();
	mobileBackground();
};

return init();
// ------------------------ END PUBLIC METHODS ---------------------------------
})();
