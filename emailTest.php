<?php

//testing the email PHP functions

	$emailTo = "targetEmailAddress@email.com";

	$subject = "Testing... PHP";

	$body = "This is a test, please do not reply.";

	$headers = "From: YourBFF@me.com";
  
  //set the parameters first to keep the mail() call tidy

	if (mail($emailTo, $subject, $body, $headers)) {

		echo "The email was successfully sent.";

	} else {

		echo "The email could not be sent.";

	}

?>
