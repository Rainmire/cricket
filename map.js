import DrawCanvas from './drawcanvas';

class Map {

  constructor(imageObj){
    // var canvas = document.getElementById('terrainCanvas');
    // var context = canvas.getContext('2d');

    this.imageX = 0;
    this.imageY = -60;

    this.speed = 10;
    this.climb = 4;

    this.cricketX = 500;
    this.cricketY = 50;

    document.onkeydown = this.keyDown.bind(this);
		document.onkeyup = this.keyUp.bind(this);

    this.left_key = false;
    this.right_key = false;
    this.space_key = false;
    this.jumping = false;

    this.upForce = 0;

    this.initTerrain();
    this.initCricket();
    this.frame();
  }

  initTerrain() {
    var terrainCanvas = document.getElementById('terrainCanvas');
    this.terrainContext = terrainCanvas.getContext('2d');
    this.canvasWidth = terrainCanvas.width;
    this.canvasHeight = terrainCanvas.height;

    this.drawCanvas = new DrawCanvas();
  }

  initCricket () {
    var cricketCanvas = document.getElementById('cricketCanvas');
    this.cricketContext = cricketCanvas.getContext('2d');

    this.cricketMap = this.cricketContext.createImageData(10,10);
    var cricketData = this.cricketMap.data;
    for(var i = 0, n = cricketData.length; i < n; i += 4) {
      cricketData[i] = 255;
      cricketData[i + 1] = 0;
      cricketData[i + 2] = 0;
      cricketData[i + 3] = 255;
    }


    this.cricketContext.putImageData(this.cricketMap,this.cricketX,this.cricketY);



  }

  drawCricket() {
    this.cricketContext.clearRect(0, 0, this.terrainMap.width, this.terrainMap.height);
    this.cricketContext.putImageData(this.cricketMap,this.cricketX,this.cricketY);
  }

  frame() {
    this.terrainMap = this.terrainContext.getImageData(0, 0, this.canvasWidth, this.canvasHeight);

    // // PIXEL SAMPLING
    // let x = 100;
    // let y = 110;
    // let r = (y * this.canvasWidth + x) * 4;
    // let g = (y * this.canvasWidth + x) * 4 + 1;
    // let b = (y * this.canvasWidth + x) * 4 + 2;
    // let a = (y * this.canvasWidth + x) * 4 + 3;
    // console.log(this.terrainMap.data[r]);
    // console.log(this.terrainMap.data[g]);
    // console.log(this.terrainMap.data[b]);
    // console.log(this.terrainMap.data[a]);
    // // PIXEL SAMPLING

    this.moveCricket();
    var that = this;
    setTimeout(function(){ that.frame(); }, 1000 / 60);
  }

  moveCricket() {

    //stuck test
    if(this.collisionTest(this.cricketX+1, this.cricketY, this.cricketMap,this.terrainMap) &&
      this.collisionTest(this.cricketX-1, this.cricketY, this.cricketMap,this.terrainMap) &&
      this.collisionTest(this.cricketX, this.cricketY+1, this.cricketMap,this.terrainMap) &&
      this.collisionTest(this.cricketX, this.cricketY-1, this.cricketMap,this.terrainMap)) {
      this.gameOver("c");
    }




    if (this.left_key) {
      for (let i=0; i < this.speed; i++) {
        if (this.cricketX<0) {
          break;
        }
        //hill climbing
        let newX = this.cricketX - 1;
  			if(this.collisionTest(newX, this.cricketY, this.cricketMap,this.terrainMap)){
          let newY = this.cricketY;
  				for (let j=0; j < this.climb; j++){
            newY-=1;
            if (!this.collisionTest(newX, newY, this.cricketMap,this.terrainMap)){
              this.cricketX = newX;
              this.cricketY = newY;
              break;
            }
          }
  			}
        else {
          this.cricketX = newX;
        }
      }
		}
    if (this.right_key) {
      // debugger;
      for (let i=0; i < this.speed; i++) {
        // debugger;
        if (this.cricketX+this.cricketMap.width>this.canvasWidth-1) {
          break;
        }
        //hill climbing
        let newX = this.cricketX + 1;
  			if(this.collisionTest(newX, this.cricketY, this.cricketMap,this.terrainMap)){
          let newY = this.cricketY;
  				for (let j=0; j < this.climb; j++){
            newY-=1;
            if (!this.collisionTest(newX, newY, this.cricketMap,this.terrainMap)){
              this.cricketX = newX;
              this.cricketY = newY;
              break;
            }
          }
  			}
        else {
          this.cricketX = newX;
        }
      }
    }

    if (this.space_key && !this.jumping) {
      this.upForce = 4*this.speed;
      this.jumping = true;
    }

    //jumping
    if (this.upForce > 0) {
      for (let i = 0; i < this.upForce; i++) {
        let newY = this.cricketY - 1;
        if(!this.collisionTest(this.cricketX, newY, this.cricketMap, this.terrainMap)){
    			this.cricketY = newY;
    		}
      }
      this.upForce--;
    }

    //falling
    for (let i=0; i < this.speed*2; i++) {
      let newY = this.cricketY + 1;
      if(!this.collisionTest(this.cricketX, newY, this.cricketMap, this.terrainMap)){
  			this.cricketY = newY;
  		}
      else {
        this.jumping = false;
      }
    }

    this.drawCricket();
  }

  collisionTest(x, y ,smallerObj, biggerObj) {
    for (let i = 0; i < smallerObj.width; i++) {
      for (let j = 0; j < smallerObj.height; j++) {
        if (this.getPixel(i+x, j+y,biggerObj)) {
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
    if (map.data[r]===0 && map.data[g]===0 && map.data[b]===0 && map.data[a]===0) {
      return false;
    }

    return true;
  }

  keyDown() {
    let KeyID = event.keyCode;
    if (KeyID === 37) {
				this.left_key = true;
		}
		if (KeyID === 39) {
			this.right_key = true;
		}
    if (KeyID === 32) {
			this.space_key = true;
		}
  }

  keyUp() {
    var KeyID = event.keyCode;
		if (KeyID === 37) {
			this.left_key = false;
		}
		if (KeyID === 39) {
			this.right_key = false;
		}
    if (KeyID === 32) {
			this.space_key = false;
		}
  }
}

export default Map;
