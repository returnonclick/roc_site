<?php

require './mailer/PHPMailerAutoload.php';

$mail = new PHPMailer;

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'teamreturnonclick@gmail.com';                 // SMTP username
$mail->Password = 'theBrazilian3';                           // SMTP password
$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 587;                                    // TCP port to connect to

$mail->setFrom('sales@returnonclick.com.au', 'ROC Website Contact');
$mail->addAddress('lucas@returnonclick.com.au', 'Lucas');                 // Add a recipient
$mail->addAddress('barrett@returnonclick.com.au', 'Barrett');
// $mail->addReplyTo('info@example.com', 'Information');
 $mail->addCC('nick@returnonclick.com.au', 'Nick');
// $mail->addBCC('bcc@example.com');

// $mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
// $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'ROC -> Request a call';

$data = json_decode($_POST['data']);

var_dump($data);

$mail->Body    = '
	<h1>ROC -> Request a call</h1>
	<p>Contact Name: '.$data->contactName.' </p>
	<p>Phone: '.$data->phone.' </p>
	<p>Comment: '.$data->comment.' </p>
';
$mail->AltBody = 'ROC Request a call
	Contact Name: '.$data->contactName.'
	Phone: '.$data->phone.'
	Comment: '.$data->comment.'
';

if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Message has been sent';
}