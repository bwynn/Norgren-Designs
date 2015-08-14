// ------------------------ MODULE SCOPE VARIABLES -----------------------------
// creating the Norgren Designs object, which will house shell and all
// modules for the page
var nd = {
	shell:  String() +
				"<header id='globalHeader'>" +
					 "<div id='logo-wrap' class='center'>" +
						"<a href='index.html' class='homeBtn'>" +
							 "<figure id='headerIcon' class='logo'></figure>" +
							 "<h1>Norgren Designs</h1>" +
						 "</a>" +
					 "</div>" +
					 "<nav>" +
						 "<ul>" +
							 "<li><a href='#' class='active'>Home</a></li>" +
							 "<li><a href='#'>About Erik</a></li>" +
							 "<li><a href='#'>Company</a></li>" +
							 "<li><a href='#'>Contact</a></li>" +
						 "</ul>" +
				   "</nav>" +
					 "<div id='mobileNav'>" +
						 "<button id='mobileNavBtn'>" +
						 '<svg version="1.1" id="menu-bar" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"' +
						 	 'viewBox="0 0 40 40" enable-background="new 0 0 40 40" xml:space="preserve">' +
						 '<path fill="#377F5E" d="M36.5,11.7h-33C2.7,11.7,2,11,2,10.2v0c0-0.8,0.7-1.5,1.5-1.5h33c0.8,0,1.5,0.7,1.5,1.5v0C38,11,37.3,11.7,36.5,11.7z"/>' +
						 '<path fill="#377F5E" d="M36.5,21.7h-33C2.7,21.7,2,21,2,20.2v0c0-0.8,0.7-1.5,1.5-1.5h33c0.8,0,1.5,0.7,1.5,1.5v0C38,21,37.3,21.7,36.5,21.7z"/>' +
						 '<path fill="#377F5E" d="M36.5,31.7h-33C2.7,31.7,2,31,2,30.2v0c0-0.8,0.7-1.5,1.5-1.5h33c0.8,0,1.5,0.7,1.5,1.5v0C38,31,37.3,31.7,36.5,31.7z"/>' +
						 '</svg>' +
						 "</button>" +
						 "<nav>" +
							 "<ul>" +
								 "<li><a href='#'>Home</a></li>" +
								 "<li><a href='#'>About Erik</a></li>" +
								 "<li><a href='#'>Company</a></li>" +
								 "<li><a href='#'>Contact</a></li>" +
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
					 "<section id='aboutPageContent'>" +
						 "<h1></h1>" +
						 "<p></p>" +
						 "<p></p>" +
 						"</section>" +
						"<section id='companyPageContent'>" +
								'<section id="companyProfile">' +
								 '<div class="profileBox">' +
									 '<figure class="portrait"></figure>' +
									 '<h3>Name</h3>' +
									 '<p>Position at Norgren Design</p>' +
								 '</div>' +
								 '<div class="profileBox">' +
									 '<figure class="portrait"></figure>' +
									 '<h3>Name</h3>' +
									 '<p>Position at Norgren Design</p>' +
								 '</div>' +
								 '<div class="profileBox">' +
									 '<figure class="portrait"></figure>' +
									 '<h3>Name</h3>' +
									 '<p>Position at Norgren Design</p>' +
								 '</div>' +
								 '<div class="profileBox">' +
									 '<figure class="portrait"></figure>' +
									 '<h3>Name</h3>' +
									 '<p>Position at Norgren Design</p>' +
								 '</div>' +
								 '<article class="openings">' +
										'<p>Some content to go in the openings section</p>' +
								 '</article>' +
							 '</section>' +
  					"</section>" +
						"<section id='contactPageContent'>" +
							'<div id="contactContainer">' +
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
							'</div>' +
  					"</section>" +
				 '</div>' +
				 "<footer>" +
		    	 "<p>&copy; 2015 Norgren Designs</p>" +
		     "</footer>"
}; // end nd object

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

var contentID = [
	"homePageContent",
	"aboutPageContent",
	"companyPageContent",
	"contactPageContent"
];

// ------------------------ END MODULE SCOPE VARIABLES -------------------------
// ------------------------ BEGIN MODEL ----------------------------------------
// ------------------------ END MODEL ------------------------------------------

// ------------------------ UTILITY METHODS ------------------------------------
var buildPageContent = function( obj, str ) {
	obj.text(str);
};
// ------------------------ END UTILITY METHODS --------------------------------

// ------------------------ DOM METHODS ----------------------------------------
// Begin DOM method /homeScreenContent/
var homeScreenContent = function() {
	var h1 = $("#homePageContent h1"),
	 		p1 = $("#homePageContent p:first"),
	 		p2 = $("#homePageContent p:last");
	buildPageContent( h1, pageContent.homeScreen.title );
	buildPageContent( p1, pageContent.homeScreen.home_p1 );
	buildPageContent( p2, pageContent.homeScreen.home_p2 );
};
// End DOM model /homeScreenContent/

// Begin DOM method /aboutScreenContent/
var aboutScreenContent = function() {
	var h1 = $("#aboutPageContent h1"),
	 		p1 = $("#aboutPageContent p:first"),
	 		p2 = $("#aboutPageContent p:last");
	buildPageContent( h1, pageContent.aboutScreen.new_title );
	buildPageContent( p1, pageContent.aboutScreen.about_p );
	buildPageContent( p2, pageContent.aboutScreen.collaborators_p );
};
// End DOM model /aboutScreenContent/

var activeSwitcher = function( elems, obj ) {
	elems.removeClass("active");
	obj.addClass("active")
};

var contentLogic = function() {
	var content = $("#contentSection").find("section");
			content.hide();
			if (content.attr( "id" ) === contentID[0]) {
				console.log("show home");
			}
			else if (content.attr( "id" ) === contentID[1]) {
				console.log("show about");
			}
			else if (content.attr( "id" ) === contentID[2]) {
				console.log("show company");
			}
			else if (content.attr( "id" ) === contentID[3]) {
				console.log("show contact");
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
	else if (event.target === linkItem[3]) {
		cont.attr("id", contentID[3]);
		return contentLogic();
	}
	else { console.log('something went wrong'); }
};

// ------------------------ END DOM METHODS ------------------------------------

// ------------------------ EVENT HANDLERS -------------------------------------

var navBtn = function() {
	var $navLink = $("nav > ul > li > a"),
			content = $("#contentSection").find("section");
	$navLink.on("click", function( e ) {
		e.preventDefault();
		console.log(e.target);
		activeSwitcher( $navLink, $(this) );
		idSwitcher( e, $navLink, content);
	});
};

// ------------------------ END EVENT HANDLERS ---------------------------------

// ------------------------ PUBLIC METHODS -------------------------------------
var init = function() {
	// init config map
	$("#nd").html(nd.shell);
	homeScreenContent();
	aboutScreenContent();
	navBtn();
};

init();
// ------------------------ END PUBLIC METHODS ---------------------------------
