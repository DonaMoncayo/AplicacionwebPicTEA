<?php
    require 'conexion.php';
    session_start();
    
    $usuario = $_POST['usuario'];
    $pass = $_POST['pass'];

    $q = "SELECT COUNT(*) as contar from persona where usuario = '$usuario' and pass = '$pass' ";
    $consulta = mysqli_query($connection,$q); 
    $array = mysqli_fetch_array($consulta);

    $admin = "Pictea" ;
    $pass = "2023";

    if($usuario == $admin && $pass == $pass){
    header("location: ./../../admin/index.php");
    }
    elseif($array['contar']>0){
        $_SESSION['username'] = $usuario;
        header("location: ./../../principal/main.php");
    }
    else{
        header("location: ./../login.html");
        
    }

    


?>