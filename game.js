import Map from './map';
document.addEventListener("DOMContentLoaded", function() {
  var map;
  const reset = document.getElementById("reset-btn");
  reset.onclick = () => {
    map = null;
  };

  map = new Map();


});
