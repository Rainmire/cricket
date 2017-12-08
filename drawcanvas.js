class DrawCanvas {
  constructor() {
    this.canvas = document.getElementById('terrainCanvas');
    this.drawCtx = this.canvas.getContext("2d");
    this.fill = "black";
    this.stroke = 2;
    this.clickHold = false;
    this.prevX = 0; this.currX = 0; this.prevY = 0; this.currY = 0;
    let that = this;
    this.canvas.addEventListener("mousemove", (e) => (
        that.findxy('move', e)
    ), false);
    this.canvas.addEventListener("mousedown", (e) => (
        that.findxy('down', e)
    ), false);
    this.canvas.addEventListener("mouseup", (e) => (
        that.findxy('up', e)
    ), false);
    this.canvas.addEventListener("mouseout", (e) => (
        that.findxy('out', e)
    ), false);
  }

  draw() {
    this.drawCtx.beginPath();
    this.drawCtx.moveTo(this.prevX, this.prevY);
    this.drawCtx.lineTo(this.currX, this.currY);
    this.drawCtx.strokeStyle = this.fill;
    this.drawCtx.lineWidth = this.stroke;
    this.drawCtx.stroke();
    this.drawCtx.closePath();
  }



  findxy(res, e) {
    if (res === 'down') {
        this.prevX = this.currX;
        this.prevY = this.currY;
        this.currX = e.clientX - this.canvas.offsetLeft;
        this.currY = e.clientY - this.canvas.offsetTop;

        this.clickHold = true;
            this.drawCtx.beginPath();
            this.drawCtx.fillStyle = this.fill;
            this.drawCtx.fillRect(this.currX, this.currY, 2, 2);
            this.drawCtx.closePath();

    }
    if (res === 'up' || res === "out") {
        this.clickHold = false;
    }
    if (res === 'move') {
        if (this.clickHold) {
            this.prevX = this.currX;
            this.prevY = this.currY;
            this.currX = e.clientX - this.canvas.offsetLeft;
            this.currY = e.clientY - this.canvas.offsetTop;
            this.draw();
        }
    }
  }
}

export default DrawCanvas;
