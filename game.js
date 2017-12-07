import Map from './map';
document.addEventListener("DOMContentLoaded", function() {
  var imageObj = new Image();
  imageObj.onload = function() {
    const map = new Map(this);
  };
  imageObj.crossOrigin = "Anonymous";
  // imageObj.src = 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Rectangle_.png';
  imageObj.src = 'http://res.cloudinary.com/rainmire/image/upload/v1512666225/slopes_jloaqp.png';
});
// const Game = function Game() {
//   return {
//     init: function () {
//       var imageObj = new Image();
//       imageObj.onload = function() {
//         const map = new Map(this);
//       };
//       imageObj.crossOrigin = "Anonymous";
//       imageObj.src = 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Rectangle_.png';
//     }
//   };
// };
