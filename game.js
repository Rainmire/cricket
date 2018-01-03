import Map from './map';
document.addEventListener("DOMContentLoaded", function() {
  var map;
  const reset = document.getElementById("reset-btn");
  const winModal = document.getElementById("gameover-modal");
  reset.onclick = () => {
    map.clearAllCanvas();
    map = new Map();
    winModal.style.display = "none";
  };

  var cricketImg = new Image();
  cricketImg.onload = () => {
    map = new Map(cricketImg);
  };
  cricketImg.src = './assets/circle.gif';

});
