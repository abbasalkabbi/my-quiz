<?php
namespace App;
require 'config.php';
class Quiz 
{
    public $id_author=null;
    public $id_quiz=null;
    public $quiz_name=null;
    public $question=null;
    public $id_question=null;
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
        public function create_Quiz($id_author,$quiz_name){
            $this->SetId_Author($id_author);
            $this->Set_Name($quiz_name);
            $SetQuiz=mysqli_query($this->db,"INSERT INTO `quiz`(`id_author`,`name`) VALUES ('$this->id_author','$this->quiz_name')");
            return $this->Get_Quiz( id_author:$this->id_author ,name:$this->quiz_name);
        }
        // end create
        // get Get_Quiz
        public function Get_Quiz($id_quiz=null , $id_author=null ,$name =null){
            
            if($id_author!=null){
                $quiz_sql=mysqli_query($this->db,"SELECT * FROM quiz WHERE id_author ='{$id_author}'");
                if(mysqli_num_rows($quiz_sql) >0){
                    $quiz = mysqli_fetch_all($quiz_sql,MYSQLI_ASSOC);
                    return $quiz;
                }
                    return false;
            }
            // get by name
            if($id_author !=null && $name !=null){
                $quiz_sql=mysqli_query($this->db,"SELECT * FROM quiz WHERE id_author ='{$id_author}' AND name = '{$name}'");
                if(mysqli_num_rows($quiz_sql) >0){
                    $quiz = mysqli_fetch_object($quiz_sql);
                    $this->SetId_Quiz($quiz->id_quiz);
                    $this->Set_Name($quiz->name);
                    return $quiz;
                }
                    return false;
            }
            // get by id
            if($id_quiz != null){
                $quiz_sql=mysqli_query($this->db,"SELECT * FROM quiz WHERE id_quiz ='{$id_quiz}'");
                if(mysqli_num_rows($quiz_sql) >0){
                    $quiz = mysqli_fetch_object($quiz_sql);
                    $this->SetId_Quiz($quiz->id_quiz);
                    $this->Set_Name($quiz->name);
                    return $quiz;
                }
                return false;
            }
            $quiz_sql=mysqli_query($this->db,"SELECT * FROM quiz");
            $quiz = mysqli_fetch_all($quiz_sql,MYSQLI_ASSOC);
            return $quiz;
        }
        // end Get_Quiz
        // delete  quiz
        public function Delete_Quiz($id_quiz=null){
            $quiz_delete=mysqli_query($this->db,"DELETE   FROM quiz WHERE id_quiz ='{$id_quiz}'");
        }
        // delete  quiz End
        // Edit_Quiz
        public function Edit_Quiz($id_quiz=null,$name =null){
            $update=mysqli_query($this->db,"UPDATE `quiz` SET `name` = '$name' WHERE `quiz`.`id_quiz` = $id_quiz");
        }
        // Edit_Quiz End
        // create_Question
        public function create_Question($id_quiz,$question){
        $this->SetId_Quiz($id_quiz);
        $this->SetQuestion($question);
        $Set_question=mysqli_query($this->db,"INSERT INTO `question`( `id_quiz`, `question`) VALUES ('$this->id_quiz','$this->question')");
        return $this->Get_Question(id_quiz:$this->id_quiz,question:$this->question);
        }
        // end create_Question
        // Get question
        public function Get_Question($id_question=null,$id_quiz=null,$question=null){
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
                    $question = mysqli_fetch_object($question_sql);
                    $this->SetId_Question($question->id_question);
                    return $question ;
                }
                    return false;
            }
            if($id_quiz){
                $question_sql=mysqli_query($this->db,"SELECT * FROM question WHERE id_quiz ='{$id_quiz}' ");
                if(mysqli_num_rows($question_sql) >0){
                    $question = mysqli_fetch_all($question_sql,MYSQLI_ASSOC);
                    return $question;
                }
                    return false;
            }
        }
        // Get question End 
        // Edit question 
        public function Edit_Question($id_question=null,$question=null){
            $update=mysqli_query($this->db,"UPDATE `question` SET `question` = '$question' WHERE `question`.`id_question` ='{$id_question}'");
            $this->SetId_Question($id_question);
        }
        // Edit question  End
        // create_Answer
        public function create_Answer($id_question,$answer,$is_true){
            $this->SetId_Question($id_question);
            $Set_answer=mysqli_query($this->db,"INSERT INTO `answer` (`id_answer`, `id_question`, `answer`, `is_true`) VALUES (NULL, '$id_question', '$answer', '$is_true');");
            // return $this->Get_Answer(id_question:$this->id_question,answer:$answer);
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
                if($id_question !=null){
                    $question_sql=mysqli_query($this->db,"SELECT * FROM answer WHERE id_question ='{$id_question}'");
                    if(mysqli_num_rows($question_sql) >0){
                        return $question = mysqli_fetch_all($question_sql,MYSQLI_ASSOC);
                    }
                        return false;
                }
        }
        // Edit_Answer 
        public function Edit_Answer($id_answer=null,$answer=null){
            $update=mysqli_query($this->db,"UPDATE `answer` SET `answer` = '$answer' WHERE `answer`.`id_answer` = '{$id_answer}'");
        }
        // Edit_Answer End
        public function Count($id_author=null ){
            if($id_author!=null){
                $quiz_sql=mysqli_query($this->db,"SELECT COUNT(*) AS Count FROM  quiz WHERE id_author ='{$id_author}'");
                if(mysqli_num_rows($quiz_sql) >0){
                    $quiz =$quiz_sql->fetch_assoc();
                    return$quiz['Count'];
                }
                    return false;
            }
        }
}
// $a =new Quiz();
// $a->SetDb($conn);
// $d=$a->Get_Question(id_quiz:1);
// echo ($d);
?>