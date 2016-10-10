<?php

require './mailer/PHPMailerAutoload.php';

$mail = new PHPMailer;

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'teamreturnonclick@gmail.com';                 // SMTP username
$mail->Password = 'theBrazilian3';                          // SMTP password
$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 587;                                    // TCP port to connect to

$mail->setFrom('teamreturnonclick@gmail.com', 'ROC Website Contact');
$mail->addAddress('barrett@returnonclick.com.au', 'Barrett');                         // Name is optional
$mail->addCC('lucas@returnonclick.com.au', 'Lucas');                 // Add a recipient
$mail->addCC('joe@returnonclick.com.au', 'Joe');
// $mail->addAddress('barrett@returnonclick.com.au', 'Barrett');                         // Name is optional
// $mail->addReplyTo('info@example.com', 'Information');

// $mail->addCC('cc@example.com');
// $mail->addBCC('bcc@example.com');

// $mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
// $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'New Lead from ROC website';

$data = json_decode($_POST['data']);

var_dump($data);

$mail->Body    = '
	<h1>New lead from ROC website</h1>
	<p>Contact Name: '.$data->contactName.' </p>
	<p>Email: '.$data->email.' </p>
	<p>Phone: '.$data->phone.' </p>
	<p>Website: '.$data->website.' </p>
';

$mail->AltBody = 'New lead from ROC website
	Contact Name: '.$data->contactName.'
	Email: '.$data->email.'
	Phone: '.$data->phone.'
	Website: '.$data->website.'
';

if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Message has been sent';
}