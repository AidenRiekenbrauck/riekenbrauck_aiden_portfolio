<?php

function send_email(){
    //EMAIL VALIDATION

    if(empty($_POST['name'])
        || empty($_POST['email'])
        || empty($_POST['message'])){

        echo 'You have not filled out all of the required fields';
        exit;
    }

   // if(!filter_var($))

    $to = 'aiden@aidenr.ca';
    $name = 'Sent from Aidenr.ca from  '.$_POST['name'];
    $message = $_POST['message'];
    $headers = 'From: aiden@aidenr.ca ';
    $headers .= '   Reply-To: '.$_POST['name'];

    mail($to, $name, $message, $headers);
}

send_email();

header("Location: ../../contact.html?mail=success");

?>