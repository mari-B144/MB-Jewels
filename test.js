const addFavBtn = document.getElementById("addFav");

const jewelry = {
  name: "Inel cu diamant",
  image: "ring38.jpg"
};

let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

addFavBtn.addEventListener("click", () => {
  const exists = favorites.some(item => item.name === jewelry.name);

  if (!exists) {
    favorites.push(jewelry);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    alert("Bijuterie adăugată la favorite!");
  }
});
