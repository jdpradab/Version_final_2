function envolverLetras(selector) {
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

const cell = window.matchMedia("(max-width: 600px)").matches;

// Botones
const boton = document.querySelector(".I");
const boton2 = document.querySelector(".D");
const boton3 = document.querySelector(".exis");

anime({
  targets: ".I",
  delay: 6500,
  height: cell? [0,"13%"]:[0, 80],
  width: cell ? [0,"25%"]:[0, 80],
  borderWidth: [0, "2px"],
  backgroundColor: "rgba(17, 17, 17,0)",
  duration: 1000,
  easing: "easeInOutQuad"
});

anime({
  targets: ".exis",
  delay: 6500,
  height: cell? [0,"13%"]:[0, 80],
  width: cell ? [0,"25%"]:[0, 80],
  borderWidth: [0, "2px"],
  backgroundColor: "rgba(17, 17, 17,0)",
  duration: 1000,
  easing: "easeInOutQuad"
});

anime({
  targets: ".D",
  delay: 6500,
  height: cell? [0,"13%"]:[0, 80],
  width: cell ? [0,"25%"]:[0, 80],
  borderWidth: [0, "2px"],
  backgroundColor: "rgba(17, 17, 17,0)",
  duration: 1000,
  easing: "easeInOutQuad"
});

boton.addEventListener("mouseenter", () => {
  anime({
    targets: ".I",
    backgroundColor: "rgba(117, 255, 255, 0.4)",
    duration: 300
  });
});

boton.addEventListener("mouseleave", () => {
  anime({
    targets: ".I",
    backgroundColor: "rgba(17, 17, 17,0)",
    duration: 300
  });
});

boton.addEventListener("click", () => {
  anime({
    targets: ".I",
    backgroundColor: "rgba(117, 255, 255, 0.15)",
    duration: 300,
    complete: () => {
      anime({
        targets: ".I",
    backgroundColor: "rgba(117, 255, 255, 0.4)",
        duration: 100
      });
    }
  });
});

boton2.addEventListener("mouseenter", () => {
  anime({
    targets: ".D",
    backgroundColor: "rgba(117, 255, 255, 0.4)",
    duration: 300
  });
});

boton2.addEventListener("mouseleave", () => {
  anime({
    targets: ".D",
    backgroundColor: "rgba(17, 17, 17,0)",
    duration: 300
  });
});

boton2.addEventListener("click", () => {
  anime({
    targets: ".D",
    backgroundColor: "rgba(117, 255, 255, 0.15)",
    duration: 300,
    complete: () => {
      anime({
        targets: ".D",
    backgroundColor: "rgba(117, 255, 255, 0.4)",
        duration: 100
      });
    }
  });
});

boton3.addEventListener("mouseenter", () => {
  anime({
    targets: ".exis",
    backgroundColor: "rgba(117, 255, 255, 0.4)",
    duration: 300
  });
});

boton3.addEventListener("mouseleave", () => {
  anime({
    targets: ".exis",
    backgroundColor: "rgba(17, 17, 17,0)",
    duration: 300
  });
});

boton3.addEventListener("click", () => {
  anime({
    targets: ".exis",
    backgroundColor: "rgba(117, 255, 255, 0.15)",
    duration: 300,
    complete: () => {
      anime({
        targets: ".D",
    backgroundColor: "rgba(117, 255, 255, 0.4)",
        duration: 100
      });
    }
  });
});




//A recuadro
anime({
  targets:".rc",
  delay: 6000,
  duration:1000,
  height:cell? [0,"58.5%"]:[0, "50%"],
  width:cell? [0,"96%"]:[0, 1300],
  opacity: [0,1],
  easing: "easeOutExpo" 

})

// Envolver letras de todos los párrafos
envolverLetras('.p1-text');
envolverLetras('.p2-text');
envolverLetras('.p3-text');
envolverLetras('.p4-text');
envolverLetras('.p5-text');
envolverLetras('.p6-text');
envolverLetras('.p7-text');

// Animación del título
anime({
  targets: ".tit",
  opacity: [0, 1],
  delay: 5000,
  duration: 1000,
  easing: "easeOutExpo"
});

// Animación del fondo
const body = document.body;

const timeline = anime.timeline({
  easing: 'easeOutQuad',
  duration: 1000,
  loop: false
});

timeline
  .add({
    targets: body,
    delay: 1000,
    duration: 2000,
    easing: "linear",
    begin: () => {
      body.style.backgroundImage = "none";
    },
    complete: () => {
      body.style.backgroundImage = "url('/componentes/a.png')";
    }
  })
  .add({
    targets: body,
    delay: 300,
    duration: 500,
    easing: "easeOutExpo",
    begin: () => {
      body.style.backgroundImage = "none";
    },
    complete: () => {
      body.style.backgroundImage = "url('/componentes/a.png')";
    }
  })
  .add({
    targets: body,
    delay: 10,
    duration: 200,
    easing: "easeOutExpo",
    begin: () => {
      body.style.backgroundImage = "none";
    },
    complete: () => {
      body.style.backgroundImage = "url('/componentes/a.png')";
    }
  })
  .add({
    targets: body,
    delay: 10,
    duration: 0,
    easing: "linear",
    begin: () => {
      body.style.backgroundImage = "none";
    },
    complete: () => {
      body.style.backgroundImage = "url('/componentes/a.png')";
    }
  });

// funcionalidad botones 

document.querySelector(".D").addEventListener("click", () => {
  cambiarAnimacion(indexActual + 1);
});

document.querySelector(".I").addEventListener("click", () => {
  cambiarAnimacion(indexActual - 1);
});

document.querySelector(".exis").addEventListener("click", () => {
  window.close();
});

// Oculta todos los párrafos al inicio

anime({
  targets: [
    '.p1-text .letter','.p2-text .letter','.p3-text .letter',
    '.p4-text .letter','.p5-text .letter','.p6-text .letter','.p7-text .letter'
  ],
  opacity: [1, 0],
  duration: 0,
  easing: "linear",
});

let indexActual = 0;
let timelines2 = [];
let animacionParrafosActual = null;

const divs = [".pg1", ".pg2", ".pg3"];

function ocultarTodosLosParrafos() {
  anime({
    targets: [
      '.p1-text .letter','.p2-text .letter','.p3-text .letter',
      '.p4-text .letter','.p5-text .letter','.p6-text .letter','.p7-text .letter'
    ],
    opacity: 0,
    duration: 0,
    easing: "linear",
  });
}

function aparecerParrafos(selectores) {
  if (animacionParrafosActual) {
    animacionParrafosActual.pause();
  }

  animacionParrafosActual = anime({
    targets: selectores,
    opacity: [0, 1],
    delay: (el, i) => 100 * i,
    easing: "linear",
    duration: 800,
  });

  return animacionParrafosActual;
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
  if (timelines2[indexActual]) {
    timelines2[indexActual].pause();
    document.querySelector(divs[indexActual]).style.opacity = 0;
  }

  if (animacionParrafosActual) {
    animacionParrafosActual.pause();
  }

  ocultarTodosLosParrafos();

  indexActual = (nuevoIndex + divs.length) % divs.length;

  timelines2[indexActual] = aparecerIcono(divs[indexActual]);

  if (indexActual === 0) {
    aparecerParrafos(['.p1-text .letter', '.p2-text .letter']);
  } else if (indexActual === 1) {
    aparecerParrafos(['.p3-text .letter', '.p4-text .letter']);
  } else if (indexActual === 2) {
    aparecerParrafos(['.p5-text .letter', '.p6-text .letter', '.p7-text .letter']);
  }
}

// Mostrar el primer párrafo automáticamente
setTimeout(() => {
  timelines2[0] = aparecerIcono(divs[0]);
  aparecerParrafos(['.p1-text .letter', '.p2-text .letter']);
}, 7000);
