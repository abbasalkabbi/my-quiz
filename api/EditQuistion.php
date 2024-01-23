<?php

use App\Quiz;

require 'config.php';
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
if($_POST){
    if(isset($_POST['data'])){
    $quistion=$_POST['data'];
    $id=$quistion['id_question'];
    $name=$quistion['question'];
    $update=mysqli_query($conn,"UPDATE `question` SET `question` = '$name' WHERE `question`.`id_question` = $id");
    foreach($quistion['answers'] as $answer){
        $a= $answer['answer'];
        $id_answer=$answer['id_answer'];
        echo $id_answer;
        $update=mysqli_query($conn,"UPDATE `answer` SET `answer` = '$a' WHERE `answer`.`id_answer` = $id_answer");
    }
}
if($_POST['name']){
    $name =$_POST['name'];
    $id_quiz =$_POST['id_quiz'];
    $update=mysqli_query($conn,"UPDATE `quiz` SET `name` = '$name' WHERE `quiz`.`id_quiz` = $id_quiz");
    echo $name;
}
}

?>