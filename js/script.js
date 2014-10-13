// JavaScript Document

// targets button with ID attribute of "send"
var btn = document.getElementById("send");

// user notification of successful query submission
var showAlert = function() {
	alert("Thank you for your inquiry. We'll get back to you shortly.");
	}

// attaches showAlert function when button is clicked
btn.addEventListener("click", showAlert);


	
	
