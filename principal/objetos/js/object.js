/*Esta funcion muestra la vocal a y oculta cualquier otra vocal*/
function barco(){
    document.getElementById('barco').style.display = 'block';
    document.getElementById('casa').style.display = 'none';
    document.getElementById('dado').style.display = 'none';
    document.getElementById('jarra').style.display = 'none';
    document.getElementById('hoja').style.display = 'none';
}
/*Esta funcion muestra la vocal e y oculta cualquier otra vocal*/
function casa(){
    document.getElementById('casa').style.display = 'block';
    document.getElementById('barco').style.display = 'none';
    document.getElementById('dado').style.display = 'none';
    document.getElementById('jarra').style.display = 'none';
    document.getElementById('hoja').style.display = 'none';
}
/*Esta funcion muestra la vocal i y oculta cualquier otra vocal*/
function dado(){
    document.getElementById('dado').style.display = 'block';
    document.getElementById('barco').style.display = 'none';
    document.getElementById('casa').style.display = 'none';
    document.getElementById('jarra').style.display = 'none';
    document.getElementById('hoja').style.display = 'none';
}
/*Esta funcion muestra la vocal o y oculta cualquier otra vocal*/
function jarra(){
    document.getElementById('jarra').style.display = 'block';
    document.getElementById('barco').style.display = 'none';
    document.getElementById('casa').style.display = 'none';
    document.getElementById('dado').style.display = 'none';
    document.getElementById('hoja').style.display = 'none';
}
/*Esta funcion muestra la vocal u y oculta cualquier otra vocal*/
function hoja(){
    document.getElementById('hoja').style.display = 'block';
    document.getElementById('barco').style.display = 'none';
    document.getElementById('casa').style.display = 'none';
    document.getElementById('jarra').style.display = 'none';
    document.getElementById('dado').style.display = 'none';
}

/*AUDIOS DE OBJETOS*/ 
const barc = new Audio();
barc.src = "./audios/barco.mp3";

const cas = new Audio();
cas.src = "./audios/casa.mp3";

const dad = new Audio();
dad.src = "./audios/dado.mp3";

const jarr = new Audio();
jarr.src = "./audios/jarra.mp3";

const hoj = new Audio();
hoj.src = "./audios/hoja.mp3";