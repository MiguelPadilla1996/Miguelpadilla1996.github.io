document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("header").innerHTML = `
        <header class="cabezera">
        <nav class="navegacion">
            <ul class="menu">
                <li><a href="/index.html">Inicio</a></li>
                <li><a href="/sobremi.html">Sobre Mi</a></li>
                <li><a href="/web/views/pages/contacto/contacto.html">Contacto</a></li>
                <li><a href="#">Proyectos</a>
                    <ul class="submenu">
                        <li><a href="/web/views/pages/encriptador/encriptador.html" >Encriptador de Mensajes</a></li>
                        <li><a href="/web/views/pages/ahorcado/ahorcado.html" target="_blank">Juego del Ahorcado</a></li>
                        <li><a href="/tienda.html" target="_blank">Tienda Online</a></li>
                        <li><a href="/web/views/pages/carrito/carrito.html">Carrito De Compras</a></li>
                    </ul>
                </li>
                <li><a href="#">Juegos</a>
                <ul class="submenu">
                    <li><a href="/web/views/pages/acertar/acertar.html" >Tiro al Blanco</a></li>
                    <li><a href="#"></a></li>
                </ul></li>
                <li><a href="/web/views/pages/certificaciones/certificaciones.html">Mis Certificaciones</a></li>
                <li><a href="/paginaestatica.html">Mi Pagina Estatica</a></li>
            </ul>
        </nav>
    </header>
    `;
});
