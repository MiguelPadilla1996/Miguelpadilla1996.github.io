
  document.getElementById('cartBtn').addEventListener('click', function(event) {
    event.stopPropagation();
  });

  // Inicializar el carrusel con intervalo de 5 segundos
  const myCarousel = document.querySelector('#carousel');
  const carousel = new bootstrap.Carousel(myCarousel, {
    interval: 3000,
    ride: 'carousel'
  });
