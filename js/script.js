// creating the Norgren Designs object, which will house shell and all
// modules for the page
var nd = {
	shell: {
		// load dom content
	 	configMap: {
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
							+ "<li><a href='index.html'>Home</a></li>"
							+ "<li><a href='about.html'>About</a></li>"
							+ "<li><a href='contact.html'>Contact</a></li>"
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
	homePageModule : {
		// content map object holds all of the content being generated on the page.
		contentMap: {
			title: "Our design philosophy – an uncommon perspective",
			home_p1: "Norgren Designs was founded by Erik Norgren as a platform to bring creative ideas to life. Inspired by organic form and function, Norgren Designs takes pride in its ability to create elegant solutions to the strictest design constraints and toughest functional challenges. Clients rely on our experience and knowledge to help design products that meet their goals quickly and efficiently. Let Norgren Designs help you with your next mechanical engineering design project.",
			home_p2: "Our design philosophy – An uncommon perspective. Engineering is often perceived as a dry, technical, numbers game, transforming ideas into products through mathematical tools and methods. Norgren Designs understands that wiz-bang 3D modeling, FEA, and other technical engineering practices are tools that can easily be wasted without a solid foundation on which to apply them. We value the highly creative stage in the design process that is often overlooked and undervalued. We excel at this creative stage by leveraging experience and intuition to quickly arrive at an optimal starting point. Any design can be optimized in a technical sense, but not every optimized design is an optimal solution. We focus on the creative stage up front to set your project up for success later. Our motto: Creativity, Quantified."
		}
	},
	aboutModule: {
		// content map object holds all of the content being generated on the page.
		contentMap: {
			about_p: "Erik comes from a family with multiple generations of creative engineers - engineering is in his blood. He has a Masters in Mechanical Engineering from the University of Colorado, Boulder, and 15+ years' experience designing mechatronic systems from the ground up. Robotics and mechanism design are his specialties. He has a proven ability to create successful products from primitive concepts. He enjoys rock climbing and hiking in his spare time.",
			collaborators_p: "I am continuously making progress on a handful of in-house development projects alongside client-based projects. Think think-tank meets technical competency. I am looking for creative minds to augment my mechanical engineering technical expertise. If you have an innate ability to do what you do, are self-motivated, and want to test your abilities in a new setting, I am interested in hearing from you."
		}
	}
};

var homeContent = function() {
	var title = $("#homePageContent h1");
	var p1 = $("#homePageContent p:first");
	var p2 = $("#homePageContent p:last");

	title.text(nd.homePageModule.contentMap.title);
	p1.text(nd.homePageModule.contentMap.home_p1);
	p2.text(nd.homePageModule.contentMap.home_p2);
}

var init = function() {
	$("#nd").html(nd.shell.configMap.cont);
	homeContent();
};

init();
