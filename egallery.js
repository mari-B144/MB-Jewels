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

        // ⭐ CLICK PE FAVORITE
        btn.addEventListener("click", (e) => {
          e.stopPropagation(); // ⭐ AICI folosim stopPropagation

          if (!favorites.some(f => f.name === item.name)) {
            favorites.push({
              name: item.name,
              image: item.image
            });

            localStorage.setItem("favorites", JSON.stringify(favorites));
            btn.textContent = "✓ Added";
          }
        });

        // (OPȚIONAL) click pe card
        div.addEventListener("click", () => {
          console.log("Clicked on item:", item.name);
          // window.location.href = "product.html";
        });

        columns[item.column].appendChild(div);
      });
    });
});

