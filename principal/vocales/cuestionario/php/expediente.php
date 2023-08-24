<?php

//valida datos del servidor
$user = "root";
$pass = "";
$host = "localhost";

//conecta la base datos
$connection = mysqli_connect($host, $user, $pass);

//Recepcion de datos 
$puntaje=.$_GET['puntaje'];
//indica el nombre de la base datos
echo "Mi nombre es Dona y tengo " .$puntaje."/10";
$datab = "registro";
//seleciona la base datos
    $db = mysqli_select_db($connection,$datab);

$instruccion_SQL = "INSERT INTO expediente (puntaje)
   
    VALUES ('$puntaje')";
    
    $resultado = mysqli_query($connection,$instruccion_SQL);      
    
    mysqli_close( $connection );
?>