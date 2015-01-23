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
var validate = function() {					// create an anonymous function to get automatically called

	function contactValidate() {
		var elNote = document.createElement('div');												// creates div
		elNote.setAttribute('id', 'reply');																// assigns id
		elNote.setAttribute('class', 'warning');													// assigns class for styling
		if (this.value.length < 3) {																			// gets label.length value
			elNote.innerHTML = '<p>This field must be at least 3 characters.</p>';			// sets error message
		} else {
			elNote.innerHTML = '';
		}
		this.parentNode.appendChild(elNote);															// attaches message to bottom of form
	}

	//get input element
	var input = document.querySelector('input');
	//get textarea element
	var textarea = document.getElementById('comment');
	// adds event listener to when input loses focus, checks 'blur' with contactValidate() function and if the argument returns false
	input.addEventListener('blur', contactValidate, false);
	textarea.addEventListener('blur', contactValidate, false);
}();

confirm();
