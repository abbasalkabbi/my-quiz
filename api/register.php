<?php

use App\User;

require 'config.php';
require "./user.php";
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
if($_POST){
    // get data
        $name=$_POST['name'];
        $email=$_POST['email'];
        $password=$_POST['password'];
        $role=$_POST['role'];
        // if Not empty
        if(!empty($name) && !empty($email) && !empty($password) && !empty($role)){
                // email 
                if(filter_var($email,FILTER_VALIDATE_EMAIL)){
                        $email_check=mysqli_query($conn,"SELECT * FROM users WHERE email = '{$email}'");
                        if(mysqli_num_rows($email_check) >0){
                                // if email is not new
                                        echo json_encode(['status'=>false,"message" => "($email) is  login"]);
                        }else{
                        // if new email
                        // check name
                        if(strlen($name) >7){
                                if(strlen($password) >7){
                                        $user=new User();
                                        $user->SetDb($conn);
                                        $user->create(
                                                (object) array(
                                                        "name"=>$name,
                                                        "email"=>$email,
                                                        "password"=>$password,
                                                        "role"=>$role,)
                                                );
                                        // get user
                                        echo json_encode(['status'=>true,"message" => "successful","user" =>$user->GetUser(email:$email,password:$password)]);
                                }else{
                                        // password short
                                        echo json_encode(['status'=>false,"message" => "password is  Short"]);
                                }
                        }else{
                                // name is short
                                echo json_encode(['status'=>false,"message" => "($name) is  Short"]);
                        }
                        }
                        // email  End email
                }else{
                        echo json_encode(['status'=>false,"message" => "it is not email"]);
                }
                
        }
        // if empty 
        if(empty($name) || empty($email) || empty($password) || empty($role)){
                echo json_encode(['status'=>false,"message" => "There is not input"]);
        }
}
?>