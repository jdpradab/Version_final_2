console.log("JS cargado");

const cell = window.matchMedia("(max-width: 600px)").matches;


// Subrayado animado
anime({
  targets: ".line",
  width: ["0%", "100%"],
  easing: "easeInOutQuad",
  duration: 1000,
  delay: 150,
  complete: function () {
    anime({
      targets: ".line",
      width: "0%",
      easing: "easeInOutQuad",
      duration: 10,
      delay: 1500
    });
  }
});



// A recuadros
[".recuadro1", ".recuadro2"].forEach((selector, i) => {
  anime({
    targets: selector,
    height:cell ? [0,"7%"]:[0,"40px"],
    borderWidth: [0, "2px"],
    easing: "easeOutExpo",
    duration: 800,
    delay: 1000 + i * 100
  });
});



// A textos
function envolverLetras(selector) {
  const el = document.querySelector(selector);
  if (el) {
    el.innerHTML = el.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  }
}

envolverLetras('.ingresar-text .letters');
envolverLetras('.usuario-text .letters');
envolverLetras('.contraseña-text .letters');

anime({
  targets: ['.usuario-text .letter', '.contraseña-text .letter'],
  rotateY: [-90, 0],
  duration: 1700,
  delay: (el, i) => 1000 + 45 * i,
  easing: "easeOutExpo"
});

anime({
  targets: '.ingresar-text  .letter',
  rotateY: [-90, 0],
  duration: 1700,
  delay: (el, i) => 7500 + 45 * i,
  easing: "easeOutExpo"
})

//A lineaI

anime({
  targets: '.linea',
  width: cell ? [0,"1%"]:[0, '3px'],
  delay: 5100,
  translateY: '-50%',
  duration: 100,
  complete: function(){
    anime({
      targets: '.linea',
      translateX:cell ? "4100%" : 137, /*137*/
      duration: 1000,
      easing: "linear",
      complete: function(){
        anime({
          targets: '.linea',
          opacity: 0,
          duration: 100,
          easing: 'easeOutExpo',
          delay: 100
        });
      }
   });
  }
})

anime({
  targets: '.linea2',
  width:cell ? [0,"1%"]:[0, '3px'],
  delay: 6200,
  translateY: '-50%',
  duration: 100,
  complete: function(){
    anime({
      targets: '.linea2',
      translateX:cell ? "5200%" : 167,
      duration: 900,
      easing: "linear",
      complete: function(){
        anime({
          targets: '.linea2',
          opacity: 0,
          duration: 100,
          easing: 'easeOutExpo',
          delay: 100
        });
      }
   });
  }
})

//A contraseña y usuario 

envolverLetras('.usr-text');
envolverLetras('.crn-text');

const letras = document.querySelectorAll('.usr-text .letter');
const duracionPorLetra = 1025 / letras.length;

anime({
  targets: letras,
  opacity: [0, 1],
  duration: duracionPorLetra,
  delay: (el, i) => 5300 + i * duracionPorLetra,
  easing: "easeOutExpo"
});

const l = document.querySelectorAll('.crn-text .letter');
const dpl = 1025 / l.length;

anime({
  targets: l,
  opacity: [0, 1],
  duration: duracionPorLetra,
  delay: (el, i) => 6325 + i * duracionPorLetra,
  easing: "easeOutExpo"
});

//A boton ()
anime({
  targets: ".boton",
  delay: 7000,
  height: [0,"50px"],
  borderWidth: [0, "2px"],
  backgroundColor: ["rgba(177, 255, 255,0)", "rgba(17, 17, 17,1)"],
  duration: 2000,
});

const boton = document.querySelector(".boton");

boton.addEventListener("mouseenter", () => {
  anime({
    targets: ".boton",
    backgroundColor: "rgba(17, 17, 17, 0.9)",
    duration: 300
  });
});

boton.addEventListener("mouseleave", () => {
  anime({
    targets: ".boton",
    backgroundColor: "rgb(17, 17, 17)",
    duration: 300
  });
});


// Logo animado con glitch y error
anime({
  targets: ".logo",
  color: "rgb(177, 255, 255)",
  duration: 800,
  delay: 1000,
  easing: "linear",
  complete: function () {
    const logo = document.querySelector(".logo");
    anime({
      targets: ".logo",
      backgroundColor: "rgb(177, 255, 255)",
      duration: 10,
      delay: 1700,
      easing: "linear",
      complete: function () {
        logo.style.textDecoration = "none";
        anime({
          targets: ".logo",
          backgroundColor: "rgba(17, 17, 17,0)",
          duration: 10,
          delay: 100,
          easing: "linear",
          complete: function () {
            logo.style.border = "2px solid white";

            // Mostrar error
            const errorMsg = document.querySelector(".glitch-error1");
            const errorMsg2 = document.querySelector(".glitch-error2");
            errorMsg.style.display = "block";
            errorMsg2.style.display = "block";

            // Glitch efecto
            const errorGlitch = anime({
              targets: [".glitch-error1", ".glitch-error2"],
              keyframes: [
                { translateX: -3, translateY: 2, color: "#ff0000", duration: 40 },
                { translateX: 2, translateY: -2, color: "#ff4444", duration: 40 },
                { translateX: -1, translateY: 1, color: "#ff0000", duration: 40 },
                { translateX: 0, translateY: 0, duration: 40 }
              ],
              easing: "easeInOutSine",
              loop: true,
              direction: "alternate"
            });

            const glitch = anime.timeline({
              loop: true,
              direction: "alternate",
              easing: "easeInOutSine",
              duration: 300
            });

            glitch.add({
              targets: ".logo h1",
              keyframes: [
                { translateX: -4, translateY: -2, duration: 30 },
                { translateX: 5, translateY: 2, duration: 30 },
                { translateX: -6, translateY: -3, duration: 30 },
                { translateX: 4, translateY: 3, duration: 30 },
                { translateX: 0, translateY: 0, duration: 30 },
                { opacity: 0.8, duration: 20 },
                { opacity: 1, duration: 20 }
              ]
            }).add({
              targets: ".logo",
              keyframes: [
                { borderColor: "#ff0044", duration: 40 },
                { borderColor: "#00ffff", duration: 40 },
                { borderColor: "#ffffff", duration: 40 }
              ]
            });

            setTimeout(() => {
              glitch.pause();
              errorGlitch.pause();
              anime.set(".logo h1", { translateX: 0, translateY: 0, opacity: 1 });
              anime.set(".logo", { borderColor: "#ffffff" });
              anime.set([".glitch-error1", ".glitch-error2"], {
                translateX: 0, translateY: 0
              });
              errorMsg.style.display = "none";
              errorMsg2.style.display = "none";
              anime({
              targets: ".logo",
              borderWidth: [2, 0],  // de 2px a 0px
              duration: 500,
              easing: "easeOutExpo"
                   });
            }, 500);
          }
        });
      }
    });
  }
});
