<?php
namespace App;
require 'config.php';
class Quiz 
{
    public $id_author;
    public $id_quiz;
    public $quiz_name;
    public $question;
    public $id_question;
    public $db;
    private function SetId_Author($id_author){
        return $this->id_author=$id_author;
    }
    private function SetId_Quiz($id_quiz){
        return $this->id_quiz=$id_quiz;
    }
    private function Set_Name($quiz_name){
        return $this->quiz_name=$quiz_name;
    }
    private function SetId_Question($id_question){
        return $this->id_question=$id_question;
    }
    private function SetQuestion($question){
        return $this->question=$question;
    }
    public function SetDb($db){
        return $this->db=$db;
    }
        // create
        public function create_Quiz($quiz){
            $this->SetId_Author($quiz->id_author);
            // $this->SetId_Quiz($quiz->id_quiz);
            $this->Set_Name($quiz->quiz_name);
            $SetQuiz=mysqli_query($this->db,"INSERT INTO `quiz`(`id_author`,`name`) VALUES ('$this->id_author','$this->quiz_name')");
            return false;
        }
        // end create
        // create_Question
        public function create_Question($question){
        $this->SetId_Quiz($question->id_quiz);
        $this->SetQuestion($question->question);
        $Set_question=mysqli_query($this->db,"INSERT INTO `question`(`id_quiz`,`question`,) VALUES ('$this->id_quiz','$this->question')");
        return false;
        }
        // end create_Question
}
?>