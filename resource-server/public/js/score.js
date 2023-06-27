import * as api from "./service.js";
window.onload=function() { 
    const response = api.getScore();

    response.then((data) => {
        document.getElementById("highScorePoints").innerHTML = data.counter.attempts;
    });
 }; 