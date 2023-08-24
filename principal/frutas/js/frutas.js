/*Esta funcion muestra la vocal a y oculta cualquier otra vocal*/
function kiwi(){
    document.getElementById('kiwi').style.display = 'block';
    document.getElementById('limon').style.display = 'none';
    document.getElementById('manzana').style.display = 'none';
    document.getElementById('pera').style.display = 'none';
    document.getElementById('sandia').style.display = 'none';
}
/*Esta funcion muestra la vocal e y oculta cualquier otra vocal*/
function limon(){
    document.getElementById('limon').style.display = 'block';
    document.getElementById('kiwi').style.display = 'none';
    document.getElementById('manzana').style.display = 'none';
    document.getElementById('pera').style.display = 'none';
    document.getElementById('sandia').style.display = 'none';
}
/*Esta funcion muestra la vocal i y oculta cualquier otra vocal*/
function manzana(){
    document.getElementById('manzana').style.display = 'block';
    document.getElementById('kiwi').style.display = 'none';
    document.getElementById('limon').style.display = 'none';
    document.getElementById('pera').style.display = 'none';
    document.getElementById('sandia').style.display = 'none';
}
/*Esta funcion muestra la vocal o y oculta cualquier otra vocal*/
function pera(){
    document.getElementById('pera').style.display = 'block';
    document.getElementById('kiwi').style.display = 'none';
    document.getElementById('manzana').style.display = 'none';
    document.getElementById('limon').style.display = 'none';
    document.getElementById('sandia').style.display = 'none';
}
/*Esta funcion muestra la vocal u y oculta cualquier otra vocal*/
function sandia(){
    document.getElementById('sandia').style.display = 'block';
    document.getElementById('kiwi').style.display = 'none';
    document.getElementById('manzana').style.display = 'none';
    document.getElementById('limon').style.display = 'none';
    document.getElementById('pera').style.display = 'none';
}

/*AUDIOS DE OBJETOS*/ 
const kiw = new Audio();
kiw.src = "./audios/kiwi.mp3";

const lim = new Audio();
lim.src = "./audios/limon.mp3";

const man = new Audio();
man.src = "./audios/manzana.mp3";

const per = new Audio();
per.src = "./audios/pera.mp3";

const san = new Audio();
san.src = "./audios/sandia.mp3";