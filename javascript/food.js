class Food {
  constructor(image, size = 110) {
    //* FOOD PROPERTIES
    this.x = Math.floor(Math.random() * (1080 - 1)) + 1;
    this.y = -200;
    this.width = size;
    this.height = size;
    this.img = new Image();
    this.img.src = image;
    this.gravity = 2;
  }

  //* FOOD METHODS
  drawImage = () => {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    this.Gravity(); //llamo a la función de gravedad una vez que se dibujan las imágenes.
    this.foodSpeed();
  };

  Gravity = () => {
    const downPosition = this.y + this.gravity;
    if (downPosition <= 620) {
      this.y = downPosition;
    } else {
      this.y = -80;
      this.x = Math.floor(Math.random() * (1080 - 1)) + 1;
    }
  };

  clearImage = () => {
    ctx.clearRect(this.img, this.x, this.y, this.width, this.height);
  };

  foodSpeed = () => {
    if ((this.isGameOn = true)) {
      setTimeout(() => (this.gravity = 3), 5000);
      setTimeout(() => (this.gravity = 4), 10000);
      setTimeout(() => (this.gravity = 5), 20000);
      //setTimeout(() => (this.gravity = 6), 30000);
    } else {
      clearInterval();
    }
  };
}
