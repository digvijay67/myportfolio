<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $to = $_POST["recipient"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];
    $duration =$_post["duration"]
    $from = "digvijaysing67@gmail.com"; 
    $headers = "Form:" . $digvijaysingrajput67;

    
    $mailSent = mail($to, $subject, $message,$duration, $headers);

    
    if ($mailSent) {
        echo "Email sent successfully!";
    } else {
        echo "Failed to send the email.";
    }
}

?>