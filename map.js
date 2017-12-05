function MAP() {
  this.init = () => {
    this.mapCanvas = document.getElementById("map");
    if (this.mapCanvas.getContext) {
			this.mapCtx = this.mapCanvas.getContext('2d');

      this.canvases = {};

			return true;
		} else {
			return false;
		}
  };
}
