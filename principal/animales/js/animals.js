/*Esta funcion muestra la vocal a y oculta cualquier otra vocal*/
function foca(){
    document.getElementById('foca').style.display = 'block';
    document.getElementById('gato').style.display = 'none';
    document.getElementById('nu').style.display = 'none';
    document.getElementById('pato').style.display = 'none';
    document.getElementById('sapo').style.display = 'none';
}
/*Esta funcion muestra la vocal e y oculta cualquier otra vocal*/
function gato(){
    document.getElementById('gato').style.display = 'block';
    document.getElementById('foca').style.display = 'none';
    document.getElementById('nu').style.display = 'none';
    document.getElementById('pato').style.display = 'none';
    document.getElementById('sapo').style.display = 'none';
}
/*Esta funcion muestra la vocal i y oculta cualquier otra vocal*/
function nu(){
    document.getElementById('nu').style.display = 'block';
    document.getElementById('gato').style.display = 'none';
    document.getElementById('foca').style.display = 'none';
    document.getElementById('pato').style.display = 'none';
    document.getElementById('sapo').style.display = 'none';
}
/*Esta funcion muestra la vocal o y oculta cualquier otra vocal*/
function pato(){
    document.getElementById('pato').style.display = 'block';
    document.getElementById('gato').style.display = 'none';
    document.getElementById('nu').style.display = 'none';
    document.getElementById('foca').style.display = 'none';
    document.getElementById('sapo').style.display = 'none';
}
/*Esta funcion muestra la vocal u y oculta cualquier otra vocal*/
function sapo(){
    document.getElementById('sapo').style.display = 'block';
    document.getElementById('gato').style.display = 'none';
    document.getElementById('nu').style.display = 'none';
    document.getElementById('pato').style.display = 'none';
    document.getElementById('foca').style.display = 'none';
}

/*AUDIOS DE OBJETOS*/ 
const foc = new Audio();
foc.src = "./audios/foca.mp3";

const gat = new Audio();
gat.src = "./audios/gato.mp3";

const niu = new Audio();
niu.src = "./audios/nu.mp3";

const pat= new Audio();
pat.src = "./audios/pato.mp3";

const sap = new Audio();
sap.src = "./audios/sapo.mp3";