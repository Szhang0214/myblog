<?php
    //print_r($_GET);

    $name=$_GET['username'];
    $pwd=$_GET['pwd'];

    $response=array();

    if($name=='zs'&&$pwd=='123'){
        $msg='µÇÂ¼³É¹¦';
    }else{
        $msg='µÇÂ¼Ê§°Ü';
    }
   echo $msg;
?>