<?php
    //print_r($_GET);

    $name=$_GET['username'];
    $pwd=$_GET['pwd'];

    $response=array();

    if($name=='zs'&&$pwd=='123'){
        $msg='��¼�ɹ�';
    }else{
        $msg='��¼ʧ��';
    }
   echo $msg;
?>