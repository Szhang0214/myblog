<?php
    //print_r($_GET);
    var_dump($_GET);

    $name=isset($_GET['username'])?$_GET['username']:'';
    $pwd=isset($_GET['pwd'])?$_GET['pwd']:'';

    $response=array();

    if($name=='zs'&&$pwd=='123'){

        $response['code']=200;
        $response['msg']='login success';
    }else{
         $response['code']=400;
         $response['msg']='login error';
    }
    echo json_encode($response);
?>