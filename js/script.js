// Datos de proyectos
const proyectos = [
  {
    titulo: "Sistema de Inventario",
    descripcion: "Aplicación PHP + MariaDB para tiendas de Guatemala con reportes en C# y Bootstrap.",
    enlace: "https://github.com/Hero9696/tiendaphpmvc"
  },
  {
    titulo: "API JWT con PHP",
    descripcion: "API REST con autenticación segura usando JWT, probada en Postman y conectada a Frontend.",
    enlace: "https://github.com/Hero9696/api"
  },
  {
    titulo: "Compilador C ↔ Java",
    descripcion: "Conversor de código con ANTLR 4.7.2 y gramáticas personalizadas. Incluye Visitor y prueba real.",
    enlace: "#"
  },
  {
    titulo: "Robot Arduino con sensores",
    descripcion: "Proyecto completo de detección, movimiento y comunicación entre placas Arduino mediante I²C.",
    enlace: "#"
  }
];

const container = document.getElementById("proyectos-container");
proyectos.forEach(p => {
  const col = document.createElement("div");
  col.className = "col-md-6 mb-4";
  col.innerHTML = `
    <div class="card h-100 project-card">
      <div class="card-body">
        <h5 class="card-title">${p.titulo}</h5>
        <p class="card-text">${p.descripcion}</p>
        <a href="${p.enlace}" class="btn btn-outline-info" target="_blank">Ver más</a>
      </div>
    </div>`;
  container.appendChild(col);
});

// Mensaje de contacto
function enviarMensaje() {
  const nombre = document.getElementById("nombre").value;
  alert(`Gracias por tu mensaje, ${nombre}!`);
}

// Modo claro/oscuro
const toggleBtn = document.getElementById("modoToggle");
const body = document.body;

// Cambia el modo visual y guarda en localStorage
function toggleModo() {
  const esClaro = body.classList.toggle("modo-claro");
  localStorage.setItem("modo", esClaro ? "claro" : "oscuro");
  toggleBtn.textContent = esClaro ? "Modo Oscuro" : "Modo Claro";
}

// Aplica el modo guardado
function aplicarModoGuardado() {
  const modoGuardado = localStorage.getItem("modo");
  const esClaro = modoGuardado === "claro";
  body.classList.toggle("modo-claro", esClaro);
  toggleBtn.textContent = esClaro ? "Modo Oscuro" : "Modo Claro";
}

// Eventos
toggleBtn.addEventListener("click", toggleModo);
document.addEventListener("DOMContentLoaded", aplicarModoGuardado);
