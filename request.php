<?php

require './php/mailer/PHPMailerAutoload.php';

$mail = new PHPMailer;

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'ses-smtp-user.20160329-194045';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'AKIAJLSECI3QJDBPPIFQ';                 // SMTP username
$mail->Password = 'Au12Ar850VJMUOGbk2gE9nkuHPEZp1j9Ak8woRPlmgV4';                           // SMTP password
$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 587;                                    // TCP port to connect to

$mail->setFrom('lucas@returnonclick.com.au', 'ROC Website Contact');
//$mail->addAddress('barrett@returnonclick.com.au', 'Barret');                 // Add a recipient
$mail->addAddress('lucas@returnonclick.com.au');   // Name is optional
// $mail->addReplyTo('info@example.com', 'Information');
// $mail->addCC('cc@example.com');
// $mail->addBCC('bcc@example.com');

// $mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
// $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'ROC -> Request a call';
$mail->Body    = '
	<h1>ROC -> Request a call</h1>
	<p>Contact Name: '.$_POST['contactName']. ' </p>
	<p>Phone: '.$_POST['phone']. ' </p>
	<p>Comment: '.$_POST['comment']. ' </p>
';
$mail->AltBody = 'ROC Request a call
	Contact Name: '.$_POST['contactName']. '
	Phone: '.$_POST['phone']. '
	Comment: '.$_POST['comment']. '
';

if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Message has been sent';
}