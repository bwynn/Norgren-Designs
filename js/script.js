// JavaScript Document

//User confirmation
function confirm() {
	// targets button with ID attribute of "send"
	var btn = document.getElementById("send");
	// user notification of successful query submission
	function showAlert() {
		alert("Thank you for your inquiry. We'll get back to you shortly.");
		}
	// attaches showAlert function when button is clicked
	btn.addEventListener("click", showAlert);
}

//Validation
var contactForm = document.getElementById('contact-form');				// gets contact-form form element

function contactValidate() {
	var reply = document.getElementById('reply');										// gets value of form																		// gets label.length value
	if (this.value.length < 3) {
		reply.innerHTML = 'This field must be at least 3 characters.';			// sets error message
	} else {
		reply.innerHTML = '';
	}
}

//get input element
var input = document.querySelector('input');
//get textarea element
var textarea = document.querySelector('textarea');
// adds event listener to when input loses focus, checks 'blur' with contactValidate() function and if the argument returns false
input.addEventListener('blur', contactValidate, false);
textarea.addEventListener('blur', contactValidate, false);


confirm();
