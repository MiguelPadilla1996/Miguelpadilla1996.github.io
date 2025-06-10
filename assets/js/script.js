// ================== Datos de proyectos ==================
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

// ================== Estilos por página ==================
const estilosPorPagina = {
  tienda: "assets/css/tienda/tienda.css",
  acertar: "assets/css/acertar/acertar.css",
  ahorcado: "assets/css/ahorcado/ahorcado.css"
};

// ================== Submenú dinámico ==================
const submenuProyectos = [
  { nombre: "Página Estática", enlace: "pages/paginaestatica/paginaestatica.html" },
  { nombre: "Juego De Acertar", enlace: "pages/acertar/acertar.html" },
  { nombre: "Juego De Ahorcado", enlace: "pages/ahorcado/ahorcado.html" },
  { nombre: "Robot Arduino", enlace: "pages/robot.html" }
];

function construirSubmenuProyectos() {
  const submenuContainer = document.getElementById("submenu-proyectos");
  if (!submenuContainer) return;

  submenuContainer.innerHTML = "";

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
}

// ================== Cargar contenido dinámico ==================
// Ya no vuelvas a llamar a construirSubmenuProyectos dentro de cargarContenido
// porque el menú ya se construyó en el HTML principal
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

      if (main && main.classList.length > 0) {
        const clase = main.classList[0];
        cargarCSSDinamico(clase);
        cargarScriptDinamico(clase);
        console.log("📄 Clase del <main> detectada:", clase);
      }

      // 🔥 Aquí haz el render después de insertar el HTML dinámico
      if (contenido.querySelector("#proyectos-container")) {
        renderizarProyectos(); // Se ejecuta si el contenedor está presente
      }

      window.scrollTo({ top: 0, behavior: "smooth" });
    })
    .catch(err => console.error("Error al cargar el contenido:", err));
}



function cargarScriptDinamico(clase) {
  const scriptId = "script-dinamico";
  const anterior = document.getElementById(scriptId);
  if (anterior) anterior.remove();

  const scriptsPorPagina = {
    acertar: "assets/js/acertar.js",
    ahorcado: "assets/js/ahorcado.js"
  };

  const rutaScript = scriptsPorPagina[clase];
  if (!rutaScript) return;

  const script = document.createElement("script");
  script.id = scriptId;
  script.src = rutaScript;
  script.defer = true;
  document.body.appendChild(script);
}



// ================== Cargar CSS dinámico ==================
function cargarCSSDinamico(clase) {
  const cssId = "css-dinamico";
  const cssAnterior = document.getElementById(cssId);
  if (cssAnterior) cssAnterior.remove();

  const rutaCSS = estilosPorPagina[clase];
  if (!rutaCSS) return;

  const link = document.createElement("link");
  link.id = cssId;
  link.rel = "stylesheet";
  link.href = rutaCSS;
  document.head.appendChild(link);
}

// ================== Renderizar proyectos en la página de inicio ==================
function renderizarProyectos() {
  console.log("🛠 Renderizando proyectos...");
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

// ================== Modo claro/oscuro ==================
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

function toggleModo() {
  const esClaro = document.body.classList.toggle("modo-claro");
  localStorage.setItem("modo", esClaro ? "claro" : "oscuro");
  document.getElementById("modoToggle").textContent = esClaro ? "Modo Oscuro" : "Modo Claro";
  aplicarModoAContenidoDinamico();
}

function aplicarModoGuardado() {
  const modoGuardado = localStorage.getItem("modo");
  const esClaro = modoGuardado === "claro";
  document.body.classList.toggle("modo-claro", esClaro);
  document.getElementById("modoToggle").textContent = esClaro ? "Modo Oscuro" : "Modo Claro";
  aplicarModoAContenidoDinamico();
}

// ================== Evento principal ==================
document.addEventListener("DOMContentLoaded", () => {
  aplicarModoGuardado();
  construirSubmenuProyectos(); // <-- Aquí se crea el menú al cargar la app
  cargarContenido("pages/inicio.html");
});


document.getElementById("modoToggle").addEventListener("click", toggleModo);
