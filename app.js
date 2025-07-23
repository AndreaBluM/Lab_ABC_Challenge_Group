const colores = ["yellow", "blue", "red"];

function aplicarColores() {
  const index = Math.floor(Math.random() * colores.length);
  return colores[index];
}

const letras = document.querySelectorAll(".letras");
letras.forEach(letra => {
  letra.addEventListener("click", () => {
    letra.style.color = aplicarColores();
  });
});

const frases = document.querySelectorAll(".frases");
frases.forEach(frase => {
  frase.addEventListener("click", () => {
    frase.style.color = aplicarColores();
  });
});