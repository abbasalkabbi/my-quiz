<?php

use App\Quiz;

require 'config.php';
require "./quiz.php";
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
$Quiz=new Quiz();
$Quiz->SetDb($conn);
if($_POST){
    $name=$_POST['name'];
    $id_author=$_POST['id_author'];
    $quistions=$_POST['quistions'];
    $CreateQuiz=$Quiz->create_Quiz(id_author:$id_author,quiz_name:$name);
    $id_quiz=$Quiz->id_quiz;
    foreach($quistions as $quistion){
        // Get create_Question
        $q=$quistion['question']; //Get question
        $Quiz->create_Question(id_quiz:$id_quiz,question:$q);
        $id_question=$Quiz->id_question;
        // end create_Question
        echo "End";
        foreach($quistion['answer'] as $answer){
            $a= $answer['answer'];
            $is_true=$answer['is_true'];
            $Quiz->create_Answer(id_question:$id_question,answer:$a,is_true:$is_true);
        }
    }
}
?>