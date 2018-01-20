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
  // debugger;


  var cricketImg = new Image();

  cricketImg.crossOrigin = "Anonymous";

  cricketImg.src = 'http://res.cloudinary.com/rainmire/image/upload/v1516048742/canvas-cricket/circle.png';

  cricketImg.onload = () => {
    // debugger;
    map = new Map(cricketImg);
  };

  // var img = new Image,
  //   canvas = document.createElement("canvas"),
  //   ctx = canvas.getContext("2d"),
  //   src = "http://res.cloudinary.com/rainmire/image/upload/v1516048742/canvas-cricket/circle.png"; // insert image url here
  //
  // img.crossOrigin = "Anonymous";
  //
  // img.onload = function() {
  //     canvas.width = img.width;
  //     canvas.height = img.height;
  //     ctx.drawImage( img, 0, 0 );
  //     localStorage.setItem( "savedImageData", canvas.toDataURL("image/png") );
  //     map = new Map(img);
  // };
  // img.src = src;
  // // make sure the load event fires for cached images too
  // if ( img.complete || img.complete === undefined ) {
  //     img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
  //     img.src = src;
  // }

});
