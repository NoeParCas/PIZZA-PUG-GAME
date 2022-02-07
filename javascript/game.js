class Game {
  constructor() {
    //! PROPIEDADES DEL JUEGO
    this.bg = new Image();
    this.bg.src = "./images/canvasbackground.jpg";
    this.pizzapug = new Pizzapug();
    this.carrotArr = [new Food("./images/carrot.png")];
    this.brocoliArr = [new Food("./images/brocoli.png")];
    this.pizzaArr = [new Food("./images/pizza.png", 130)];
    //this.veggies1 = new Food("./images/brocoli.png");
    //this.veggies2 = new Food("./images/brocoli.png");
    //this.veggies3 = new Food("./images/carrot.png");
    this.pizza = new Food("./images/pizza.png");
    this.isGameOn = true;
    this.pizzaScore = 1000;
    this.scoreDom = document.querySelector("#score");
    this.score = 0;
  }

  //Aquí realizamos las funciones
  drawBackground = () => {
    ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height);
  };

  clearCanvas = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  checkColision = (veggies) => {
    if (
      this.pizzapug.x < veggies.x + veggies.width &&
      this.pizzapug.x + this.pizzapug.width > veggies.x &&
      this.pizzapug.y < veggies.y + veggies.height &&
      this.pizzapug.height + this.pizzapug.y > veggies.y
    ) {
      //console.log("COLISIOOOOON");
      //termino loop
      this.isGameOn = false;
      //oculto canvas
      canvas.style.display = "none";
      //game over Screen
      gameOverScreen.style.display = "flex";
    }
  };

  checkScore = (pizza) => {
    if (
      this.pizzapug.x < pizza.x + pizza.width &&
      this.pizzapug.x + this.pizzapug.width > pizza.x &&
      this.pizzapug.y < pizza.y + pizza.height &&
      this.pizzapug.height + this.pizzapug.y > pizza.y
    ) {
      //console.log("COLISIOOOOON");
      //eliminar pizza
      ctx.clearRect(pizza.x, pizza.y, pizza.width, pizza.height);
      //acumular el score en una variable
      this.score += this.pizzaScore;
      //acceder al valor del DOM
      this.scoreDom.innerText = this.score;
      //console.log(this.scoreDom.innerText);
    }
  };

  //! MÉTODOS DEL JUEGO
  //Aquí invocamos las funciones
  gameLoop = () => {
    //console.log("FUNCIONANDO!!"); funciona ok
    // 1. limpiar el canvas
    this.clearCanvas();
    // 2. mover los elementos
    this.pizzapug.pugGravity();
    //this.veggies.gravity(); NO FUNCIONA!!! estoy llamando a la función antes de que se dibujen en el canvas?¿?¿?

    // 3. dibujar los elementos
    this.drawBackground();
    this.pizzapug.drawPizzapug();

    this.carrotArr.forEach((eachFood) => {
      eachFood.drawImage();
    });

    this.brocoliArr.forEach((eachFood) => {
      eachFood.drawImage();
    });

    this.pizzaArr.forEach((eachFood) => {
      eachFood.drawImage();
    });

    //this.veggies1.drawImage();
    //this.veggies2.drawImage();
    //this.veggies3.drawImage();
    //this.pizza.drawImage();

    // Comprobar si colisionan los veggies

    this.carrotArr.forEach((eachCarrot) => {
      this.checkColision(eachCarrot);
    });

    this.brocoliArr.forEach((eachBrocoli) => {
      this.checkColision(eachBrocoli);
    });

    this.pizzaArr.forEach((eachPizza) => {
      this.checkScore(eachPizza);
    });

    // 4. recursión para la animación
    if (this.isGameOn) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
