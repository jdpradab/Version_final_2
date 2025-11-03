function envolverLetrasPDs(selector) {
  document.querySelectorAll(selector).forEach(p => {
    p.innerHTML = p.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  });
}

const cell = window.matchMedia("(max-width: 600px)").matches;


// Envuelve letras
envolverLetrasPDs(".pd-text .letters");
envolverLetrasPDs(".pd-texto");

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
  height: [0, 350],
  width: cell ? [0,310]:[0, 1000],
  opacity: [0, 1],
  easing: "easeOutExpo"
});

// Botones visuales
[".I", ".D",".X"].forEach(selector => {
  const boton = document.querySelector(selector);
  anime({
    targets: selector,
    delay: 6500,
    height: [0, 80],
    width: [0, 80],
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
let actual = 0;

function ocultarTodos() {
  textos.forEach(p => {
    p.style.opacity = 0;
    p.querySelectorAll('.letter').forEach(l => l.style.opacity = 0);
  });
}

function mostrarPD(index) {
  ocultarTodos();

  const letras = textos[index].querySelectorAll(".letter");

  anime({
    targets: letras,
    opacity: [0, 1],
    delay: anime.stagger(30),
    easing: "easeOutExpo",
    begin: () => {
      textos[index].style.opacity = 1;
    }
  });
}

setTimeout(() => {
  mostrarPD(actual);
}, 4500);

// Control por botones (sin delay adicional)
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

