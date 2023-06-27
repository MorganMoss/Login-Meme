import * as api from "./service.js";

function logoutUser() {
    const response = api.logout();

    response.then((data) => {
      if (data) {
        window.location.href = "/";
      } else {
        console.log('error')
      }
    });
}

document.getElementById("logoutText").onclick = logoutUser;

