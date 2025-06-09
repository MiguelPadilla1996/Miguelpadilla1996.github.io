document.addEventListener("DOMContentLoaded", () => {
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

  // Función para cargar contenido
  function cargarContenido(ruta) {
    fetch(ruta)
      .then(res => res.text())
      .then(html => {
        const temp = document.createElement("div");
        temp.innerHTML = html;
        const main = temp.querySelector("main");
        if (main) {
          document.getElementById("contenido").innerHTML = main.outerHTML;
        } else {
          document.getElementById("contenido").innerHTML = html;
        }

        aplicarModoAContenidoDinamico();
        window.scrollTo({ top: 0, behavior: "smooth" });
      })
      .catch(err => console.error("Error al cargar el contenido:", err));
  }

  // Carga inicial por defecto
  cargarContenido("pages/inicio.html");
});
