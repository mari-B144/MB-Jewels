const container = document.getElementById("favoritesContainer");
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

render();

function render() {
  container.innerHTML = "";

  favorites.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "favorite-card";

    card.innerHTML = `
      <img src="${item.image}">
      
      <button class="remove-btn">Remove</button>
    `;

    card.querySelector(".remove-btn").onclick = () => {
      favorites.splice(index, 1);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      render();
    };

    container.appendChild(card);
  });
}
