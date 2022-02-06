class Pizzapug {
  constructor() {
    //propiedades del pug pizzero
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
    this.width = 120;
    this.height = 120;
    this.img = new Image();
    this.img.src = "./images/pizzapug.png";
    this.pizzapugSpeed = 20;
  }

  //métodos del pug pizzero
  drawPizzapug = () => {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  };

  pizzapugRight = () => {
    this.x = this.x + pizzapugSpeed;
  };

  pizzapugLeft = () => {
    this.x = this.x - pizzapugSpeed;
  };

  pizzapugUp = () => {
    this.y = this.y - pizzapugSpeed;
  };

  pizzapugDown = () => {
    this.y = this.y + pizzapugSpeed;
  };
}
