<?php

use App\Quiz;
use App\User;

require 'config.php';
require "./user.php";
require "./quiz.php";
$user=new User();
$quiz=new Quiz();
$user->SetDb($conn);
$quiz->SetDb($conn);
if(isset($_GET['id'])){
    $id=$_GET['id'];
    $user->GetUser(id:$id);
    echo json_encode(['status'=>true,'user'=>['name'=>$user->name,'role'=>$user->role,'avatar'=>$user->avatar,'email'=>$user->email],'quiz'=> $quiz->Get_Quiz(id_author:$id)]);

}else{
    echo json_encode(['status'=>false]);
}
?>