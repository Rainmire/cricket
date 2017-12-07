class Map {
  // const imageX = 0;
  // const imageY = 0;
  constructor(imageObj){
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');
    this.imageX = 0;
    this.imageY = 40;

    this.speed = 1;

    this.tankX = 100;
    this.tankY = 50;

    var imageWidth = imageObj.width;
    var imageHeight = imageObj.height;

    context.drawImage(imageObj, this.imageX, this.imageY);

    this.terrainMap = context.getImageData(0, 0, imageWidth, imageHeight);

    // this.terrainMap = imageData.data;
    document.onkeydown = this.key_down.bind(this);
		document.onkeyup = this.key_up.bind(this);

    this.left_key = false;
    this.right_key = false;

    this.initTank();
    this.frame();
  }
  initTank () {
    var tankCanvas = document.getElementById('tankCanvas');
    this.tankContext = tankCanvas.getContext('2d');

    // var imageX = 69;
    // var imageY = 50;
    // var imageWidth = imageObj.width;
    // var imageHeight = imageObj.height;



    // var data = this.imageData.data;
    //

    // this.tankContext.fillStyle = "red";
    this.tankMap = this.tankContext.createImageData(10,10);
    var tankData = this.tankMap.data;
    for(var i = 0, n = tankData.length; i < n; i += 4) {
      tankData[i] = 255;
      tankData[i + 1] = 0;
      tankData[i + 2] = 0;
      tankData[i + 3] = 255;
    }


    this.tankContext.putImageData(this.tankMap,this.tankX,this.tankY);
    // this.tankContext.drawImage(tankCanvas, 10, 10);

    // console.log(this.collisionTest(this.tankMap, this.terrainMap));
    // this.frame();
    // let x = 100;
    // let y = 110;
    // let r = (y * this.terrainMap.width + x) * 4;
		// let g = (y * this.terrainMap.width + x) * 4 + 1;
		// let b = (y * this.terrainMap.width + x) * 4 + 2;
		// let a = (y * this.terrainMap.width + x) * 4 + 3;
    // console.log(this.terrainMap.data[r]);
    // console.log(this.terrainMap.data[g]);
    // console.log(this.terrainMap.data[b]);
    // console.log(this.terrainMap.data[a]);
  }

  drawTank() {
    this.tankContext.clearRect(0, 0, 578, 400);
    this.tankContext.putImageData(this.tankMap,this.tankX,this.tankY);
  }

  frame() {
    this.moveTank();
    var that = this;
    setTimeout(function(){ that.frame(); }, 1000 / 60);
  }

  moveTank() {

    if (this.left_key) {
				if(!this.collisionTest(this.tankMap,this.terrainMap)){
					this.tankX -= this.speed;
				}
				while(this.collisionTest(this.tankMap,this.terrainMap)){
					this.tankY -= this.speed;
				}
		}
    if (this.right_key) {
        if(!this.collisionTest(this.tankMap,this.terrainMap)){
          this.tankX += this.speed;
        }
        while(this.collisionTest(this.tankMap,this.terrainMap)){
          this.tankY -= this.speed;
        }
    }

    //falling
    // var test = 0;
    if(!this.collisionTest(this.tankMap, this.terrainMap)){
			this.tankY += 1;
		}
    // this.tankContext.clearRect(this.tankX, this.tankY, this.tankMap.width, this.tankMap.height);
    this.tankContext.clearRect(0, 0, 578, 400);

    this.tankContext.putImageData(this.tankMap,this.tankX,this.tankY);
    this.drawTank();
    // console.log(test);
  }

  collisionTest(smallerObj, biggerObj) {
    for (let i = 0; i < smallerObj.width; i++) {
      for (let j = 0; j < smallerObj.height; j++) {
        if (this.getPixel(i+this.tankX, j+this.tankY,biggerObj)) {
          return true;
        }
      }
    }
    return false;

  }

  getPixel(x,y,map){
    if(x < 0 || y < 0 || x > map.width || y > map.height) return;
    let r = (y * map.width + x) * 4;
		let g = (y * map.width + x) * 4 + 1;
		let b = (y * map.width + x) * 4 + 2;
		let a = (y * map.width + x) * 4 + 3;
    // if (map.data[r]===255 && map.data[g]===255 && map.data[b]===255) {
    //   return false;
    // }
    if (map.data[r]===85 && map.data[g]===142 && map.data[b]===213) {
      return true;
    }

    // return true;
    return false;
  }

  key_down() {
    let KeyID = event.keyCode;
    if (KeyID === 37) {
				this.left_key = true;
		}
		if (KeyID === 39) {
			this.right_key = true;
		}
  }

  key_up() {
    var KeyID = event.keyCode;
		if (KeyID === 37) {
			this.left_key = false;
		}
		if (KeyID === 39) {
			this.right_key = false;
		}
  }
}

export default Map;
