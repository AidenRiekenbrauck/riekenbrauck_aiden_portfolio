<?php
var_dump($_POST);
// the fake_mail is just a temp replacement of mail() function within php

function fake_mail($to, $name, $message, $headers){
    echo '===== fake emails ===='.PHP_EOL;
    echo 'Name: '.$name.PHP_EOL;
    echo 'Email To: '.$to.PHP_EOL;
    echo 'Message: '.$message.PHP_EOL;
    echo '===== emails end ===='.PHP_EOL;

    return true;
 
}

function send_email(){
    //email validations:checing required fields

    if(empty($_POST['name']) 
    || empty($_POST['email'])
    || empty($_POST['message'])){

        echo 'Fill in Message Spot';
        exit;
    }




    //to do : use the real data foom $_GET
    //to replace the followings place holder data
    $to = $_POST['email'];
    $name = $_POST['name'];
    $message = $_POST['message'];
     $headers = 'from: noreply@YOURDOMAIN.com';
     $headers .='Reply-to:'.$_POST['email'];

    fake_mail($to, $name, $message, $headers); 
    //in your server use the following line instead
    //mail($to, $subject, $message, $headers);
}

send_email();
?>