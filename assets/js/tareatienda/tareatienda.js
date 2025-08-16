

  document.getElementById('cartBtn').addEventListener('click', function(event) {
    event.stopPropagation();
  });

  // Inicializar el carrusel con intervalo de 3 segundos
  const myCarousel = document.querySelector('#carousel');
  const carousel = new bootstrap.Carousel(myCarousel, {
    interval: 3000,
    ride: 'carousel'
  });

  // Función para cargar productos desde la API
  async function cargarProductos() {
    try {
      const response = await fetch('https://backcvbgtmdesa.azurewebsites.net/api/productos');
      const productos = await response.json();

      const container = document.getElementById('productContainer');
      container.innerHTML = ''; // Limpiar el contenedor

      productos.forEach(producto => {
        const card = document.createElement('div');
        card.className = 'col-12 col-md-4 product-card mb-4';

        const precioHTML = producto.EnOferta
          ? `<p class="card-text">
               <span class="text-danger fw-bold me-2">$${producto.PrecioOferta.toFixed(2)}</span>
               <span class="text-decoration-line-through text-muted">$${producto.Precio.toFixed(2)}</span>
             </p>`
          : `<p class="card-text fw-bold">$${producto.Precio.toFixed(2)}</p>`;

        card.innerHTML = `
          <div class="card h-100">
            <img src="${producto.Imagen}" class="card-img-top" alt="${producto.Nombre}">
            <div class="card-body d-flex flex-column">
              <h6 class="card-title">${producto.Nombre}</h6>
              <p class="card-text">${producto.Descripcion}</p>
              ${precioHTML}
              <p class="card-text"><span class="badge bg-secondary">${producto.CategoriaNombre}</span></p>
              <button class="btn btn-primary mt-auto">Agregar al carrito</button>
            </div>
          </div>
        `;

        container.appendChild(card);
      });

    } catch (error) {
      console.error('Error al cargar los productos:', error);
    }
  }

  async function cargarCategorias() {
    try {
      const response = await fetch('https://backcvbgtmdesa.azurewebsites.net/api/categorias');
      const categorias = await response.json();

      const categoriasList = document.getElementById('categorias');
      categoriasList.innerHTML = ''; // Limpiar la lista

      categorias.forEach(categoria => {
        const li = document.createElement('li');
        li.className = 'bi bi-bag nav-item';
        li.innerHTML = `<a href="http://127.0.0.1:5501/index.html?categoria=${categoria.id_categoria}" class="text-decoration-none"> ${categoria.descripcion}</a>`;
        categoriasList.appendChild(li);
      });

    } catch (error) {
      console.error('Error al cargar las categorías:', error);
    }
  }

async function cargarBanner(){
  try {
    const response = await fetch('https://backcvbgtmdesa.azurewebsites.net/api/productos');
    const productos = await response.json();
    console.log(productos);

    const bannerContainer = document.getElementById('carousel');
    bannerContainer.innerHTML = ''; // Limpiar el contenedor

    const img = document.createElement('img');
    productos.forEach(producto => {
      img.src = producto.Imagen;
      img.alt = producto.Descripcion;
    });

    img.className = 'img-fluid';
    bannerContainer.appendChild(img);

  } catch (error) {
    console.error('Error al cargar el banner:', error);
  }
}

  // Ejecutar al cargar la página
 cargarProductos();

 cargarCategorias();

 cargarBanner();