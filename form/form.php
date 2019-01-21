<?php
if (!isset($_POST['type'])) die();

$ini = parse_ini_file('../config/config.ini');

$utmz = $_COOKIE['__utmz'];
$utmz = explode(".", $utmz);
$utmz = array_pop($utmz);
$utmz = explode('|', $utmz);
$utmz_out = array();
foreach ($utmz as &$part) {
	$part = explode('=', $part);
	$utmz_out[$part[0]] = $part[1];
}


$mail_title = 'Заявка на заказ и каталог';

if ($_POST['type'] == 'call_request')
	$mail_title = 'Заказ звонка';

$mail = "
	<html>
		<head>
		  <title>{$mail_title}</title>
		</head>
		<body style='color:#111; font-family:13px Tahoma, Arial, sans-serif;'>
			<p><strong>{$mail_title}<strong></p>
			<p>Имя: {$_POST['name']}</p>
			<p>Телефон: {$_POST['phone']}</p>
			<p>E-mail: {$_POST['email']}</p>
			<p>Источник: {$utmz_out['utmcsr']}</p>
			<p>Название кампании: {$utmz_out['utmccn']}</p>
			<p>Носитель: {$utmz_out['utmcmd']}</p>
			<p>Ключевые слова: {$utmz_out['utmctr']}</p>
		</body>
	</html>
";

if ($_POST['type'] == 'catalog' && $_POST['email'] && $ini['catalog_file']) {
	$usermail = '<html>
	  <head>
		<title>Каталог продукции</title>
	  </head>
	  <body style="color:#111; font-family:13px Tahoma, Arial, sans-serif;">
	<p><strong>Каталог продукции<strong></p>
	<p>Добрый день, '.$_POST['name'].'!</p>
	<p>На этот адрес был заказан каталог продукции.</p>
	<p>Спасибо за проявленный интерес!<br/>
	'.($ini['phone']?'Для заказа, свяжитесь с нами по телефону '.$ini['phone'].'<br/>':'').'
	'.($ini['email']?'или по адресу <a href="mailto:'.$ini['email'].'">'.$ini['email'].'</a>':'').'</p>
	<br/><br/><p>'.$ini['company_name'].'</p>
	</body>
	</html>';
	xmail($ini['from_email'],$_POST['email'],'Каталог продукции',$usermail, $ini['catalog_file']);
}

$headers = 'Content-type: text/html; charset=utf-8' . "\r\n" .
		'From: '.$ini['company_name'].' <'.$ini['from_email'].'>' . "\r\n";

mail($ini['request_email'], $mail_title . ' ' . date('d-m-Y H:i:s'), $mail, $headers);


function xmail( $from, $to, $subj, $text, $filename) {
$f         = fopen($filename,"rb");
$un        = strtoupper(uniqid(time()));
$head      = "From: $from\n";
$head     .= "To: $to\n";
$head     .= "Subject: $subj\n";
$head     .= "X-Mailer: PHPMail Tool\n";
$head     .= "Reply-To: $from\n";
$head     .= "Mime-Version: 1.0\n";
$head     .= "Content-Type:multipart/mixed;";
$head     .= "boundary=\"----------".$un."\"\n\n";
$zag       = "------------".$un."\nContent-Type:text/html; charset=utf-8\n";
$zag      .= "\n$text\n\n";
$zag      .= "------------".$un."\n";
$zag      .= "Content-Type: application/octet-stream;";
$zag      .= "name=\"".basename($filename)."\"\n";
$zag      .= "Content-Transfer-Encoding:base64\n";
$zag      .= "Content-Disposition:attachment;";
$zag      .= "filename=\"".basename($filename)."\"\n\n";
$zag      .= chunk_split(base64_encode(fread($f,filesize($filename))))."\n";
 
return @mail("$to", "$subj", $zag, $head);
}
