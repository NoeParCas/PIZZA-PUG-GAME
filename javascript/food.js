class Food {
  constructor(image, size = 110) {
    //propiedades del pug pizzero
    this.x = Math.floor(Math.random() * (1080 - 1)) + 1;
    this.y = -200; //Math.floor(Math.random() * (1080 - 1)) + 1;
    this.width = size;
    this.height = size;
    this.img = new Image();
    this.img.src = image;
    this.gravity = 4;
  }

  //métodos del food
  drawImage = () => {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    this.Gravity(); //llamo a la función de gravedad una vez que se dibujan las imágenes.
  };

  Gravity = () => {
    const downPosition = this.y + this.gravity;
    if (downPosition <= 620) {
      this.y = downPosition;
    } else {
      this.y = -80;
      this.x = Math.floor(Math.random() * (1080 - 1)) + 1;
    }
    //console.log(this.y);
  };

  clearImage = () => {
    ctx.clearRect(this.img, this.x, this.y, this.width, this.height);
  };
}
