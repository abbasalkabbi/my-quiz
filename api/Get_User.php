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
    $gu=$quiz->Get_Quiz(id_author:$id);
    $count=$quiz->Count(id_author:$id);
    echo json_encode(['status'=>true,'user'=>['name'=>$user->name,'role'=>$user->role,'avatar'=>$user->avatar,'email'=>$user->email],'quiz'=>$gu ,'count'=>$count]);

}else{
    echo json_encode(['status'=>false]);
}
?>