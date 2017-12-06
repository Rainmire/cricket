const Tanks = () => {
  const imageX = 0;
  const imageY = 0;
  var drawImage = function (imageObj) {
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');
    // var imageX = 0;
    // var imageY = 0;
    var imageWidth = imageObj.width;
    var imageHeight = imageObj.height;

    context.drawImage(imageObj, imageX, imageY);

    var imageData = context.getImageData(imageX, imageY, imageWidth, imageHeight);
    var data = imageData.data;

    // // iterate over all pixels
    // for(var i = 0, n = data.length; i < n; i += 4) {
    //   var red = data[i];
    //   var green = data[i + 1];
    //   var blue = data[i + 2];
    //   var alpha = data[i + 3];
    //   // console.log(red+green+blue+alpha);
    // }

    // // pick out pixel data from x, y coordinate
    // var x = 20;
    // var y = 20;
    // var red = data[((imageWidth * y) + x) * 4];
    // var green = data[((imageWidth * y) + x) * 4 + 1];
    // var blue = data[((imageWidth * y) + x) * 4 + 2];
    // var alpha = data[((imageWidth * y) + x) * 4 + 3];
    // console.log(blue);

    // // iterate over all pixels based on x and y coordinates
    // for(var y = 0; y < imageHeight; y++) {
    //   // loop through each column
    //   for(var x = 0; x < imageWidth; x++) {
    //     var red = data[((imageWidth * y) + x) * 4];
    //     var green = data[((imageWidth * y) + x) * 4 + 1];
    //     var blue = data[((imageWidth * y) + x) * 4 + 2];
    //     var alpha = data[((imageWidth * y) + x) * 4 + 3];
    //   }
    // }

    //populate collision map
    // const terrainMap = [];
    // var frame = function () {
    drawTank();
    // frame();
  };
  var drawTank = function() {
    var tankCanvas = document.getElementById('tankCanvas');
    var tankContext = tankCanvas.getContext('2d');
    var tankX = 0;
    var tankY = 0;
    // var imageX = 69;
    // var imageY = 50;
    // var imageWidth = imageObj.width;
    // var imageHeight = imageObj.height;

    tankContext.fillStyle = "red";
    tankContext.fillRect(tankX+imageX, tankY+imageY, 10,10);

    // this.context.drawImage(imageObj, imageX, imageY);
    //
    var imageData = tankContext.getImageData(imageX, imageY, 10, 10);
    var data = imageData.data;


    // var data = this.imageData.data;
    //
    // var tankData = this.context.createImageData(10,10)
  };



  // const drawTank = () => {
  //
  // }


  return {
    init: function () {
      var imageObj = new Image();
      imageObj.onload = function() {
        drawImage(this);
      };
      imageObj.crossOrigin = "Anonymous";
      imageObj.src = 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Rectangle_.png';
    },
    /******
    drawImage: function (imageObj) {
      var canvas = document.getElementById('myCanvas');
      this.context = canvas.getContext('2d');
      var imageX = 69;
      var imageY = 50;
      var imageWidth = imageObj.width;
      var imageHeight = imageObj.height;

      this.context.drawImage(imageObj, imageX, imageY);

      this.imageData = context.getImageData(imageX, imageY, imageWidth, imageHeight);
      var data = this.imageData.data;
debugger;
      // // iterate over all pixels
      // for(var i = 0, n = data.length; i < n; i += 4) {
      //   var red = data[i];
      //   var green = data[i + 1];
      //   var blue = data[i + 2];
      //   var alpha = data[i + 3];
      //   // console.log(red+green+blue+alpha);
      // }

      // // pick out pixel data from x, y coordinate
      // var x = 20;
      // var y = 20;
      // var red = data[((imageWidth * y) + x) * 4];
      // var green = data[((imageWidth * y) + x) * 4 + 1];
      // var blue = data[((imageWidth * y) + x) * 4 + 2];
      // var alpha = data[((imageWidth * y) + x) * 4 + 3];
      // console.log(blue);

      // // iterate over all pixels based on x and y coordinates
      // for(var y = 0; y < imageHeight; y++) {
      //   // loop through each column
      //   for(var x = 0; x < imageWidth; x++) {
      //     var red = data[((imageWidth * y) + x) * 4];
      //     var green = data[((imageWidth * y) + x) * 4 + 1];
      //     var blue = data[((imageWidth * y) + x) * 4 + 2];
      //     var alpha = data[((imageWidth * y) + x) * 4 + 3];
      //   }
      // }

      //populate collision map
      // const terrainMap = [];
      // var frame = function () {
      this.drawTank();

    },

    drawTank: function() {
      var tankCanvas = document.getElementById('tankCanvas');
      var tankContext = tankCanvas.getContext('2d');
      var tankX = 0;
      var tankY = 0;
      // var imageX = 69;
      // var imageY = 50;
      // var imageWidth = imageObj.width;
      // var imageHeight = imageObj.height;

      tankContext.fillStyle = "red";
      tankContext.fillRect(tankX, tankY, 10,10);
debugger;
      // this.context.drawImage(imageObj, imageX, imageY);
      //
      // this.imageData = context.getImageData(imageX, imageY, imageWidth, imageHeight);
      // var data = this.imageData.data;
      //
      // var tankData = this.context.createImageData(10,10)
    }
    *****/
  };
};
