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
//function contactValidate() {
	//get input fields
	//get length of characters
	//if char > 3
			//valid
	// char < 3
			//apply class for alert box
			//show message
//}
confirm();
//contactValidation();
