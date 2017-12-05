const map = () => {

  	var Bitmap = function(imageData){
  		this.imageData = imageData;
  		this.height = this.imageData.height;
  		this.width = this.imageData.width;
  		this.x = 0;
  		this.y = 0;

  		this.fillColor = function(r,g,b,a){
  			for (var x = 0; x < imageData.width; x++)  {
  				for (var y = 0; y < imageData.height; y++)  {

  					var idx = (x + y * this.width) * 4;

  					imageData.data[idx + 0] = r;
  					imageData.data[idx + 1] = g;
  					imageData.data[idx + 2] = b;
  					imageData.data[idx + 3] = a;

  				}
  			}
  		};
  	};

  	return {
  		init: function (){

  			var canvas = document.getElementById("map");
  			this.ctx = canvas.getContext("2d");

  			this.canvases = {};

  			var mapData = this.ctx.createImageData(550,200);
  			this.mapBmp = new Bitmap(mapData);
  			this.mapBmp.fillColor(0,255,0,255);

  			this.width = canvas.getAttribute("width");
  			this.height = canvas.getAttribute("height");

  			this.init_objects();
  		},

      ///source: https://github.com/JAStanton/Destructible-Terrain/blob/master/script.js
  		init_objects : function(){
  			this.mapBmp.y = 200;
  			this.add_child("map",this.mapBmp);

  			this.draw_objects();
  		},

  		draw_objects : function(){
  			this.ctx.clearRect (0 , 0, this.width ,this.height);

  			for (var key in this.canvases) {
  				var obj = this.canvases[key];
  				if(obj !== undefined){
  					this.ctx.drawImage(obj.canvas,0,0);
  				}
  			}

  		},
  		add_child : function(canvasName,bitmap,method){
  			var t = document.createElement('canvas');
  				t.height = this.height;
  				t.width = this.width;

  			var t_context = t.getContext("2d");
  				t_context.putImageData(bitmap.imageData, bitmap.x, bitmap.y);

  			this.canvases[canvasName] = t_context;
  		},
      ///endsource
  	};

  };
