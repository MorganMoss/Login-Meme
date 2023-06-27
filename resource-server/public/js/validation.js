function validateEmailAndPassword() {
  validateEmail()
  validatePassword()
}

function validateEmail() {
  console.log("Getting called")
  const email = document.getElementById("emailInput").value;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const domainPattern = /@(.+)\.bbd\.co\.za$/;

  if (emailPattern.test(email) && domainPattern.test(email)) {
    document.getElementById("emailResult").innerHTML = "Valid email address";
    return true;
  } else {
    document.getElementById("emailResult").innerHTML = "Invalid email address";
    return false;
  }
}

function validatePassword() {
  const password = document.getElementById("passwordInput").value;
  const strengthCriteria = {
    minLength: 12,
    hasNumber: /[0-9]/,
    hasSpecialChar: /[!@#$%^&*]/,
    hasLowercase: /[a-z]/,
    hasUppercase: /[A-Z]/,
  };
  let strengthLevel = 0;

  if (password.length >= strengthCriteria.minLength) strengthLevel++;
  if (strengthCriteria.hasUppercase.test(password)) strengthLevel++;
  if (strengthCriteria.hasLowercase.test(password)) strengthLevel++;
  if (strengthCriteria.hasNumber.test(password)) strengthLevel++;
  if (strengthCriteria.hasSpecialChar.test(password)) strengthLevel++;

  let strengthText = ""

  switch (strengthLevel) {
    case 0:
    case 1:
      strengthText = "Weak lol";
      break;
    case 2:
    case 3:
      strengthText = "Medium rare";
      break;
    case 4:
    case 5:
      strengthText = "Strong I guess";
      break;
    default:
      strengthText = "Invalid";
      break;
  }
  document.getElementById("passwordResult").innerHTML = "Password is " + strengthText;
}

function redirect(){
  
}

  // $(document).bind("contextmenu", function (e) {
  //   e.preventDefault();
  // });
  
  // $(document).keydown(function (event) {
  //   switch (event.keyCode) {
  //       case 123:
  //         return false; // Prevent from F12
  //       case 73:
  //         if (event.ctrlKey && event.shiftKey) {
  //           return false; // Prevent from ctrl+shift+i
  //         }
  //         break;
  //       case 85:
  //         if (event.ctrlKey) {
  //           return false; // Prevent from ctrl+u
  //         }
  //         break;
  //       case 67:
  //         if (event.ctrlKey) {
  //           return false; // Prevent from ctrl+c
  //         }
  //         break;
  //       case 88:
  //         if (event.ctrlKey) {
  //           return false; // Prevent from ctrl+x
  //         }
  //         break;
  //     }
      
  // });

  // export { validateEmailAndPassword, validatePassword, validateEmail };