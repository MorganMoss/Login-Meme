let endLoop = 0

function showImage(elementId, duration) {
    const element = document.getElementById(elementId);
    // element.style.display = "block";

    setTimeout(function() {
      element.style.display = "none";
      changeImage();
    }, duration);
  }

  
  function changeImage() {
    const firstImage = document.getElementById("firstImage");
    const secondImage = document.getElementById("secondImage");
    if (firstImage.style.display == "none" && endLoop < 1) {
    console.log("firstImage display is none")
      firstImage.style.display = "block";
      secondImage.style.display = "none";
      setTimeout(function() {
        firstImage.style.display = "block";
        // check here for looping condition
        endLoop =+ 1
        changeImage();
      }, 2000); // Show the first image for 10 seconds
    } 
    
    if(firstImage.style.display == "block" && endLoop < 1) {
    console.log("firstImage display is block")
      firstImage.style.display = "none";
      secondImage.style.display = "block";
      setTimeout(function() {
        secondImage.style.display = "none";
        changeImage();
      }, 2000); // Show the second image for 10 seconds
    }
  }
  
  // Initial image display
  showImage("firstImage", 2000); 
  





// $(document).bind("contextmenu", function (e) {
//     e.preventDefault();
//   });
  
//   $(document).keydown(function (event) {
//     switch (event.keyCode) {
//         case 123:
//           return false; // Prevent from F12
//         case 73:
//           if (event.ctrlKey && event.shiftKey) {
//             return false; // Prevent from ctrl+shift+i
//           }
//           break;
//         case 85:
//           if (event.ctrlKey) {
//             return false; // Prevent from ctrl+u
//           }
//           break;
//         case 67:
//           if (event.ctrlKey) {
//             return false; // Prevent from ctrl+c
//           }
//           break;
//         case 88:
//           if (event.ctrlKey) {
//             return false; // Prevent from ctrl+x
//           }
//           break;
//       }
      
//   });