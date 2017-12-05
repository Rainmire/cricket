document.addEventListener("DOMContentLoaded", function(){
  const canvasEl = document.getElementById("map");

  const ctx = canvasEl.getContext("2d");


  ctx.fillStyle = 'red';
  ctx.beginPath();
  ctx.moveTo(10,30);
  ctx.bezierCurveTo(50,90,159,-30,200,30);
  ctx.lineTo(200,90);
  ctx.lineTo(10,90);
  ctx.closePath();
  ctx.fill();
  ctx.lineWidth = 4;
  ctx.strokeStyle = 'black';
  ctx.stroke();

});
