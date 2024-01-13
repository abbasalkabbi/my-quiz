<?php
require 'config.php';
require "./user.php";
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
$a  =new App\User();
$a ->SetDb($conn);
var_dump($a->GetUser(id:38));
?>