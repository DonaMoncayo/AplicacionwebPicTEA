<?php

//valida datos del servidor
$user = "root";
$pass = "";
$host = "localhost";

//conecta la base datos
$connection = mysqli_connect($host, $user, $pass);

//Recepcion de datos 
    $namen=$_POST['namen'];
    $age=$_POST['age'];
    $genero=$_POST['genero'];
    $namep=$_POST['namep'];
    $mail=$_POST['mail'];
    $num=$_POST['num'];
    $usuario=$_POST['usuario'];
    $pass=$_POST['pass'];
       
//indica el nombre de la base datos
    $datab = "registro";
//seleciona la base datos
    $db = mysqli_select_db($connection,$datab);

//inserta datos de registro al mysql
$instruccion_SQL = "INSERT INTO persona (namen, age, genero, namep, mail, num, usuario, pass)
VALUES ('$namen','$age','$genero','$namep','$mail','$num','$usuario','$pass')";

$resultado = mysqli_query($connection,$instruccion_SQL);      

mysqli_close( $connection );

header("location: ./../cuestionario/index.html");
    
?>