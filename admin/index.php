<?php

    $conexion=mysqli_connect('localhost','root','','registro');

?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../index/css/style.css">
    <link rel="stylesheet" href="tabla.css">

    <title>Datos Pictea</title>
</head>
<body>
<header id="header">
        <div class="container__header">
            <div class="logo">
                <a href="../index/index.html#"><img src="../index/images/imgco.svg" alt="logo"></a>
            </div>
            <div class="container__nav">
                <nav id="nav">
                    <ul>                      
                        
                        <?php                                              
                            session_start();
                            echo "<h1>Bienvenid@ Administrador </h1>";
                            echo "<li><a href='../index/index.html#' class='select'>INICIO</a></li>";                            

                            echo "<li><a href='../form/phplog/exit.php' class='select'>SALIR</a></li>";
                            

                        ?>
                    </ul>
                </nav>
                

                
                <div class="btn__menu" id="btn_menu"><i class="fas fa-bars"></i></div>

            </div>

        </div>
    </header>

    
    <div id="main-container">
    <table>
        <thead>
            <tr>
                <th>id</th>
                <th>Nombre del niño</th>
                <th>Edad</th>
                <th>Género</th>
                <th>Nombre tutor</th>
                <th>Correo</th>
                <th>Número</th>
            </tr>
        </thead>

        <?php
        $sql="SELECT * from persona";
        $result=mysqli_query($conexion,$sql);

        while($mostrar=mysqli_fetch_array($result)){        
        ?>

        <tr>
            <td><?php echo $mostrar['idpersona']?></td>
            <td><?php echo $mostrar['namen']?></td>
            <td><?php echo $mostrar['age']?></td>
            <td><?php echo $mostrar['genero']?></td>
            <td><?php echo $mostrar['namep']?></td>
            <td><?php echo $mostrar['mail']?></td>
            <td><?php echo $mostrar['num']?></td>


        </tr>
        <?php
        }
        ?>

    </table>
    </div>
    
</body>
</html>