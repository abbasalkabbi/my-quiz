<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
$host='localhost';
$username='root';
$pass='';
$db='my-quiz';
$conn= mysqli_connect($host,$username,$pass,$db);
if(!$conn){
    echo "Error". mysqli_connect_error();
}
?>