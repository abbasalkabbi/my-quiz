<?php

use App\User;

require 'config.php';
require "./user.php";
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
if($_POST){
    $email=$_POST['email'];
    $password=$_POST['password'];
    if(!empty($email) && !empty($password)){
        // check email if login
        $email_check=mysqli_query($conn,"SELECT * FROM users WHERE email = '{$email}'");
        if(mysqli_num_rows($email_check) >0){
            // if email is login
            // chech password
            $user=new User();
            $user->SetDb($conn);
            $data=$user->GetUser(email:$email,password:$password);
            if($data ==false){
                echo json_encode(['status'=>false,"message" => "Password is Wrong"]);
            }else{
            echo json_encode(['status'=>true,"message" => "successful","user" =>$data]);
            }
        }else{
            echo json_encode(['status'=>false,"message" => "Email is not login"]);
        }
    }  // if empty 
    if( empty($email) || empty($password)){
            echo json_encode(['status'=>false,"message" => "There is not input"]);
    }
}

?>