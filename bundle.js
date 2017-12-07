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
    this.imageY = 0;

    this.tankX = 40;
    this.tankY = 40;

    var imageWidth = imageObj.width;
    var imageHeight = imageObj.height;

    context.drawImage(imageObj, this.imageX, this.imageY);

    this.terrainMap = context.getImageData(this.imageX, this.imageY, imageWidth, imageHeight);
    // this.terrainMap = imageData.data;

    this.drawTank();
    // this.frame();
  }
  drawTank () {
    var tankCanvas = document.getElementById('tankCanvas');
    var tankContext = tankCanvas.getContext('2d');

    // var imageX = 69;
    // var imageY = 50;
    // var imageWidth = imageObj.width;
    // var imageHeight = imageObj.height;

    /***
    tankContext.fillStyle = "red";
    tankContext.fillRect(this.tankX+this.imageX, this.tankY+this.imageY, 10,10);

    // this.context.drawImage(imageObj, imageX, imageY);
    //
    var imageData = tankContext.getImageData(this.imageX, this.imageY, 10, 10);
    this.tankMap = imageData.data;

    for(var i = 0, n = this.tankMap.length; i < n; i += 4) {
      var red = this.tankMap[i];
      var green = this.tankMap[i + 1];
      var blue = this.tankMap[i + 2];
      var alpha = this.tankMap[i + 3];
      console.log(red+", "+green+", "+blue+", "+alpha);
    }
    ***/

    // var data = this.imageData.data;
    //

    // tankContext.fillStyle = "red";
    var tankMap = tankContext.createImageData(10,10);
    var tankData = tankMap.data;
    for(var i = 0, n = tankData.length; i < n; i += 4) {
      tankData[i] = 255;
      tankData[i + 1] = 0;
      tankData[i + 2] = 0;
      tankData[i + 3] = 255;
    }


    tankContext.putImageData(tankMap,this.tankX,this.tankY);
    // tankContext.drawImage(tankCanvas, 10, 10);

    console.log(this.collisionTest(tankMap, this.terrainMap));
    this.frame();
    // let x = 50;
    // let y = 50;
    // let r = (y * this.terrainMap.width + x) * 4;
		// let g = (y * this.terrainMap.width + x) * 4 + 1;
		// let b = (y * this.terrainMap.width + x) * 4 + 2;
		// let a = (y * this.terrainMap.width + x) * 4 + 3;
    // console.log(this.terrainMap.data[r]);
    // console.log(this.terrainMap.data[g]);
    // console.log(this.terrainMap.data[b]);
    // console.log(this.terrainMap.data[a]);
    // debugger;
  }

  frame() {
    this.moveTank();
    var that = this;
    setTimeout(function(){ that.frame(); }, 1000 / 60);
  }

  moveTank() {
    //falling

  }

  collisionTest(smallerObj, biggerObj) {
// debugger;
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
// debugger;
    if (map.data[r]===255 && map.data[g]===255 && map.data[b]===255) {
      return false;
    }
    return true;
  }



}

/* harmony default export */ __webpack_exports__["a"] = (Map);


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map