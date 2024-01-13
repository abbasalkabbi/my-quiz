<?php
require 'config.php';
class User
{
    public $id;
    public $name;
    public $email;
    private $password;
    public $role;
    public $db;
    
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
    public function SetDb($db){
        return $this->db=$db;
    }
    public function create($user){
        $this->SetName($user->name);
        $this->SetEmail($user->email);
        $this->SetPassword($user->password);
        $this->SetRole($user->role);
        $register=mysqli_query($this->db,"INSERT INTO `users`( `name`, `email`, `password`, `role`) VALUES ('$this->name','$this->email','$this->password','$this->role')");
        return $this->GetUser(email:$this->email,password:$this->password);
    }
    public function GetUser($id=null,$email=null,$password=null){
        if($id !=null){
            $user_sql=mysqli_query($this->db,"SELECT * FROM users WHERE id ='{$id}' ");
            return $user = mysqli_fetch_object($user_sql);
        }
        if($email !=null && $password !=null){
            $user_sql=mysqli_query($this->db,"SELECT * FROM users WHERE email ='{$email}' AND password = '{$password}'");
            return $user = mysqli_fetch_object($user_sql);
        }
    }
}
$a  =new User();
$a ->SetDb($conn);
var_dump($a->create((object) array(
    "name"=>"abbas",
    "email"=>"email",
    "password"=>"password",
    "role"=>"role",)));
    
?>