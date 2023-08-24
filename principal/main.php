<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/levels.css">
    <link rel="stylesheet" href="../index/css/style.css">
    
    <script src="../index/js/script.js" crossorigin="anonymous"></script>
    <link href="https://fonts.googleapis.com/css2?family=Rubik+Vinyl&display=swap" rel="stylesheet">
    <title>login</title>
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
                            $usuario = $_SESSION['username'];

                            if(!isset( $usuario)){
                                header("location: ../index/index.html");
                            }
                            else{
                                echo "<h1>Bienvenid@ $usuario </h1>";
                                echo "<li><a href='../index/index.html#' class='select'>INICIO</a></li>";                            

                                echo "<li><a href='./../form/phplog/exit.php' class='select'>SALIR</a></li>";
                            }  

                        ?>
                    </ul>
                </nav>
                

                
                <div class="btn__menu" id="btn_menu"><i class="fas fa-bars"></i></div>

            </div>

        </div>
    </header>

    <!--PONER LO DE DOOOOOOOOOONA AQUI-->

    <div class="niveles">
          <!-- <h1 class="titulo">NIVELES</h1><br>-->
           <div class="face front">
            <img src="./img/1.png" height="300px" alt="">
                <h3>Vocales</h3>
           </div>
           <div class="face back">
                <h3>Vocales</h3> 
                <p>En este nivel aprenderas sobre la pronunciación asi como la forma de las vocales. 
                </p>
                <div class="link">
                    <a href="./vocales/vocales.html" class="select">COMENZAR</a>    
                </div>
           </div>
        </div>

        <div class="niveles">
            <div class="face front">
                 <img src="./img/2.png" height="300px" alt="">
                 <h3>Frutas</h3>
            </div>
            <div class="face back">
                 <h3>Frutas</h3> 
                 <p>En este nivel aprenderas sobre la pronunciación, asi como la forma de las frutas.
                </p>
                 <div class="link">
                    <a href="./frutas/frutas.html" class="select">COMENZAR</a>    
                 </div>
            </div>
         </div>

         <div class="niveles">
            <div class="face front">
                 <img src="./img/3.png" height="300px" alt="">
                 <h3>Animales</h3>
            </div>
            <div class="face back">
                 <h3>Animales</h3> 
                 <p>En este nivel aprenderas sobre la pronunciación, asi como la forma de algunos animales.
                </p>
                 <div class="link">
                    <a href="./animales/animales.html" class="select">COMENZAR</a>     
                 </div>
            </div>
         </div>

         <div class="niveles">
            <div class="face front">
                 <img src="./img/4.png" height="300px" alt="">
                 <h3>Objetos</h3>
            </div>
            <div class="face back">
                 <h3>Objetos</h3> 
                 <p>En este nivel aprenderas sobre la pronunciación, asi como la forma de objetos diversos. 
                </p>
                 <div class="link">
                    <a href="./objetos/objetos.html" class="select">COMENZAR</a>    
                 </div>
            </div>
         </div>

    

    <br><br>
   

    


    
</body>
</html>