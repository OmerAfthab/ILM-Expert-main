<?php
$fname = $_POST['fname'];
$lname = $_POST['lname'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$formcontent=" From: $fname $lname \n Email Address: $email \n Contact Number: $phone \n Message: $message";
$recipient = "afthabomer@gmail.com";
$subject = "ILM Expert Contact Form";
$mailheader = "From: $email \r\n";

// It is mandatory to set the content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers. From is required, rest other headers are optional
$headers .= 'From: <'.$email.'>' . "\r\n";
// $headers .= 'Cc: divergise@gmail.com' . "\r\n";

$status= mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
//var_dump($status);
header('Location:thank-name.html');
?>