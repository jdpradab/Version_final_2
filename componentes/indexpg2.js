function envolverLetras(selector) {
  const el = document.querySelector(selector);
  if (el) {
    el.innerHTML = el.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  }
}


function envolverLetras2(selector) {
  const el = document.querySelector(selector);
  if (el) {
    el.innerHTML = el.textContent
      .split(/(?<=\s)|(?=\s)/) // separa letras y espacios pero mantiene los espacios
      .map(char => 
        char === " " ? " " : `<span class="letter">${char}</span>`
      )
      .join("");
  }
}

envolverLetras('.Cargando-text .letters');
envolverLetras('.accP-text .letters');
envolverLetras('.ngw-text .letters');
envolverLetras('.bien-text .letters');

const cell = window.matchMedia("(max-width: 600px)").matches;


//A letras
anime({
  targets: '.Cargando-text .letter',
  opacity: [0, 1],
  duration: 1700,
  delay: (el, i) => 1000 + 45 * i,
  easing: "easeOutExpo",
  complete: function () {
    anime({
        targets:'.Cargando-text .letter',
        translateY: [0, -15],
        direction: 'alternate',
        delay: (el, i) => 300 + 45 * i,
        duration: 450,
        easing: "easeOutExpo",
        loop: 6,
        complete: function(){
        anime({
        targets:'.Cargando-text .letter',
        opacity: [1, 0],
        delay: (el, i) => 2500 + 45 * i,

     })
    }
   })
  }
});

anime({
  targets: '.accP-text .letter',
  opacity: [0, 1],
  color: '#00ff1e',
  duration: 1000,
  delay: (el, i) => 11000 + 45 * i,
  easing: "easeOutExpo",
  complete: function(){
    anime({
        targets: '.accP-text .letter',
        opacity: [1, 0],
        delay: (el, i) => 45 * i,
        easing: "easeOutExpo",
        duration: 1000,
    })
  }
});




// A recuadro
anime({
  targets: ".rcarga",
  height: cell ? [0,"13%"] : [0, 100],
  borderWidth: [0, "2px"],
  duration: 1000,
  delay: 1150,
  easing: "easeInOutQuad",
  complete: function () {
    setTimeout(function () {
      anime({
        targets: ".rcarga",
        top: "50%",               
        height:  cell ? ["15.8%","95%"]:[100, 670],
        width:cell? "97%" :[740, 940],
        duration: 1000,
        easing: "easeInOutQuad"
      });
    }, 11100);
  }
});


//circuloBC
setTimeout(() => {
  const animation = anime.timeline({
    targets: ".circle",
    loop: 5,
    easing:"easeInOutQuad"
  });

  animation
    .add({
      opacity: [0, 1],
      translateX:cell ? [0,"600%"] :[0, 630],
      duration: 1000
    })
    .add({
      opacity: [1, 0],
      duration: 500
    })
    .add({
      translateX: ["600%", 0],
      duration: 500
    });
}, 1700);


//A bienvenida

const timeline = anime.timeline({
  easing: 'easeOutExpo',
  duration: 1000,
  autoplay: true,
});

timeline.add({
  targets: '.bien-text .letter',
  rotateY: [-90, 0],
  duration: 1700,
  delay: (el, i) => 60 * i,
  color: 'rgb(255, 255, 255)'
}, '+=14500');

timeline.add({
  targets: '.ngw-text .letter',
  rotateY: [-90, 0],
  duration: 1700,
  delay: (el, i) => 60 * i
}, '-=1500');

timeline.add({
  targets: ['.bien-text .letter', '.ngw-text .letter'],
  opacity: [1, 0],
  delay: (el, i) => 60 * i
}, '+=200');


//A botones 

const boton = document.querySelector(".BI");
const boton2 = document.querySelector(".BD");
const boton3 = document.querySelector(".BC");

anime({
  targets: ".BI",
  delay: 24000,
  height: cell? [0,"9%"]:[0, 80],
  width: cell? [0,"18%"]:[0, 80],
  borderWidth: [0, "2px"],
  backgroundColor: "rgba(17, 17, 17,0)",
  duration: 1000,
  easing: "easeInOutQuad"
});

boton.addEventListener("mouseenter", () => {
  anime({
    targets: ".BI",
    backgroundColor: "rgba(117, 255, 255, 0.4)",
    duration: 300
  });
});

boton.addEventListener("mouseleave", () => {
  anime({
    targets: ".BI",
    backgroundColor: "rgba(17, 17, 17,0)",
    duration: 300
  });
});

anime({
  targets: ".BD",
  delay: 24000,
  height: cell? [0,"9%"]:[0, 80],
  width: cell? [0,"18%"]:[0, 80],
  borderWidth: [0, "2px"],
  backgroundColor: "rgba(17, 17, 17,0)",
  duration: 1000,
  easing: "easeInOutQuad"
});

boton2.addEventListener("mouseenter", () => {
  anime({
    targets: ".BD",
    backgroundColor: "rgba(117, 255, 255, 0.4)",
    duration: 300
  });
});

boton2.addEventListener("mouseleave", () => {
  anime({
    targets: ".BD",
    backgroundColor: "rgba(17, 17, 17,0)",
    duration: 300
  });
});

anime({
  targets: ".BC",
  delay: 24000,
  height: cell? [0,"9%"]:[0, 80],
  width: cell? [0, "40%"]:[0,180],/*180*/
  opacity:[0,1],
  borderWidth: [0, "2px"],
  backgroundColor: "rgba(17, 17, 17,0)",
  duration: 1000,
  easing: "easeInOutQuad"
});

boton3.addEventListener("mouseenter", () => {
  anime({
    targets: ".BC",
    backgroundColor: "rgba(117, 255, 255, 0.4)",
    duration: 300
  });
});

boton3.addEventListener("mouseleave", () => {
  anime({
    targets: ".BC",
    backgroundColor: "rgba(17, 17, 17,0)",
    duration: 300
  });
});


// Recuadro iconos

anime({
  targets:".rico",
  delay:22000,
  duration:1000,
  height:cell? [0,"30%"]:[0, 300],
  width:cell? [0,"45%"]:[0, 430],
  opacity: [0,1],
  easing: "easeOutExpo" 

})

//A opciones

envolverLetras('.opc-text .letters');
envolverLetras2('.opct-text .letters');
envolverLetras('.op1-text .letters');
envolverLetras('.op3-text .letters');

anime({
  targets: ['.opc-text .letter', '.opct-text .letter', '.op1-text .letter', '.op2-text .letter', '.op3-text .letter'],
  rotateY: [-90, 0],
  duration: 100,
  delay: (el, i) => 20000 + 45 * i,
  easing: "easeOutExpo"
});

const timeline2 = anime.timeline({
  easing: 'easeOutExpo',
  duration: 1000,
  autoplay: true,
});


// lienas

timeline2.add({
  targets: '.linea4',
  width: cell? [0,"16%"]:[0, 105],
  duration: 200,
}, '+=22500');

timeline2.add({
  targets: '.linea6',
  width: cell? [0,"25%"]:[0, 157.5],
  duration: 600,
},'-=200');

anime({
  targets:".linea3",
  width: cell?[0,"80%"]:[0, 500],
  duration: 1000,
  delay: 22000,
  easing: "easeOutExpo"
})


// Funcionalidades con botones

let indexActual = 0;
let timelines = [];
let timelines2 =[];

const divs = [".ind1", ".ind3"];
const icons =[".txt",".bitacora"];

function crearAnimacion(selector) {
  return anime({
    targets: selector,
    opacity: [
      { value: 1, duration: 500 },
      { value: 0, duration: 500 }
    ],
    easing: "easeInOutSine",
    loop: true
  });
}

function aparecerIcono(selector) {
  return anime({
    targets: selector,
    opacity: [
      { value: 0, duration: 250 },
      { value: 1, duration: 250 }
    ],
    easing: "easeInOutSine",
    loop: false
  });
}

function cambiarAnimacion(nuevoIndex) {
  // Detiene animación anterior
  if (timelines[indexActual]) {
    timelines[indexActual].pause();
    document.querySelector(divs[indexActual]).style.opacity = 0;
  }

  if (timelines2[indexActual]) {
    timelines2[indexActual].pause();
    document.querySelector(icons[indexActual]).style.opacity = 0;
  }

  // Calcula nuevo índice con envoltura circular
  indexActual = (nuevoIndex + divs.length) % divs.length;

  // Inicia nueva animación
  timelines[indexActual] = crearAnimacion(divs[indexActual]);
  timelines2[indexActual] = aparecerIcono(icons[indexActual]);
}

// Iniciar automáticamente ind1 después de 24000ms
setTimeout(() => {
  timelines[0] = crearAnimacion(divs[0]);
  timelines2[0] = aparecerIcono(icons[0]);
}, 24500);

// Botón de avance
document.querySelector(".BD").addEventListener("click", () => {
  cambiarAnimacion(indexActual + 1);
});

// Botón de retroceso
document.querySelector(".BI").addEventListener("click", () => {
  cambiarAnimacion(indexActual - 1);
});

//Eleccion de las paginas
document.querySelector(".BC").addEventListener("click", () => {
  const rutas = ["carta.html", "bitacora.html" ,"pd.html"];
  const rutaSeleccionada = rutas[indexActual];

  // Abrimos la ventana con la ruta seleccionada
  window.open(rutaSeleccionada);
});





