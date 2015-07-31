// creating the Norgren Designs object, which will house shell and all
// modules for the page
var nd = {
	shell: {
		// load dom content
	 	configMap: {
			// create cont object which populates the #nd element
			cont: String()
				+ "<header id='globalHeader'>"
					+ "<div id='logo-wrap' class='center'>"
						+ "<a href='index.html' class='homeBtn'>"
							+ "<figure id='headerIcon' class='logo'></figure>"
							+ "<h1>Norgren Designs</h1>"
						+ "</a>"
					+ "</div>"
					+ "<nav>"
						+ "<ul>"
							+ "<li><a href='#' class='active'>Home</a></li>"
							+ "<li><a href='#'>About</a></li>"
							+ "<li><a href='#'>Contact</a></li>"
						+ "</ul>"
				   + "</nav>"
				+ "</header>"
				+ "<div id='contentSection'>"
		      + "<section id='homePageContent'>"
		        + "<h1></h1>"
		        + "<p></p>"
		        + "<p></p>"
		      + "</section>"
		    + "</div>"
				+ "<footer>"
		    	+ "<p>&copy; 2015 Norgren Designs</p>"
		    + "</footer>",
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
			title: "About",
			about_p: "Erik comes from a family with multiple generations of creative engineers - engineering is in his blood. He has a Masters in Mechanical Engineering from the University of Colorado, Boulder, and 15+ years' experience designing mechatronic systems from the ground up. Robotics and mechanism design are his specialties. He has a proven ability to create successful products from primitive concepts. He enjoys rock climbing and hiking in his spare time.",
			collaborators_p: "I am continuously making progress on a handful of in-house development projects alongside client-based projects. Think think-tank meets technical competency. I am looking for creative minds to augment my mechanical engineering technical expertise. If you have an innate ability to do what you do, are self-motivated, and want to test your abilities in a new setting, I am interested in hearing from you."
		}
	}
};

var contentID = [
	"homePageContent",
	"aboutPageContent",
	"contactPageContent"
];

// constructor function for page content
var content = function(arg1, arg2, arg3, arg4, arg5, arg6) {
	arg1.text(arg4);
	arg2.text(arg5);
	arg3.text(arg6);
};

var homeContent = function() {
	// set home page content
	var title = $("#homePageContent h1"),
			p1 = $("#homePageContent p:first"),
			p2 = $("#homePageContent p:last");
	return content(title, p1, p2, nd.homePageModule.contentMap.title, nd.homePageModule.contentMap.home_p1, nd.homePageModule.contentMap.home_p2 );
};

var aboutContent = function() {
	var title = $("aboutPageContent h1"),
			about = $("#aboutPageContent p:first"),
			collaborators = $("#aboutPageContent p:last");
	return content( title, about, collaborators, nd.aboutModule.contentMap.title, nd.aboutModule.contentMap.about_p, nd.aboutModule.contentMap.collaborators_p );
};

var contentLogic = function() {
	var nav = $("#globalHeader > nav > ul > li > a"),
			content = $("#contentSection").find("section");

			if (content.attr( "id" ) === contentID[0]) {
				return homeContent();
			}
			else if (content.attr( "id" ) === contentID[1]) {
				return aboutContent();
			}
			else if (content.attr( "id" ) === contentID[2]) {
				return aboutContent(); // return this until contact logic is in place
			}
};

var activeSwitch = function() {
	var $navLink = $("#globalHeader > nav > ul > li > a");

	$navLink.on("click", function(e) {
		var content = $("#contentSection").find("section");
		e.preventDefault();
		// remove active class
		$navLink.removeClass("active");
		$(this).addClass("active");

		if (e.target == $navLink[0]) {
			content.attr("id", contentID[0]);
			return contentLogic();
		}
		else if (e.target == $navLink[1]) {
			content.attr("id", contentID[1]);
			return contentLogic();
		}
		else if (e.target == $navLink[2]) {
			content.attr("id", contentID[2]);
			return contentLogic();
		}
		else { return false; }
	});
};

var init = function() {
	// init config map
	$("#nd").html(nd.shell.configMap.cont);
	homeContent();
	activeSwitch();
};

init();
