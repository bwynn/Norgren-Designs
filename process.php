<?php 
	$message = '';
	foreach($_POST as $key => $value) {
		$message .= "$key => $value\n"; 
		}
	mail('brian.wynn83@gmail.com','Contact Form Submission',$message);
	header('Location: index.html');
?>