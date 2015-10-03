var contact = (function() {
  var contactContainer = function( container ) {
      container.removeClass("show");
      container[3].classList.add("show");
      console.log("contact container function");
      $.Velocity(container[3], { opacity: 1 }, { display: "block" }, 300, { easing: "spring" });
    }

  // Begin DOM method /contactBtn/
  var contactBtn = function() {
    var para = $("#aboutPageContent div.row:last-child > p");
    para.append("<a href='#' class='contact-form-button'>Contact Us</a>")
  };
  // End DOM method /contactBtn/

  var

  // Begin Logic method /showContactConditional/
  // Purpose: This method is the constructor method to build the contact page
  // and provides the conditional filter to determine restrictions on the creation
  // of the contactBtn DOM generation method. It pushes an object (in this case,
  // a number, but the datatype is irrellevant) into the session array found on
  // the nd.js file, which this method checks each time it's invoked, to determine
  // whether or not to build the contactBtn. If that logic passes, the
  // contactEvent trigger is invoked allowing user interaction with the button.
  showContactConditional = function( obj, elem, count ) {
    if (obj === elem[1]) {
      if (count.length < 1) {
        count.push(1);
        contactBtn();
      }
      contactEvent();
    }
  }
  // End Logic Method /showContactConditional/

  // Begin Event /contactEvent/
  // Purpose: This event is the trigger for the about page contact button
  var contactEvent = function() {
    var anchor = $("#globalHeader > nav > ul > li > a"),
        section = $("#contentSection > section"),
        button = $(".contact-form-button"),
        count = [];

    button.on("click", function(e) {
      e.preventDefault(); // prevent default action
      anchor.removeClass("active"); // remove class from nav element
      anchor[3].classList.add("active"); // add active class to the last nav element
      $.Velocity(section, { opacity: 0 }, { display: "none" }, 100); // animate the content section out
      contactContainer( section );
      model.topOfPage(); // scroll up to the top of the page, this feature is geared towards improving experience
      // on mobile devices
    });
  }
  // End Event /contactEvent/

  return {
    showContactConditional : showContactConditional
  }

}());
