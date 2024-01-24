<?php

use App\Quiz;

require 'config.php';
require 'quiz.php';
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
$Quiz =new Quiz();
$Quiz->SetDb($conn);
if($_POST){
    if(isset($_POST['data'])){
    $quistion=$_POST['data'];
    $id=$quistion['id_question'];
    $name=$quistion['question'];
    $Quiz->Edit_Question(question:$name,id_question:$id);
    foreach($quistion['answers'] as $answer){
        $a= $answer['answer'];
        $id_answer=$answer['id_answer'];
        echo $id_answer;  
        $Quiz->Edit_Answer(id_answer:$id_answer,answer:$a);
    }
}
if(isset($_POST['name'])){
    $name =$_POST['name'];
    $id_quiz =$_POST['id_quiz'];
    $Quiz->Edit_Quiz(id_quiz:$id_quiz,name:$name);
    echo $name;
}
if(isset($_POST['questions'])){
    $quistion=$_POST['questions'];

 // Get create_Question
    $q=$quistion['question']; //Get question
    $id_quiz=$_POST['id_quiz']; //Get id_quiz
    $Quiz->create_Question(id_quiz:$id_quiz,question:$q);
    $id_question=$Quiz->id_question;
    // end create_Question
    echo "End";
    foreach($quistion['answers'] as $answer){
        $a= $answer['answer'];
        $is_true=$answer['is_true'];
        $Quiz->create_Answer(id_question:$id_question,answer:$a,is_true:$is_true);
    }
}
}

?>