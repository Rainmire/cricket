/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__testmap2__ = __webpack_require__(1);

document.addEventListener("DOMContentLoaded", function() {
  var imageObj = new Image();
  imageObj.onload = function() {
    const map = new __WEBPACK_IMPORTED_MODULE_0__testmap2__["a" /* default */](this);
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


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Map {

  constructor(imageObj){
    var canvas = document.getElementById('terrainCanvas');
    var context = canvas.getContext('2d');
    this.canvasWidth = canvas.width;
    this.canvasHeight = canvas.height;
    this.imageX = 0;
    this.imageY = -60;

    this.speed = 4;

    this.tankX = 500;
    this.tankY = 50;

    var imageWidth = imageObj.width;
    var imageHeight = imageObj.height;

    context.drawImage(imageObj, this.imageX, this.imageY);

    this.terrainMap = context.getImageData(0, 0, imageWidth, imageHeight);

    document.onkeydown = this.keyDown.bind(this);
		document.onkeyup = this.keyUp.bind(this);

    this.left_key = false;
    this.right_key = false;
    this.space_key = false;
    this.jumping = false;

    this.upForce = 0;

    this.initTank();
    this.frame();
  }
  initTank () {
    var tankCanvas = document.getElementById('tankCanvas');
    this.tankContext = tankCanvas.getContext('2d');

    this.tankMap = this.tankContext.createImageData(10,10);
    var tankData = this.tankMap.data;
    for(var i = 0, n = tankData.length; i < n; i += 4) {
      tankData[i] = 255;
      tankData[i + 1] = 0;
      tankData[i + 2] = 0;
      tankData[i + 3] = 255;
    }


    this.tankContext.putImageData(this.tankMap,this.tankX,this.tankY);


    //PIXEL SAMPLING
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
    this.tankContext.clearRect(0, 0, this.terrainMap.width, this.terrainMap.height);
    this.tankContext.putImageData(this.tankMap,this.tankX,this.tankY);
  }

  frame() {
    this.moveTank();
    var that = this;
    setTimeout(function(){ that.frame(); }, 1000 / 60);
  }

  moveTank() {

    if (this.left_key) {
      for (let i=0; i < this.speed; i++) {
        if (this.tankX<0) {
          break;
        }
        //hill climbing
        let newX = this.tankX - 1;
  			if(this.collisionTest(newX, this.tankY, this.tankMap,this.terrainMap)){
          let newY = this.tankY;
  				for (let j=0; j < 1000; j++){
            newY-=1;
            if (!this.collisionTest(newX, newY, this.tankMap,this.terrainMap)){
              this.tankX = newX;
              this.tankY = newY;
              break;
            }
          }
  			}
        else {
          this.tankX = newX;
        }
      }
		}
    if (this.right_key) {
      // debugger;
      for (let i=0; i < this.speed; i++) {
        // debugger;
        if (this.tankX+this.tankMap.width>this.canvasWidth-1) {
          break;
        }
        //hill climbing
        let newX = this.tankX + 1;
  			if(this.collisionTest(newX, this.tankY, this.tankMap,this.terrainMap)){
          let newY = this.tankY;
  				for (let j=0; j < this.speed*2; j++){
            newY-=1;
            if (!this.collisionTest(newX, newY, this.tankMap,this.terrainMap)){
              this.tankX = newX;
              this.tankY = newY;
              break;
            }
          }
  			}
        else {
          this.tankX = newX;
        }
      }
    }

    if (this.space_key && !this.jumping) {
      this.upForce = 10*this.speed;
      this.jumping = true;
    }

    //falling
    for (let i=0; i < this.speed*2; i++) {
      let newY = this.tankY + 1;
      if(!this.collisionTest(this.tankX, newY, this.tankMap, this.terrainMap)){
  			this.tankY = newY;
  		}
    }

    this.drawTank();
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
    if (map.data[r]===255 && map.data[g]===255 && map.data[b]===255) {
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

/* harmony default export */ __webpack_exports__["a"] = (Map);


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map