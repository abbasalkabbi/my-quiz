<?php 
use App\User;

require 'config.php';
require "./user.php";
$user=new User();
$user->SetDb($conn);
if(isset($_GET['id'])){
    $id=$_GET['id'];
    $user->GetUser(id:$id);
    echo json_encode(['status'=>true,'user'=>['name'=>$user->name,'role'=>$user->role,'avatar'=>$user->avatar,'email'=>$user->email]]);

}else{
    echo json_encode(['status'=>false]);
}
?>