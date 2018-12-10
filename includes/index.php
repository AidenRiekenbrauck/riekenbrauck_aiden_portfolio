<?php
include 'functions.php';

    $data = get_all_videos($conn);
    echo json_encode($data);




?>