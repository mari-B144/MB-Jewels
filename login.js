document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = e.currentTarget.email.value;
  const password = e.currentTarget.password.value;

  fetch("users.json")
    .then(res => res.json())
    .then(users => {
      const user = users.find(
        u => u.email === email && u.password === password
      );

      if (user) {
        localStorage.setItem("loggedUser", JSON.stringify(user));
        alert("Login successful!");
        window.location.href = "proiect.html";
      } else {
        alert("Invalid credentials!");
      }
    });
});

document.getElementById("logoutBtn").addEventListener("click", function () {
  localStorage.removeItem("loggedUser");

  alert("You have been logged out!");

  window.location.href = "login.html";
});


