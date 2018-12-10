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

   //Set up connection credentials
  $db_user = 'root';
  $db_pass = '';

  $dsn = 'mysql:'.http_build_query($db_dsn,'',';');

  try {
  	$pdo = new PDO($dsn,$db_user,$db_pass);	
  } catch (PDOException $exception) {
  	echo 'Found =>'.$exception.getMessage();
  }$conn = mysqli_connect('localhost', 'root', '', 'db_portfolio');
?>