<?php

require './mailer/PHPMailerAutoload.php';

$mail = new PHPMailer;


//$mail->SMTPDebug = 3;                               // Enable verbose debug output

/*
 *
 * $mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'mail.conversionwebsites.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'contact@conversionwebsites.com';                 // SMTP username
$mail->Password = 'cont.918273';                           // SMTP password
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to

*/



$mail->isSMTP();                                        // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';                         // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                                 // Enable SMTP authentication
$mail->Username = 'teamreturnonclick@gmail.com';                 // SMTP username
$mail->Password = 'theBrazilian3';                        // SMTP password
$mail->SMTPSecure = 'tls';                              // Enable TLS encryption, `ssl` also accepted
$mail->Port = 587;

$mail->addAddress('barrett@returnonclick.com.au', 'Barrett');
$mail->addBCC('lucas@returnonclick.com.au', 'Lucas');
$mail->addBCC('jossandro@gmail.com', 'Jossandro');

$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'ROC -> New Lead';

$data = json_decode($_POST['data']);
$arr = (array)$data->step2;
$strStep2 = implode(array_keys($arr),', ');

var_dump($data);

$mail->Body    = '
	<h1>New lead from ROC website</h1>
	<p>Contact Name: '.$data->contactName.'</p>
	<p>Business Name: '.$data->businessName.' </p>
	<p>Phone: '.$data->phone.' </p>
	<p>Email: '.$data->email.' </p>


	<p>Conversion Type: ' . $data->step1 . '</p>
	<p>Where: '. $strStep2 .'</p>
	<p>How many leads: ' . $data->step3 . '</p>
	<p>Leads turned into a sales: ' . $data->step4 . '</p>

';

$mail->AltBody = '
    <h1>New lead from ROC website</h1>
	<p>Contact Name: '.$data->contactName.'</p>
	<p>Business Name: '.$data->businessName.' </p>
	<p>Phone: '.$data->phone.' </p>
	<p>Email: '.$data->email.' </p>


	<p>Conversion Type: ' . $data->step1 . '</p>
	<p>Where: '. $strStep2 .'</p>
	<p>How many leads: ' . $data->step3 . '</p>
	<p>Leads turned into a sales: ' . $data->step4 . '</p>
';


if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Message has been sent';
}