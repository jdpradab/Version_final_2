function envolverLetrasPDs(selector) {
  document.querySelectorAll(selector).forEach(p => {
    p.innerHTML = p.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  });
}

const cell = window.matchMedia("(max-width: 600px)").matches;

// Envuelve letras
envolverLetrasPDs(".pd-text .letters");
envolverLetrasPDs(".pd-texto");
envolverLetrasPDs(".fd-texto");

// Animar título principal
anime({
  targets: '.pd-text .letter',
  opacity: [0, 1],
  delay: (el, i) => 1500 + 45 * i,
  easing: "easeOutExpo",
});

// Recuadro
anime({
  targets: ".rc",
  delay: 4000,
  duration: 1000,
  height: cell ? [0,"50%"]:[0, 350],
  width: cell ? [0,"95%"]:[0, 1300],
  opacity: [0, 1],
  easing: "easeOutExpo"
});

// Botones visuales
[".I", ".D",".X"].forEach(selector => {
  const boton = document.querySelector(selector);
  anime({
    targets: selector,
    delay: 6500,
  height: cell? [0,"13%"]:[0, 80],
  width: cell ? [0,"25%"]:[0, 80],
    borderWidth: [0, "2px"],
    borderColor: "rgb(139, 249, 249)",
    backgroundColor: "rgba(17, 17, 17,0)",
    duration: 1000,
    easing: "easeInOutQuad"
  });

  boton.addEventListener("mouseenter", () => {
    anime({ targets: selector, backgroundColor: "rgba(117, 255, 255, 0.4)", duration: 300 });
  });

  boton.addEventListener("mouseleave", () => {
    anime({ targets: selector, backgroundColor: "rgba(17, 17, 17,0)", duration: 300 });
  });

  boton.addEventListener("click", () => {
    anime({
      targets: selector,
      backgroundColor: "rgba(117, 255, 255, 0.15)",
      duration: 300,
      complete: () => {
        anime({ targets: selector, backgroundColor: "rgba(117, 255, 255, 0.4)", duration: 100 });
      }
    });
  });
});


// ==========================
// Animación de PDs con botones
// ==========================
const textos = document.querySelectorAll(".pd-texto");
const fechas = document.querySelectorAll(".fd-texto");

let actual = 0;

function ocultarTodos() {
  textos.forEach(p => {
    p.style.opacity = 0;
    p.querySelectorAll('.letter').forEach(l => l.style.opacity = 0);
  });
  fechas.forEach(p => {
    p.style.opacity = 0;
    p.querySelectorAll('.letter').forEach(l => l.style.opacity = 0);
  });
}

function mostrarPD(index) {
  ocultarTodos();

  const letras = textos[index].querySelectorAll(".letter");
  const numeros = fechas[index].querySelectorAll(".letter");

  const tl = anime.timeline({
    easing: "easeOutExpo",
  });

  tl.add({
    targets: letras,
    opacity: [0, 1],
    delay: anime.stagger(30),
    begin: () => {
      textos[index].style.opacity = 1;
    }
  })
  
  .add({
    targets: numeros,
    opacity: [0, 1],
    delay: anime.stagger(30),
    easing: "easeOutExpo",
    begin: () => {
      fechas[index].style.opacity = 1;
    }
  }, "-=900");
}

setTimeout(() => {
  mostrarPD(actual);
}, 4500);

// Control por botones
document.querySelector(".D").addEventListener("click", () => {
  actual = (actual + 1) % textos.length;
  mostrarPD(actual);
});

document.querySelector(".I").addEventListener("click", () => {
  actual = (actual - 1 + textos.length) % textos.length;
  mostrarPD(actual);
});

document.querySelector(".X").addEventListener("click", () => {
  window.close();
});

