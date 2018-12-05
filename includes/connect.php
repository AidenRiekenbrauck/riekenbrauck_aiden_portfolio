<?php
// HOW TO USE THIS SCRIPT

// in TESTING environment
// -- COMMENT out the side we arent using
// -- if we're online, COMMENT out offline
// -- and vice versa

// in SHIPPING environment
// -- DELETE the side we arent using
// -- if we're online, DELETE  offline
// -- and vice versa

// OFFLINE CONNECTION
$db_dsn = array(
	'host' => 'localhost',
	'dbname' => 'db_portfolio',
	'charset' =>'utf8'
);

// Set up connection credentials
$db_user = 'root';
$db_pass = '';

$dsn = 'mysql:'.http_build_query($db_dsn,'',';');

// FOR WHATEVER REASON, PDO REFUSES TO WORK ON MY SYSTEM ¯\_(ツ)_/¯
// SO WE'RE FORCED TO USE AN OLD SCHOOL mysqli_connect ?????

// try {
// 	$pdo = new PDO($dsn,$db_user,$db_pass);	
// } catch (PDOException $exception) {
// 	echo 'Found =>'.$exception.getMessage();
// }

$conn = mysqli_connect('localhost', 'root', '', 'db_portfolio');

// ONLINE CONNECTION
// $db_dsn = array(
// 	'host' => 'mysql.brendanrogers.online',
// 	'dbname' => 'db_brendanrogers',
// 	'charset' =>'utf8'
// );

// // Set up connection credentials
// $db_user = 'brendanrogers';
// $db_pass = 'gui{EOR1!*-%-}';

// $dsn = 'mysql:'.http_build_query($db_dsn,'',';');


// try {
// 	$pdo = new PDO($dsn,$db_user,$db_pass);	
// } catch (PDOException $exception) {
// 	echo 'Found =>'.$exception.getMessage();
// }

?>