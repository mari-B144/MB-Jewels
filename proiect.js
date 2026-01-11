const jewelry = document.getElementById("jewelry");
const image = document.getElementById("jewelImg");
const type = document.getElementById("type");

/* Listele de imagini */
const erings = [
  "ring34.jpg",
  "ring38.jpg",
  "ring13.jpg",
  "ring17.jpg",
  "ring37.jpg",
  "ring14.jpg"
];

const wrings = [
  "wb3.jpg",
  "wb7.jpg",
  "wb4.jpg",
  "wb10.jpg",
  "wb6.jpg",
  "wb9.jpg"
];

let currentImages = erings;
let index = 0;

/* 🖱 CLICK – schimbă poza */
jewelry.addEventListener("click", () => {
  index = (index + 1) % currentImages.length;
  image.src = currentImages[index];
});

/* ⌨ TASTATURĂ – schimbă categoria */
document.addEventListener("keydown", (e) => {
  if (e.key === "1") {
    currentImages = erings;
    index = 0;
    type.textContent = "Engagement Rings";
    image.src = currentImages[index];
  }

  if (e.key === "2") {
    currentImages = wrings;
    index = 0;
    type.textContent = "Wedding Bands";
    image.src = currentImages[index];
  }
});




const canvas = document.getElementById("ringCanvas");
const ctx = canvas.getContext("2d");

const cx = canvas.width / 2;
const cy = canvas.height / 2;
const radius = 160;

let maxAngle = 0;
const speed = 0.015;
const step = Math.PI / 90;

function drawRing() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    /* ===== RING MADE OF LINES ===== */
    ctx.strokeStyle = "#d4af37";
    ctx.lineWidth = 3;
    ctx.lineCap = "round";

    for (let angle = 0; angle < maxAngle; angle += step) {
        const x1 = cx + Math.cos(angle) * radius;
        const y1 = cy + Math.sin(angle) * radius;

        const x2 = cx + Math.cos(angle) * (radius + 14);
        const y2 = cy + Math.sin(angle) * (radius + 14);

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
    }

    if (maxAngle < Math.PI * 2) {
        maxAngle += speed;
    }

    

    /* ===== TEXT INSIDE THE RING ===== */
    ctx.fillStyle = "rgb(21, 8, 139)";

    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    // Ballet font
    ctx.font = "42px 'Ballet'";
    ctx.fillText("Forever begins now", cx, cy);
}

setInterval(drawRing,15);

const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("show");
});

// dropdown Rings
menu.addEventListener("click", (e) => {
  if (e.target.classList.contains("dropdown-toggle")) {
    e.target.nextElementSibling.classList.toggle("show");
  }
});



document.getElementById("newsletterForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.currentTarget;   // FORMULARUL
  const email = form.querySelector("#email").value.trim();
  const checkboxes = form.querySelectorAll("input[type='checkbox']:checked");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (checkboxes.length === 0) {
    alert("Please select at least one option.");
    return;
  }

  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  alert("Thank you for subscribing!");
  form.reset();
});


