var contact = (function() {
  // Begin DOM method /contactContainer/
  var contactContainer = function( container ) {
    container.removeClass("show");
    container[3].classList.add("show");
  }
  // End DOM method /contactContainer/

  // Begin DOM method /contactBtn/
  var contactBtn = function() {
    var para = $("#aboutPageContent div.row:last-child > p");
    para.append("<a href='#' class='contact-form-button'>Contact Us</a>")
  };
  // End DOM method /contactBtn/

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
        section = $("#contentSection > section");
    $(".contact-form-button").on("click", function(e) {
      e.preventDefault();
      anchor.removeClass("active");
      anchor[3].classList.add("active");
      contactContainer( section );
      model.topOfPage();
    });
  }
  // End Event /contactEvent/

  return {
    showContactConditional : showContactConditional
  }

}());
