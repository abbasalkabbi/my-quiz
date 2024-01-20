<?php 
use App\Quiz;

require 'config.php';
require "./quiz.php";
$Quiz=new Quiz();
$Quiz->SetDb($conn);
if(isset($_GET['id'])){
    $id=$_GET['id'];
    $Quiz->Delete_Quiz(id_quiz:$id);
}
?>