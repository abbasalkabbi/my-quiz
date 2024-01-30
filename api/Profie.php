<?php 
use App\User;

require 'config.php';
require "./user.php";
$user=new User();
$user->SetDb($conn);
$user->SetId(1);
$user->GetUser(id:1);
echo $user->avatar;
?>