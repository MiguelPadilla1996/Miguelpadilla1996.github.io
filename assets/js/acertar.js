(function () {
  const canvas = document.querySelector("canvas");
  if (!canvas) {
    console.warn("🎯 Canvas no encontrado en el DOM.");
    return;
  }

  const ctx = canvas.getContext("2d");
  const ANCHO = canvas.width || 600;
  const ALTO = canvas.height || 400;
  const RADIO = 10;
  let xAleatorio = 0, yAleatorio = 0;

  function dibujarCircunferencia(x, y, radio, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, radio, 0, Math.PI * 2);
    ctx.fill();
  }

  function limpiarPantalla() {
    ctx.clearRect(0, 0, ANCHO, ALTO);
  }

  function sortearPosicion(maximo) {
    return Math.floor(Math.random() * maximo);
  }

  function dibujarObjetivo(x, y) {
    dibujarCircunferencia(x, y, RADIO + 20, "red");
    dibujarCircunferencia(x, y, RADIO + 10, "white");
    dibujarCircunferencia(x, y, RADIO, "red");
  }

  function actualizarPantalla() {
    limpiarPantalla();
    xAleatorio = sortearPosicion(ANCHO);
    yAleatorio = sortearPosicion(ALTO);
    dibujarObjetivo(xAleatorio, yAleatorio);
  }

  function disparar(evento) {
    const rect = canvas.getBoundingClientRect();
    const x = evento.clientX - rect.left;
    const y = evento.clientY - rect.top;

    const acierto =
      x > xAleatorio - RADIO && x < xAleatorio + RADIO &&
      y > yAleatorio - RADIO && y < yAleatorio + RADIO;

    alert(acierto ? "🎯 ¡Tiro certero!" : "💥 Fallaste");
  }

  // Inicializar
  ctx.fillStyle = "lightgrey";
  ctx.fillRect(0, 0, ANCHO, ALTO);
  canvas.addEventListener("click", disparar);
  setInterval(actualizarPantalla, 2000);

  console.log("✅ acertar.js ejecutado correctamente");
})();
