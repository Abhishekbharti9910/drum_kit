// let keycontainer = document.querySelector("container");
// let key = document.querySelector("key");
// let audio = document.querySelectorAll("audio");
function playing(e) {
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    let key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) {//coz program false here and terminate to stop this wo used it
       return;
    }
    key.classList.add("playing");
    audio.currentTime = 0; //coz audio will complete then exist to make it work over and over
    audio.play();
}
window.addEventListener("keydown",playing);

const keys = Array.from(document.querySelectorAll(".key"));

keys.forEach(key => key.addEventListener('transitionend', rmT));

function rmT(e) {
    if (e.propertyName !== "transform") {
      return;
    }
    else{
      e.target.classList.remove("playing");
    }
  }
