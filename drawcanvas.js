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

}
