function redirectToRegistration() {
  window.location.href = "/register";
}

let endLoop = 0;

function changeImage() {
  const firstImage = document.getElementById("firstImage");
  const secondImage = document.getElementById("secondImage");
  const registerButton = document.getElementById("registerButton");

  if (endLoop >= 2) {
    firstImage.style.display = "none";
    secondImage.style.display = "none";
    registerButton.style.display = "block";
  } else if (endLoop === 1) {
    firstImage.style.display = "none";
    secondImage.style.display = "block";
    endLoop += 1;
    setTimeout(changeImage, 5000); 
  } else {
    firstImage.style.display = "block";
    secondImage.style.display = "none";
    endLoop += 1;
    setTimeout(changeImage, 5000); 
  }
}

changeImage();
  
  





$(document).bind("contextmenu", function (e) {
    e.preventDefault();
  });
  
  $(document).keydown(function (event) {
    switch (event.keyCode) {
        case 123:
          window.close();
          return false; // Prevent from F12
        case 73:
          if (event.ctrlKey && event.shiftKey) {
            window.close();
            return false; // Prevent from ctrl+shift+i
          }
          break;
        case 85:
          if (event.ctrlKey) {
            return false; // Prevent from ctrl+u
          }
          break;
        case 67:
          if (event.ctrlKey) {
            return false; // Prevent from ctrl+c
          }
          break;
        case 88:
          if (event.ctrlKey) {
            return false; // Prevent from ctrl+x
          }
          break;
      }
      
  });