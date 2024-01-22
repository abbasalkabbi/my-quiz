<?php

use App\Quiz;

require 'config.php';
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
if($_POST){
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

?>