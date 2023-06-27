import * as api from "./service.js";
import * as Valid from "./validation.js";

document
  .getElementById("registerForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // if(!Valid.validateEmailAndPassword()) {
    //     return;
    // }

    let email = document.getElementById("emailInput").value;
    let password = document.getElementById("passwordInput").value;

    const response = api.registerUser({ email: email, password: password });

    response.then((data) => {
        console.log('data: ', data)
      if (data) {
        window.location.href = "/login2";
      } else {
        console.log('error')
      }
    });
  });