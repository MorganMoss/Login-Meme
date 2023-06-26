function validateEmail() {
    const email = document.getElementById("emailInput").value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(email)) {
      document.getElementById("result").innerHTML = "Valid email address";
    } else {
      document.getElementById("result").innerHTML = "Invalid email address";
    }
  }

  $(document).bind("contextmenu", function (e) {
    e.preventDefault();
  });
  
  $(document).keydown(function (event) {
    switch (event.keyCode) {
        case 123:
          return false; // Prevent from F12
        case 73:
          if (event.ctrlKey && event.shiftKey) {
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