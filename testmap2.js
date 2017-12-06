class Map {
  // const imageX = 0;
  // const imageY = 0;
  constructor(imageObj){
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');
    this.imageX = 0;
    this.imageY = 0;

    var imageWidth = imageObj.width;
    var imageHeight = imageObj.height;

    context.drawImage(imageObj, this.imageX, this.imageY);

    var imageData = context.getImageData(this.imageX, this.imageY, imageWidth, imageHeight);
    var data = imageData.data;


    this.drawTank();
    // frame();
  }
  drawTank () {
    var tankCanvas = document.getElementById('tankCanvas');
    var tankContext = tankCanvas.getContext('2d');
    var tankX = 0;
    var tankY = 0;
    // var imageX = 69;
    // var imageY = 50;
    // var imageWidth = imageObj.width;
    // var imageHeight = imageObj.height;

    tankContext.fillStyle = "red";
    tankContext.fillRect(tankX+this.imageX, tankY+this.imageY, 10,10);

    // this.context.drawImage(imageObj, imageX, imageY);
    //
    var imageData = tankContext.getImageData(this.imageX, this.imageY, 10, 10);
    var data = imageData.data;


    // var data = this.imageData.data;
    //
    // var tankData = this.context.createImageData(10,10)
  }

}

export default Map;
