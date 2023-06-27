import * as Validation from "./validation.js";

document
  .getElementById("registerForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let email = document.getElementById("emailInput").value;
    let password = document.getElementById("passwordInput").value;

    const loginData = { email, password };

    fetch('http://localhost:8080/api/v1/auth/login', {
        method: 'POST',
        body: loginData,
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        if (response.status === 200) {
          window.location.href = "/login3";
        } else {
          console.log("Error:", response.status);
        }
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  });