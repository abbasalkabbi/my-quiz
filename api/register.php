<?php

use App\User;

require 'config.php';
require "./user.php";
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
// $a  =new App\User();
// $a ->SetDb($conn);
// var_dump($a->GetUser(id:38));
if($_POST){
    // get data
    $name=$_POST['name'];
    $email=$_POST['email'];
    $password=$_POST['password'];
    $role=$_POST['role'];
       // if input  empty
    if(empty($name) || empty($email) || empty($password)|| empty($role)){
        echo json_encode(['status'=>false,"message" => "input is empty"]);
    }  // if input is not empty
    if(!empty($email) && !empty($email) && !empty($password) && !empty($role)){
        // check is email 
        if(filter_var($email,FILTER_VALIDATE_EMAIL)){
            $email_check=mysqli_query($conn,"SELECT * FROM user WHERE email = '{$email}'");
            if(mysqli_num_rows($email_check) >0){
                // if email is not new
                    echo json_encode(['status'=>false,"message" => "($email) is  login"]);
            }
        }else{
            // if email is new
            if(strlen($name) <7){
                //   if name is short 8 char
                echo json_encode(['status'=>false,"message" => "($name) is  Short"]);
            }else{
                if(strlen($password) <7){
                     //   if password is short 8 char
                    echo json_encode(['status'=>false,"message" => "($password) is  Short"]);
                }else{
                    //   if password is not  short 8 char
                    $user =new User();
                    $user->create((object) array(
                            "name"=>$name,
                            "email"=>$email,
                            "password"=>$password,
                            "role"=>$role,)
                            );
                            json_encode($user->GetUser(email:$email,password:$password));
                }
                }
        }
}
}
?>