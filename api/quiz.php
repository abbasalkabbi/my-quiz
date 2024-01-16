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
            $this->Set_Name($quiz->quiz_name);
            $SetQuiz=mysqli_query($this->db,"INSERT INTO `quiz`(`id_author`,`name`) VALUES ('$this->id_author','$this->quiz_name')");
            return false;
        }
        // end create
        // get Get_Quiz
        public function Get_Quiz($id_quiz=null , $id_author=null ,$name =null){
            // get by name
            if($id_author !=null && $name !=null){
                $quiz_sql=mysqli_query($this->db,"SELECT * FROM quiz WHERE id_author ='{$id_author}' AND name = '{$name}'");
                if(mysqli_num_rows($quiz_sql) >0){
                    return $quiz = mysqli_fetch_object($quiz_sql);
                }
                    return false;
            }
            // get by id
            if($id_quiz != null){
                $quiz_sql=mysqli_query($this->db,"SELECT * FROM quiz WHERE id_quiz ='{$id_quiz}'");
                if(mysqli_num_rows($quiz_sql) >0){
                    return $quiz = mysqli_fetch_object($quiz_sql);
                }
                return false;
            }
        }
        // end Get_Quiz
        // create_Question
        public function create_Question($question){
        $this->SetId_Quiz($question->id_quiz);
        $this->SetQuestion($question->question);
        $Set_question=mysqli_query($this->db,"INSERT INTO `question`(`id_quiz`,`question`,) VALUES ('$this->id_quiz','$this->question')");
        return false;
        }
        // end create_Question
        // Get question
        public function Get_Question($id_question,$id_quiz=null,$question=null){
            // get by id_question
            if($id_question !=null){
                $question_sql=mysqli_query($this->db,"SELECT * FROM question WHERE id_question ='{$id_question}'");
                if(mysqli_num_rows($question_sql) >0){
                    return $question = mysqli_fetch_object($question_sql);
                }
                    return false;
            }
            // get by id_question end
            // get id_quiz nd question
            if($id_quiz !=null && $question !=null){
                $question_sql=mysqli_query($this->db,"SELECT * FROM question WHERE id_quiz ='{$id_quiz}' AND question='$question'");
                if(mysqli_num_rows($question_sql) >0){
                    return $question = mysqli_fetch_object($question_sql);
                }
                    return false;
            }
        }
        // Get question End 
        // create_Answer
        public function create_Answer($answer){
            $this->SetId_Question($answer->id_question);
            $Set_answer=mysqli_query($this->db,"INSERT INTO `answer`(`id_question`,`answer`,`is_true`) VALUES ('$this->id_question','$answer->answer','$answer->is_true')");
            return false;
            }
        // end create_Answer
        public function Get_Answer($id_answer=null,$id_question=null,$answer=null){
                // get by id_answer
                if($id_answer !=null){
                    $answer_sql=mysqli_query($this->db,"SELECT * FROM answer WHERE id_answer ='{$id_answer}'");
                    if(mysqli_num_rows($answer_sql) >0){
                        return $answer = mysqli_fetch_object($answer_sql);
                    }
                        return false;
                }
                // get by id_answer end
                // get id_question end answer
                if($id_question !=null && $answer !=null){
                    $question_sql=mysqli_query($this->db,"SELECT * FROM answer WHERE id_question ='{$id_question}' AND question='$answer'");
                    if(mysqli_num_rows($question_sql) >0){
                        return $question = mysqli_fetch_object($question_sql);
                    }
                        return false;
                }
        }
}
?>