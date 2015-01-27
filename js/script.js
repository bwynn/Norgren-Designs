// JavaScript Document

function confirm() {																								//User confirmation
	var btn = document.getElementById("send");												// targets button with ID attribute of "send"

	function showAlert() {																						// user notification of successful query submission
		alert("Thank you for your inquiry. We'll get back to you shortly.");
		}
	btn.addEventListener("click", showAlert );												// attaches showAlert function when button is clicked
}

//Validation
var validate = function() {																					// create an anonymous function to get automatically called

	function contactValidate() {
		var elNote = document.createElement('div');												// creates div
		elNote.setAttribute('id', 'reply');																// assigns id
		elNote.setAttribute('class', 'warning');													// assigns class for styling
		if (this.value.length < 3) {																			// gets label.length value
			elNote.innerHTML = '<p>This field must be at least 3 characters.</p>';			// sets error message
		} else {
			elNote.remove;
		}
		this.parentNode.appendChild(elNote);															// attaches message to bottom of form
	}

	var inputCheck = function() {
		var elements = document.getElementsByTagName('input');
		for (var i = 0; i < elements.length; i++) {
			var input = elements[i];
			input.addEventListener('blur', contactValidate, false);
		}
	}();

		var textarea = document.getElementById('comment');
		textarea.addEventListener('blur', contactValidate, false);				// adds event listener to when input loses focus, checks 'blur' with contactValidate() function and if the argument returns false

}();

confirm();
