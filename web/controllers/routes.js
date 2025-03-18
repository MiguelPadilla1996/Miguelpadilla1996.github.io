const contenido = document.getElementById("contenido");

// Función para cargar contenido dinámico
async function cargarPagina(ruta) {
    try {
        const respuesta = await fetch(`/web/views/pages/${ruta}.html`);
        if (!respuesta.ok) throw new Error("Página no encontrada");
        const html = await respuesta.text();
        contenido.innerHTML = html;
    } catch (error) {
        contenido.innerHTML = "<h2>Error 404: Página no encontrada</h2>";
    }
}

// Función para manejar los clicks en el menú
document.querySelectorAll(".menu a").forEach((enlace) => {
    enlace.addEventListener("click", (e) => {
        e.preventDefault();
        const ruta = enlace.getAttribute("href").replace(".html", "").replace("/", "");
        cargarPagina(ruta);
        history.pushState({ ruta }, "", `#${ruta}`);
    });
});

// Manejar la navegación con botones de retroceso/adelante
window.addEventListener("popstate", (e) => {
    if (e.state && e.state.ruta) {
        cargarPagina(e.state.ruta);
    }
});

// Cargar la página inicial basada en la URL
const paginaInicial = location.hash.replace("#", "") || "index";
cargarPagina(paginaInicial);
