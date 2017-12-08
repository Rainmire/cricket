class DrawCanvas {
  constructor() {
    // debugger;
    this.canvas = document.getElementById('terrainCanvas');
    this.drawCtx = this.canvas.getContext("2d");
    this.fill = "black";
    this.stroke = 2;
    this.clickHold = false;
    this.prevX = 0; this.currX = 0; this.prevY = 0; this.currY = 0;
    this.pointerOffsetX = 0;
    this.pointerOffsetY = 0;
    // let that = this;

    //draw goal
    this.drawGoal();

    window.addEventListener("mousemove", (e) => (
        this.findxy('move', e)
    ), false);
    window.addEventListener("mousedown", (e) => (
        this.findxy('down', e)
    ), false);
    window.addEventListener("mouseup", (e) => (
        this.findxy('up', e)
    ), false);
    window.addEventListener("mouseout", (e) => (
        this.findxy('out', e)
    ), false);
  }

  drawGoal() {
    this.drawCtx.beginPath();
    this.drawCtx.fillStyle = "rgba(0, 255, 0, 255)";
    this.drawCtx.fillRect(20, 40, 20, 20);
    this.drawCtx.closePath();
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
        this.currX = e.clientX - this.canvas.offsetLeft-10;
        this.currY = e.clientY - this.canvas.offsetTop-10;

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
            this.currX = e.clientX - this.canvas.offsetLeft-10;
            this.currY = e.clientY - this.canvas.offsetTop-10;
            this.draw();
        }
    }
  }
}

export default DrawCanvas;
