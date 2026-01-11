document.addEventListener("DOMContentLoaded", () => {

  const columns = document.querySelectorAll(".column");
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  fetch("jewelry.json")
    .then(res => res.json())
    .then(items => {
      items.forEach(item => {
        const div = document.createElement("div");
        div.className = "item";

        div.innerHTML = `
          <img src="${item.image}">
          <button class="fav-btn">♡ Favourite</button>
        `;

        const btn = div.querySelector(".fav-btn");

        // dacă este deja favorit
        if (favorites.some(f => f.name === item.name)) {
          btn.textContent = "✓ Added";
        }

        btn.addEventListener("click", () => {
          if (!favorites.some(f => f.name === item.name)) {
            favorites.push({ name: item.name, image: item.image });
            localStorage.setItem("favorites", JSON.stringify(favorites));
            btn.textContent = "✓ Added";
          }
        });

        columns[item.column].appendChild(div);
      });
    });
});
