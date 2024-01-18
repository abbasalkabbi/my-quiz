<?php
use App\Quiz;

require 'config.php';
require "./quiz.php";
$Quiz=new Quiz();
$Quiz->SetDb($conn);
if(isset($_GET['id'])){
$id_quiz=$_GET['id'];
$Get_Question=$Quiz->Get_Question(id_quiz:$id_quiz);
echo json_encode(['quiz'=>$Quiz->Get_Quiz(id_quiz:$id_quiz),'question'=>$Get_Question]);
}
if(isset($_GET['id_question'])){
    $id_question=$_GET['id_question'];
    $Get_Answer=$Quiz->Get_Answer(id_question:$id_question);
    echo json_encode($Get_Answer);
}
if(isset($_GET['id_user']) && isset($_GET['id_quiz'])){
    $id_quiz=$_GET['id_quiz'];
    $id_user=$_GET['id_user'];
    $comp=mysqli_query($conn,"INSERT INTO `quiz_user`(`id_quiz`,`id_user`) VALUES ('$id_quiz','$id_user')");
    echo json_encode(['staus'=>true]);
}
if(!isset($_GET['id_user']) && !isset($_GET['id_quiz']) && !isset($_GET['id']) && !isset($_GET['id_question'])){
    $q=$Quiz->Get_Quiz();
    echo json_encode($q);
}
?>