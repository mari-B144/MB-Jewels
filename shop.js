

const slider = document.getElementById('price-slider');

noUiSlider.create(slider, {
  start: [5000, 1500000],
  connect: true,
  step: 1000,
  range: {
    'min': 5000,
    'max': 1500000
  },
  format: {
    to: value => Math.round(value),
    from: value => Number(value)
  }
});

let bijuterii = [
  { nume: "", pret: 5200, imagine: "ring1.jpg" },
  { nume: "", pret: 20000, imagine: "ring2.jpg" },
  { nume: "", pret: 15800, imagine: "ring7.jpg" },
  { nume: "", pret: 21000, imagine: "ring6.jpg" },
  { nume: "", pret: 9700, imagine: "ring16.jpg" },
  { nume: "", pret: 10000, imagine: "ring18.jpg" },
  { nume: "", pret: 5500, imagine: "ring17.jpg" },
  { nume: "", pret: 15000, imagine: "ring21.jpg" },
  { nume: "", pret: 200000, imagine: "ring22.jpg" },
  { nume: "", pret: 12000, imagine: "ring29.jpg" },
  { nume: "", pret: 78500, imagine: "ring31.jpg" },
  { nume: "", pret: 1200000, imagine: "ring40.jpg" },
  { nume: "", pret: 940000, imagine: "ring34.jpg" },
  { nume: "", pret: 300000, imagine: "ring43.jpg" },
  { nume: "", pret: 44700, imagine: "ring38.jpg" },
  { nume: "", pret: 17000, imagine: "ring39.jpg" },
  { nume: "", pret: 1000000, imagine: "ring41.jpg" },
  { nume: "", pret: 7200, imagine: "ring37.jpg" },
  { nume: "", pret: 10000, imagine: "ring50.jpg" },
  { nume: "", pret: 1500000, imagine: "ring30.jpg" },
];

fetch("bijuterii.json")
  .then(r => r.json())
  .then(data => {
    bijuterii = data;
    afiseazaBijuterii(bijuterii);
  });


function afiseazaBijuterii(lista) {
  const container = document.getElementById("produse");
  container.innerHTML = "";

  lista.forEach(b => {
    const div = document.createElement("div");
    div.classList.add("card");

    div.innerHTML = `
      <img src="${b.imagine}" alt="${b.nume}">
      <h4>${b.nume}</h4>
      <p>${b.pret.toLocaleString('ro-RO')} €</p>
    `;

    container.appendChild(div);
  });
  
}



slider.noUiSlider.on('update', function (values) {
  const min = Number(values[0]);
  const max = Number(values[1]);

  document.getElementById('min-val').innerText =
    min.toLocaleString('ro-RO') + " €";

  document.getElementById('max-val').innerText =
    max.toLocaleString('ro-RO') + " €";

  const rezultate = bijuterii.filter(b =>
    b.pret >= min && b.pret <= max
  );

  
  afiseazaBijuterii(rezultate);
});

const text = "MB Jewelry";
const element = document.getElementById("logo-text");

let index = 0;
let isDeleting = false;

function animateText() {
  if (!isDeleting) {
    // Scriere
    element.textContent = text.substring(0, index + 1);
    index++;

    if (index === text.length) {
      setTimeout(() => isDeleting = true, 1500);
    }
  } else {
    // Ștergere
    element.textContent = text.substring(0, index - 1);
    index--;

    if (index === 0) {
      isDeleting = false;
    }
  }

  const speed = isDeleting ? 80 : 120;
  setTimeout(animateText, speed);
}

animateText();
