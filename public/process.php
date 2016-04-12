<?php
	$message = '';
	foreach($_POST as $key => $value) {
		$message .= "$key => $value\n";
		}
	mail('erik@norgrendesigns.com','Contact Form Submission',$message);
	header('Location: index.html');
	if ($_POST["submit"] != "Send")
		die();
?>
