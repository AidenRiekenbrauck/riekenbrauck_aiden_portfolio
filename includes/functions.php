<?php 

include 'connect.php';

// show info on all the items
$query = "SELECT * FROM tbl_content ORDER BY id ASC ";

;

$result = mysqli_query($conn, $query);
$rows = array();

//Fill the array with the result set and send it to the browser
while($row = mysqli_fetch_assoc($result)) {
    $rows[] = $row;
}

header('Content-Type: application/json; charset=UTF-8');
echo json_encode($rows);




?>