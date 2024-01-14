<?php
namespace App;
require 'config.php';

class User
{
    public $id;
    public $name;
    public $email;
    private $password;
    public $role;
    public $avatar;
    public $db;
    // set 
    private function SetName($name){
        return $this->name=$name;
    }
    private function SetEmail($email){
        return $this->email=$email;
    }
    private function SetPassword($password){
        return $this->password=$password;
    }
    private function SetRole($role){
        return $this->role=$role;
    }
    private function SetAvatar($avatar){
        return $this->avatar=$avatar;
    }
    public function SetDb($db){
        return $this->db=$db;
    }
    // end set
    // create
    public function create($user){
        $this->SetName($user->name);
        $this->SetEmail($user->email);
        $this->SetPassword($user->password);
        $this->SetRole($user->role);
        $this->SetAvatar($user->avatar);
        $register=mysqli_query($this->db,"INSERT INTO `users`( `name`, `email`, `password`, `role`,`avatar`) VALUES ('$this->name','$this->email','$this->password','$this->role','$this->avatar')");
        return $this->GetUser(email:$this->email,password:$this->password);
    }
    // end create
    // GetUser
    public function GetUser($id=null,$email=null,$password=null){
        if($id !=null){
            $user_sql=mysqli_query($this->db,"SELECT * FROM users WHERE id ='{$id}' ");
            if(mysqli_num_rows($user_sql) >0){
                return $user = mysqli_fetch_object($user_sql);
            }else{
                return false;
            }
        }
        if($email !=null && $password !=null){
            $user_sql=mysqli_query($this->db,"SELECT * FROM users WHERE email ='{$email}' AND password = '{$password}'");
            if(mysqli_num_rows($user_sql) >0){
                return $user = mysqli_fetch_object($user_sql);
            }else{
                return false;
            }
            
        }
    }
    // end GetUser
}
// $a  =new User();
// $a ->SetDb($conn);
// var_dump($a->create((object) array(
//     "name"=>"abbas",
//     "email"=>"email",
//     "password"=>"password",
//     "role"=>"role",)));
    
?>