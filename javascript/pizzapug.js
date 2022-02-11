class Pizzapug {
  constructor() {
    //* PIZZAPUG PROPERTIES
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
    this.width = 150;
    this.height = 150;
    this.img = new Image();
    this.img.src = "./images/pizzapug.png";
    this.pizzapugSpeed = 60;
  }

  //* PIZZAPUG METHODS
  drawPizzapug = () => {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  };

  pugGravity = () => {
    const downPosition = this.y + 0.5;
    if (downPosition <= 520) {
      this.y = downPosition;
    }
  };

  ArrowRight = () => {
    const rightPosition = this.x + this.pizzapugSpeed;
    if (rightPosition <= 1080) {
      this.x = rightPosition;
    }
  };

  ArrowLeft = () => {
    const leftPosition = this.x - this.pizzapugSpeed;
    if (leftPosition >= -20) {
      this.x = leftPosition;
    }
  };

  ArrowUp = () => {
    const upPosition = this.y - this.pizzapugSpeed;
    if (upPosition >= -20) {
      this.y = upPosition;
    }
  };

  ArrowDown = () => {
    const downPosition = this.y + this.pizzapugSpeed;
    if (downPosition <= 509) {
      this.y = downPosition;
    }
  };
}
