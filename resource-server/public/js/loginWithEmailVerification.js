import * as api from "./service.js";

document
  .getElementById("loginFromWithVerification")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let email = document.getElementById("emailInput").value;
    let password = document.getElementById("passwordInput").value;

    const response = api.loginUserWithEmailVerification({ email: email, password: password });

    response.then((data) => {
        console.log('data: ', data)
      if (data) {
        console.log('success 1');
      } else {
      window.location.href = "/error";
        console.log('error')
      }
    });
  });

document
  .getElementById("verifyCodeForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let verifyCode = document.getElementById("verificationInput").value;

    const response = api.verifyCode({ verifyCode: verifyCode });

    response.then((data) => {
        console.log('data: ', data)
      if (data) {
        console.log('success 2');
        window.location.href = "/";
      } else {
      window.location.href = "/error";
        console.log('error')
      }
    });
  });