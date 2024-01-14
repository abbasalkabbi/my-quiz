<?php

use App\User;

require 'config.php';
require "./user.php";
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
$DIR_img = "./avatars/";
if($_POST){
    // get data
        $name=$_POST['name'];
        $email=$_POST['email'];
        $password=$_POST['password'];
        $role=$_POST['role'];
        $avatar=$_POST['avatar'];
         //  img upload
        function upload_img($DIR){
           // if there image
                $file_chunks = explode(";base64,", $_POST['avatar']);
                $fileType_img = explode("image/", $file_chunks[0]);
                $image_type = $fileType_img[1];
                $base64Img = base64_decode($file_chunks[1]);
                $name_img= uniqid() . '.'.$image_type;
                $file = $DIR . $name_img;
                file_put_contents($file, $base64Img);
                return $name_img;
        }// End img upload
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
                                        if(empty($avatar)){
                                                // not avatar
                                        $user->create(
                                                (object) array(
                                                        "name"=>$name,
                                                        "email"=>$email,
                                                        "password"=>$password,
                                                        "role"=>$role,
                                                        "avatar"=>'avatar.png',
                                                        )
                                                );
                                        // get user
                                        echo json_encode(['status'=>true,"message" => "successful","user" =>$user->GetUser(email:$email,password:$password)]);
                                        }
                                        // if there avatar
                                        if(!empty($avatar)){
                                                $url_img=upload_img($DIR_img);
                                                $user->create(
                                                        (object) array(
                                                                "name"=>$name,
                                                                "email"=>$email,
                                                                "password"=>$password,
                                                                "role"=>$role,
                                                                "avatar"=>$url_img,
                                                                )
                                                        );
                                                // get user
                                                echo json_encode(['status'=>true,"message" => "successful","user" =>$user->GetUser(email:$email,password:$password)]);
                                        }
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