<?php

require './php/mailer/PHPMailerAutoload.php';

$mail = new PHPMailer;

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'crm@returnonclick.com.au';                 // SMTP username
$mail->Password = 'littleJoey7';                           // SMTP password
$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 587;                                    // TCP port to connect to

$mail->setFrom('sales@returnonclick.com.au', 'ROC Website Contact');
$mail->addAddress('lucas@returnonclick.com.au', 'Lucas');                 // Add a recipient
$mail->addAddress('barrett@returnonclick.com.au', 'Barrett');                         // Name is optional
// $mail->addReplyTo('info@example.com', 'Information');
// $mail->addCC('cc@example.com');
// $mail->addBCC('bcc@example.com');

// $mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
// $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'New Lead from ROC website';
$mail->Body    = '
	<h1>New lead from ROC website</h1>
	<p>Contact Name: '.$_POST['contactName']. ' </p>
	<p>Email: '.$_POST['email']. ' </p>
	<p>Phone: '.$_POST['phone']. ' </p>
	<p>Website: '.$_POST['website']. ' </p>
	<p>Company: '.$_POST['companyName']. ' </p>
	<p>Comment: '.$_POST['comment']. ' </p>
';
$mail->AltBody = 'New lead from ROC website
	Contact Name: '.$_POST['contactName']. ' 
	Email: '.$_POST['email']. ' 
	Phone: '.$_POST['phone']. ' 
	Website: '.$_POST['website']. ' 
	Company: '.$_POST['companyName']. '
	Comment: '.$_POST['comment']. '
';

if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Message has been sent';
}