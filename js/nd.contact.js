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
    para.append("<a href='#' class='contact-form-button'>ContactMe</a>")
  };
  // End DOM method /contactBtn/

  showContactConditional = function( obj, elem, count ) {
    if (obj === elem[1]) {
      if (count.length < 1) {
        count.push(1);
        contactBtn();
      }
      contactEvent();
    }
  }

  var contactEvent = function() {
    var anchor = $("#globalHeader > nav > ul > li > a"),
        section = $("#contentSection > section");
    $(".contact-form-button").on("click", function(e) {
      e.preventDefault();
      anchor.removeClass("active");
      anchor[3].classList.add("active");
      contactContainer( section );
    });
  }

  return {
    showContactConditional : showContactConditional
  }

}());
