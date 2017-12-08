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

  map = new Map();

});
