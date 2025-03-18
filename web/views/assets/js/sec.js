document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".gallery-item");
  
    items.forEach((item) => {
      item.addEventListener("click", () => {
        alert(`Seleccionaste la certificación: ${item.querySelector("h3").textContent}`);
      });
    });
  });
  