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
?>