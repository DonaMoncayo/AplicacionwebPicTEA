/*Esta funcion muestra la vocal a y oculta cualquier otra vocal*/
function vocala(){
    document.getElementById('va').style.display = 'block';
    document.getElementById('ve').style.display = 'none';
    document.getElementById('vi').style.display = 'none';
    document.getElementById('vo').style.display = 'none';
    document.getElementById('vu').style.display = 'none';
}
/*Esta funcion muestra la vocal e y oculta cualquier otra vocal*/
function vocale(){
    document.getElementById('ve').style.display = 'block';
    document.getElementById('va').style.display = 'none';
    document.getElementById('vi').style.display = 'none';
    document.getElementById('vo').style.display = 'none';
    document.getElementById('vu').style.display = 'none';
}
/*Esta funcion muestra la vocal i y oculta cualquier otra vocal*/
function vocali(){
    document.getElementById('vi').style.display = 'block';
    document.getElementById('va').style.display = 'none';
    document.getElementById('ve').style.display = 'none';
    document.getElementById('vo').style.display = 'none';
    document.getElementById('vu').style.display = 'none';
}
/*Esta funcion muestra la vocal o y oculta cualquier otra vocal*/
function vocalo(){
    document.getElementById('vo').style.display = 'block';
    document.getElementById('va').style.display = 'none';
    document.getElementById('ve').style.display = 'none';
    document.getElementById('vi').style.display = 'none';
    document.getElementById('vu').style.display = 'none';
}
/*Esta funcion muestra la vocal u y oculta cualquier otra vocal*/
function vocalu(){
    document.getElementById('vu').style.display = 'block';
    document.getElementById('va').style.display = 'none';
    document.getElementById('ve').style.display = 'none';
    document.getElementById('vi').style.display = 'none';
    document.getElementById('vo').style.display = 'none';
}

/*AUDIOS DE VOCALES*/ 
const a = new Audio();
a.src = "./audios/a.mp3";

const e = new Audio();
e.src = "./audios/e.mp3";

const i = new Audio();
i.src = "./audios/i.mp3";

const o = new Audio();
o.src = "./audios/o.mp3";

const u = new Audio();
u.src = "./audios/u.mp3";