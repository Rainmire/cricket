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
  imageObj.src = 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Rectangle_.png';
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
  // const imageX = 0;
  // const imageY = 0;
  constructor(imageObj){
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');
    this.imageX = 0;
    this.imageY = 40;

    this.speed = 4;

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
      for (let i=0; i < this.speed; i++) {
        let newX = this.tankX - 1;
  			if(!this.collisionTest(newX, this.tankY, this.tankMap,this.terrainMap)){
  				this.tankX = newX;
  			}
        let newY = this.tankY - 1;
  			while(this.collisionTest(this.tankX, newY, this.tankMap,this.terrainMap)){
  				this.tankY = newY;
  			}
      }
		}
    if (this.right_key) {
      for (let i=0; i < this.speed; i++) {
        let newX = this.tankX + 1;
        if(!this.collisionTest(newX, this.tankY, this.tankMap,this.terrainMap)){
          this.tankX = newX;
        }
        let newY = this.tankY - 1;
        while(this.collisionTest(this.tankX, newY, this.tankMap,this.terrainMap)){
          this.tankY = newY;
        }
      }
    }

    //falling
    for (let i=0; i < this.speed; i++) {
      let newY = this.tankY + 1;
      if(!this.collisionTest(this.tankX, newY, this.tankMap, this.terrainMap)){
  			this.tankY = newY;
  		}
    }
    // this.tankContext.clearRect(this.tankX, this.tankY, this.tankMap.width, this.tankMap.height);
    // this.tankContext.clearRect(0, 0, 578, 400);
    //
    // this.tankContext.putImageData(this.tankMap,this.tankX,this.tankY);
    this.drawTank();
    // console.log(test);
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

/* harmony default export */ __webpack_exports__["a"] = (Map);


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map