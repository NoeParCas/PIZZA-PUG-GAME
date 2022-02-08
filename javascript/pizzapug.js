class Pizzapug {
  constructor() {
    //propiedades del pug pizzero
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
    this.width = 150;
    this.height = 150;
    this.img = new Image();
    this.img.src = "./images/pizzapug.png";
    this.pizzapugSpeed = 50;
  }

  //métodos del pug pizzero
  drawPizzapug = () => {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  };

  pugGravity = () => {
    //this.y = this.y + 0.5;
    const downPosition = this.y + 0.5;
    //console.log(this.y);
    if (downPosition <= 520) {
      this.y = downPosition;
    }
  };

  //checkColision = (updateScore, pizza, veggies1, veggies2, veggies3) => {
  // console.log(pizza.x, pizza.y);
  // updateScore(1000);
  //};

  ArrowRight = () => {
    const rightPosition = this.x + this.pizzapugSpeed;
    //console.log(this.x);
    if (rightPosition <= 1080) {
      this.x = rightPosition;
    }
  };

  ArrowLeft = () => {
    const leftPosition = this.x - this.pizzapugSpeed;
    //console.log(this.x);
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
    //console.log(this.y);
    if (downPosition <= 509) {
      this.y = downPosition;
    }
  };

  /*pizzapugMovement = (event) => {
    if (event.key === "ArrowRight") {
      this.x = this.x + this.pizzapugSpeed;
    } else if (event.key === "ArrowLeft") {
      this.x = this.x - this.pizzapugSpeed;
    } else if (event.key === "ArrowUp") {
      this.y = this.y - this.pizzapugSpeed;
    } else if (event.key === "ArrowDown") {
      this.y = this.y + this.pizzapugSpeed;
    }
  };*/

  // movimiento!!
}
