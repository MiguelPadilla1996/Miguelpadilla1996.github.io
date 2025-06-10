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
const estilosPorPagina = {
  tienda: "assets/css/tienda/tienda.css",
  otro: "assets/css/"
};


// Renderiza los proyectos si el contenedor existe
function renderizarProyectos() {
  const container = document.getElementById("proyectos-container");
  if (!container) return;

  container.innerHTML = "";
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
}
function cargarContenido(ruta) {
  fetch(ruta)
    .then(res => res.text())
    .then(html => {
      const temp = document.createElement("div");
      temp.innerHTML = html;

      const main = temp.querySelector("main");
      const contenido = document.getElementById("contenido");
      contenido.innerHTML = main ? main.outerHTML : html;

      aplicarModoAContenidoDinamico();

      // ✅ Si es la página de inicio, renderizar proyectos
      if (ruta.includes("inicio.html")) {
        renderizarProyectos();
      }

      // ✅ Cargar el CSS según la clase del <main>
      if (main && main.classList.length > 0) {
        const clase = main.classList[0]; // ejemplo: "paginaestatica"
        cargarCSSDinamico(clase, ruta);
      }

      window.scrollTo({ top: 0, behavior: "smooth" });
    })
    .catch(err => console.error("Error al cargar el contenido:", err));
}


function cargarCSSDinamico(clase) {
  const cssId = "css-dinamico";
  const cssAnterior = document.getElementById(cssId);
  if (cssAnterior) cssAnterior.remove();

  const rutaCSS = estilosPorPagina[clase];
  if (!rutaCSS) return; // No hay estilo definido para esa clase

  const link = document.createElement("link");
  link.id = cssId;
  link.rel = "stylesheet";
  link.href = rutaCSS;
  document.head.appendChild(link);
}



// Aplica modo claro/oscuro al contenido cargado
function aplicarModoAContenidoDinamico() {
  const contenido = document.getElementById("contenido");
  if (contenido) {
    if (document.body.classList.contains("modo-claro")) {
      contenido.classList.add("modo-claro");
    } else {
      contenido.classList.remove("modo-claro");
    }
  }
}

// Mensaje de contacto
function enviarMensaje() {
  const nombre = document.getElementById("nombre").value;
  alert(`Gracias por tu mensaje, ${nombre}!`);
}

// Modo claro/oscuro
const toggleBtn = document.getElementById("modoToggle");
const body = document.body;

function toggleModo() {
  const esClaro = body.classList.toggle("modo-claro");
  localStorage.setItem("modo", esClaro ? "claro" : "oscuro");
  toggleBtn.textContent = esClaro ? "Modo Oscuro" : "Modo Claro";
  aplicarModoAContenidoDinamico();
}

function aplicarModoGuardado() {
  const modoGuardado = localStorage.getItem("modo");
  const esClaro = modoGuardado === "claro";
  body.classList.toggle("modo-claro", esClaro);
  toggleBtn.textContent = esClaro ? "Modo Oscuro" : "Modo Claro";
  aplicarModoAContenidoDinamico();
}

// Evento DOM cargado
document.addEventListener("DOMContentLoaded", () => {
  aplicarModoGuardado();

  // Construye el submenú dinámico
  const submenuProyectos = [
    { nombre: "Página Estática", enlace: "pages/paginaestatica/paginaestatica.html" },
    { nombre: "API JWT", enlace: "pages/api.html" },
    { nombre: "Compilador", enlace: "pages/compilador.html" },
    { nombre: "Robot Arduino", enlace: "pages/robot.html" }
  ];

  const submenuContainer = document.getElementById("submenu-proyectos");

  submenuProyectos.forEach(p => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.className = "dropdown-item";
    a.href = "#";
    a.textContent = p.nombre;

    a.addEventListener("click", (e) => {
      e.preventDefault();
      cargarContenido(p.enlace);
    });

    li.appendChild(a);
    submenuContainer.appendChild(li);
  });

  // Carga por defecto el inicio
  cargarContenido("pages/inicio.html");
});

toggleBtn.addEventListener("click", toggleModo);
