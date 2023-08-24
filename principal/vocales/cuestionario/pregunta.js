let preguntas_aleatorias = false;
let mostrar_pantalla_juego_términado = true;
let reiniciar_puntos_al_reiniciar_el_juego = true;

let a = new Audio('./../audios/a.mp3');
let u = new Audio('./../audios/u.mp3');
let o = new Audio('./../audios/o.mp3');
let i = new Audio('./../audios/i.mp3');
let e = new Audio('./../audios/e.mp3');

var puntaje;

window.onload = function () {
  base_preguntas = readText("preguntas.json");
  interprete_bp = JSON.parse(base_preguntas);
  escogerPreguntaAleatoria();
};

let pregunta;
let posibles_respuestas;
btn_correspondiente = [
  select_id("btn1"),
  select_id("btn2"),
  select_id("btn3"),
  select_id("btn4")
];
let npreguntas = [];

let preguntas_hechas = 0;
let preguntas_correctas = 0;
let n;
function escogerPreguntaAleatoria() {
  
  
  if (preguntas_aleatorias) {
    n = Math.floor(Math.random() * interprete_bp.length);
  } else {
    n = 0;
  }

  while (npreguntas.includes(n)) {  
    n++;
    if (n >= interprete_bp.length) {
      n = 0;
    }
    if (npreguntas.length == interprete_bp.length) {
      
      //Aquí es donde el juego se reinicia
      if (mostrar_pantalla_juego_términado) {
        puntaje = preguntas_correctas;
        if(preguntas_correctas){
          swal.fire({
            title: "TERMINADO",
            text:
              "Puntuación: " + preguntas_correctas + "/" + (preguntas_hechas )+" "+
              "Regresa al menu para seguir con tu aprendizaje."
              ,
            icon: "success"
            
          });
        }

      }
      if (reiniciar_puntos_al_reiniciar_el_juego) {
        preguntas_correctas = 0
        preguntas_hechas = 0
      }
      npreguntas = 5;
    }
  }
  npreguntas.push(n);
  preguntas_hechas++;

  escogerPregunta(n);

}

function escogerPregunta(n) {
  pregunta = interprete_bp[n];
  select_id("categoria").innerHTML = pregunta.categoria;
  select_id("pregunta").innerHTML = pregunta.pregunta;
  select_id("numero").innerHTML = n;
  let pc = preguntas_correctas;
  
  if (preguntas_hechas > 1) {
    select_id("puntaje").innerHTML = pc + "/10";
  } else {
    select_id("puntaje").innerHTML = "";
  }

  style("imagen").objectFit = pregunta.objectFit;
  desordenarRespuestas(pregunta);
  if (pregunta.imagen) {
    select_id("imagen").setAttribute("src", pregunta.imagen);
    style("imagen").height = "150px";
    style("imagen").width = "30%";
  } else {
    style("imagen").height = "0px";
    style("imagen").width = "0px";
    setTimeout(() => {
      select_id("imagen").setAttribute("src", "");
    }, 500);
  }
}

function reproducir(){
  if(n == 0){
    a.play();
  }
  if(n == 1){
    u.play();
  }
  if(n == 2){
    o.play();
  }
  if(n == 3){
    i.play();
  }
  if(n == 4){
    e.play();
  }

}


function desordenarRespuestas(pregunta) {
  posibles_respuestas = [
    pregunta.respuesta,
    pregunta.incorrecta1,
    pregunta.incorrecta2,
    pregunta.incorrecta3,
  ];
  //console.log(posibles_respuestas);
  posibles_respuestas.sort(() => Math.random() - 0.5);
  //console.log(posibles_respuestas);

  select_id("btn1").innerHTML = posibles_respuestas[0];
  select_id("btn2").innerHTML = posibles_respuestas[1];
  select_id("btn3").innerHTML = posibles_respuestas[2];
  select_id("btn4").innerHTML = posibles_respuestas[3];
}

let suspender_botones = false;

function oprimir_btn(i) {
  if (suspender_botones) {
    return;
  }
  suspender_botones = true;
  if (posibles_respuestas[i] == pregunta.respuesta) {
    preguntas_correctas++;
    btn_correspondiente[i].style.background = "lightgreen";
  } else {
    btn_correspondiente[i].style.background = "pink";
  }
  for (let j = 0; j < 4; j++) {
    if (posibles_respuestas[j] == pregunta.respuesta) {
      btn_correspondiente[j].style.background = "lightgreen";
      break;
    }
  }
  setTimeout(() => {
    reiniciar();
    suspender_botones = false;
  }, 1500);
}

// let p = prompt("numero")

function reiniciar() {
  for (const btn of btn_correspondiente) {
    btn.style.background = "white";
  }
  escogerPreguntaAleatoria();
}

function select_id(id) {
  return document.getElementById(id);
}

function style(id) {
  return select_id(id).style;
}

function readText(ruta_local) {
  var texto = null;
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", ruta_local, false);
  xmlhttp.send();
  if (xmlhttp.status == 200) {
    texto = xmlhttp.responseText;
  }
  return texto;
}
//CONEXION A BD
function bd(){
  //var nombre= $("#nombre").val();
  
  window.location = "expediente.php?puntaje=" +puntaje;
  /*$.post('expediente.php',{puntaje: puntaje}, function(data){
    if(data!=null){
      alert("Los datos se enviaron correctamente");
    }else{
      alert("Los datos se enviaron correctamente");
    }
  })*/
}
