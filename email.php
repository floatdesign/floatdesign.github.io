<?php
    // My modifications to mailer script from:
    // http://blog.teamtreehouse.com/create-ajax-contact-form
    // Added input sanitizing to prevent injection

    // Only process POST reqeusts.
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Get the form fields and remove whitespace.
        $clientname = strip_tags(trim($_POST["clientname"]));
                $clientname = str_replace(array("\r","\n"),array(" "," "),$clientname);

        $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
        $companyname = strip_tags(trim($_POST["companyname"]));
                $companyname = str_replace(array("\r","\n"),array(" "," "),$companyname);
        $currenturl = trim($_POST["currenturl"]);
        $worktype =  $_POST["worktype"];
        $description = trim($_POST["description"]);

        // Check that data was sent to the mailer.
        if ( empty($clientname) OR empty($description) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            // Set a 400 (bad request) response code and exit.
            http_response_code(400);
            echo "Oops! There was a problem with your submission. Please complete the form and try again.";
            exit;
        }

        // Set the recipient email address.
        // FIXME: Update this to your desired email address.
        $recipient = "ian.dusenbury@gmail.com";

        // Set the email subject.
        $subject = "Inquiry from $clientname of $companyname";

        // Build the email content.
        $email_content = "Name: $clientname\n";
        $email_content .= "Email: $email\n";
        $email_content .= "Company: $companyname\n";
        $email_content .= "Current Url: $currenturl\n";
        $email_content .= "Project Type: $worktype\n\n";
        $email_content .= "Message:\n$description\n";

        // Build the email headers.
        $email_headers = "From: $clientname, $companyname <$email>";

        // Send the email.
        if (mail($recipient, $subject, $email_content, $email_headers)) {
            // Set a 200 (okay) response code.
            http_response_code(200);
            echo "Thank You! Your message has been sent.";
        } else {
            // Set a 500 (internal server error) response code.
            http_response_code(500);
            echo "Oops! Something went wrong and we couldn't send your message.";
        }

    } else {
        // Not a POST request, set a 403 (forbidden) response code.
        http_response_code(403);
        echo "There was a problem with your submission, please try again.";
    }

?>
