// ------------------------ MODULE SCOPE VARIABLES -----------------------------
// creating the Norgren Designs object, which will house shell and all
// modules for the page
var nd = {
	shell: {
		// load dom content
	 	configMap: {
			// create cont object which populates the #nd element
			cont: String() +
				"<header id='globalHeader'>" +
					 "<div id='logo-wrap' class='center'>" +
						"<a href='index.html' class='homeBtn'>" +
							 "<figure id='headerIcon' class='logo'></figure>" +
							 "<h1>Norgren Designs</h1>" +
						 "</a>" +
					 "</div>" +
					 "<nav>" +
						 "<ul>" +
							 "<li><a href='/home' class='active'>Home</a></li>" +
							 "<li><a href='/about'>About Erik</a></li>" +
							 "<li><a href='/company'>Company</a></li>" +
						 "</ul>" +
				   "</nav>" +
					 "<div id='mobileNav'>" +
						 "<button id='mobileNavBtn'></button>" +
						 "<nav>" +
							 "<ul>" +
								 "<li><a href='/home'>Home</a></li>" +
								 "<li><a href='/about'>About</a></li>" +
								 "<li><a href='/company'>Contact</a></li>" +
							 "</ul>" +
						 "</nav>" +
					 "</div>" +
				 "</header>" +
				 "<div id='contentSection'>" +
		       "<section id='homePageContent'>" +
		         "<h1></h1>" +
		         "<p></p>" +
		         "<p></p>" +
		       "</section>" +
		     "</div>" +
				 "<footer>" +
		    	 "<p>&copy; 2015 Norgren Designs</p>" +
		     "</footer>",
			form: String() +
					 '<section id="companyProfile">' +
						 '<div class="profileBox">' +
							 '<figure class="portrait"></figure>' +
							 '<h3>Name</h3>' +
							 '<p>Position at Norgren Design</p>' +
						 '</div>' +
					 '</section>' +
					 '<button id="showContactContainer">Contact Erik</button>' +
					 '<div id="contactContainer">' +
					 	 '<button id="closeContainer">X</button>' +
						 '<form action="#" method="post" id="contact-form">' +
							 '<h1>Contact Me</h1>' +
							 '<div id="nameWrap">' +
								 '<label for="name">Name:</label>' +
								 '<input type="text" id="name" name="name" placeholder="Enter your name" pattern="[a-zA-Z]+" min="2" required>' +
							 '</div>' +
							 '<div id="emailWrap">' +
								 '<label for="email">Email:</label>' +
								 '<input type="text" id="email" name="email" placeholder="example@gmail.com" required>' +
							 '</div>' +
							 '<div id="commentWrap">' +
								 '<label for="comment">Message:</label>' +
								 '<textarea id="comment" name="user_comment" required></textarea>' +
							 '</div>' +
							 '<button type="submit" id="send">Send</button>' +
						 '</form>' +
					 '</div>',
			content: String() +
					 "<h1></h1>" +
					 "<p></p>" +
					 "<p></p>",
				initial_position: 5 + "%",
				final_position: 10 + "%"
		}
	},
	// this object contains the content for the home page
	homePageModule : {
		// content map object holds all of the content being generated on the page.
		contentMap: {
			title: "Our design philosophy – an uncommon perspective",
			home_p1: "Norgren Designs was founded by Erik Norgren as a platform to bring creative ideas to life. Inspired by organic form and function, Norgren Designs takes pride in its ability to create elegant solutions to the strictest design constraints and toughest functional challenges. Clients rely on our experience and knowledge to help design products that meet their goals quickly and efficiently. Let Norgren Designs help you with your next mechanical engineering design project.",
			home_p2: "Our design philosophy – An uncommon perspective. Engineering is often perceived as a dry, technical, numbers game, transforming ideas into products through mathematical tools and methods. Norgren Designs understands that wiz-bang 3D modeling, FEA, and other technical engineering practices are tools that can easily be wasted without a solid foundation on which to apply them. We value the highly creative stage in the design process that is often overlooked and undervalued. We excel at this creative stage by leveraging experience and intuition to quickly arrive at an optimal starting point. Any design can be optimized in a technical sense, but not every optimized design is an optimal solution. We focus on the creative stage up front to set your project up for success later. Our motto: Creativity, Quantified."
		}
	},
	// contains the content for the about page
	aboutModule: {
		// content map object holds all of the content being generated on the page.
		contentMap: {
			new_title: "About",
			about_p: "Erik comes from a family with multiple generations of creative engineers - engineering is in his blood. He has a Masters in Mechanical Engineering from the University of Colorado, Boulder, and 15+ years' experience designing mechatronic systems from the ground up. Robotics and mechanism design are his specialties. He has a proven ability to create successful products from primitive concepts. He enjoys rock climbing and hiking in his spare time.",
			collaborators_p: "I am continuously making progress on a handful of in-house development projects alongside client-based projects. Think think-tank meets technical competency. I am looking for creative minds to augment my mechanical engineering technical expertise. If you have an innate ability to do what you do, are self-motivated, and want to test your abilities in a new setting, I am interested in hearing from you."
		}
	},
	stateMap: {
		content: null
	}
}; // end nd object

var contentID = [
	"homePageContent",
	"aboutPageContent",
	"contactPageContent"
];

// ------------------------ END MODULE SCOPE VARIABLES -------------------------

// ------------------------ BEGIN MODEL ----------------------------------------
// begin model method /contentLogic/
// Determines the page content based on the container id
var contentLogic = function() {
	var content = $("#contentSection").find("section");
			if (content.attr( "id" ) === contentID[0]) {
				setContainer();
				return homeContent();
			}
			else if (content.attr( "id" ) === contentID[1]) {
				setContainer();
				return aboutContent();
			}
			else if (content.attr( "id" ) === contentID[2]) {
				contactContent();
				// initialize the contact container function after the dom content has been generated
				showContactContainer();
				hideContactContainer();
			}
};
// end model method /contentLogic/

// Begin model method /idSwitcher/
var idSwitcher = function( event, linkItem, cont ) {
	if (event.target === linkItem[0] ) {
		cont.attr("id", contentID[0]);
		return contentLogic();
	}
	else if (event.target === linkItem[1] ) {
		cont.attr("id", contentID[1]);
		return contentLogic();
	}
	else if (event.target === linkItem[2] ) {
		cont.attr("id", contentID[2]);
		return contentLogic();
	}
	else { console.log('something went wrong'); }
};
// End model method /idSwitcher/

// Begin model method /activeSwitcher/
var activeSwitcher = function( elem, inst ) {
	// remove active class
	elem.removeClass("active");
	inst.addClass("active");
};
// End model method /activeSwitcher/
// ------------------------ END MODEL ------------------------------------------

// ------------------------ UTILITY METHODS ------------------------------------
// ------------------------ END UTILITY METHODS --------------------------------

// ------------------------ DOM METHODS ----------------------------------------
// Begin DOM method /content/
// Purpose: Builds the two main content windows of the site, the home and about
// pages.
// Arguments: Takes 6 objects as arguments, to construct the content sections
var content = function(arg1, arg2, arg3, arg4, arg5, arg6) {
	arg1.text(arg4);
	arg2.text(arg5);
	arg3.text(arg6);
};
// End DOM method /content/

// Begin DOM method /homeContent/
// Purpose: Builds the content of the home page using the content builder
// method
var homeContent = function() {
	var title = $("#homePageContent h1"),
			p1 = $("#homePageContent p:first"),
			p2 = $("#homePageContent p:last");

	return content(title, p1, p2, nd.homePageModule.contentMap.title, nd.homePageModule.contentMap.home_p1, nd.homePageModule.contentMap.home_p2 );
};
// End DOM method /homeContent/

// Begin DOM method /aboutContent/
// Purpose: Builds the about page content using the content method and passing
// in objects defined within the nd object
var aboutContent = function() {
	var title = $("aboutPageContent h1"),
			about = $("#aboutPageContent p:first"),
			collaborators = $("#aboutPageContent p:last");

	return content( title, about, collaborators, nd.aboutModule.contentMap.new_title, nd.aboutModule.contentMap.about_p, nd.aboutModule.contentMap.collaborators_p );
};
// End DOM method /aboutContent/

// Begin DOM method /contactContent/
// Purpose: Builds the content of the contact and profiles containers
var contactContent = function() {
	var contentSection = $("div#contentSection section");

	return contentSection.html( nd.shell.configMap.form );
};
// End DOM method /contactContent/

// Begin DOM method /setContainer/
// Purpose: empties out the content section container of all elements and
// resets the contents of the container to the default configuration
var setContainer = function() {
	var contentSection = $("div#contentSection section");
	contentSection.empty();
	return contentSection.html( nd.shell.configMap.content );
};
// End DOM method /setContainer/

// Begin DOM method /toggleNav/
var toggleNav = function() {
	var cont = $("#mobileNav > nav");
	cont.slideToggle(500, "linear");
};
// End DOM method /toggleNav/

// Begin DOM method /setContactForm/
var toggleContactForm = function( obj1, obj2, obj3 ) {
	obj1.hide();
	obj2.hide();
	obj3.show();
};
// End DOM method /setContactForm/

// ------------------------ END DOM METHODS ------------------------------------

// ------------------------ EVENT HANDLERS -------------------------------------
// Begin event activeSwitch
var activeSwitch = function() {
	var $navLink = $("#globalHeader > nav > ul > li > a");

	$navLink.on("click", function(e) {
		var content = $("#contentSection").find("section");
		e.preventDefault();
		activeSwitcher( $navLink, $(this) );
		idSwitcher( e, $navLink, content );
	});
};
// End event /activeSwitch/

// Begin event /toggleMobileNav/
var toggleMobileNav = function() {
	var btn = $("button#mobileNavBtn");
	btn.on("click", function() {
		toggleNav();
	});
};
// End event /toggleMobileNav/

// Begin event /mobileNavLinks/
var mobileNavLinks = function() {
	var link = $("#mobileNav > nav > ul > li > a"),
	 		content = $("#contentSection").find("section");
	link.on("click", function(e) {
		e.preventDefault();
		idSwitcher( e, link, content );
		toggleNav();
	});
};
// End event /mobileNavLinks/

// Begin event /showContactContainer/
// this method will is called through the contentLogic method.
var showContactContainer = function() {
	var btn = $("#showContactContainer");
	btn.on("click", function() {
		var profile = $("#companyProfile"),
				contactForm = $("#contactContainer");
		toggleContactForm( $(this), profile, contactForm );
		$("#closeContainer").show();
	});
};
// End event /showContactContainer/

// Begin event /hideContactContainer/
var hideContactContainer = function() {
	var btn = $("#closeContainer");
	btn.on("click", function() {
		var profile = $("#companyProfile"),
				contactForm = $("#contactContainer");
		toggleContactForm( $(this), contactForm, profile );
		$("#showContactContainer").show();
	});
};
// End event /hideContactContainer/
// ------------------------ END EVENT HANDLERS ---------------------------------

// ------------------------ PUBLIC METHODS -------------------------------------
var init = function() {
	// init config map
	$("#nd").html(nd.shell.configMap.cont);
	homeContent();
	activeSwitch();
	toggleMobileNav();
	mobileNavLinks();
};

init();
// ------------------------ END PUBLIC METHODS ---------------------------------
