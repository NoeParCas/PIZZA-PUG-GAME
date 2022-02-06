class Game {
  constructor() {
    //! PROPIEDADES DEL JUEGO
    this.bg = new Image();
    this.bg.src = "./images/canvasbackground.jpg";
    this.pizzapug = new Pizzapug();
    this.veggies1 = new Food("./images/brocoli.png");
    this.veggies2 = new Food("./images/brocoli.png");
    this.veggies3 = new Food("./images/carrot.png");
    this.pizza = new Food("./images/pizza.png", 200);
    // this.pizzaScore = 1000;
    this.score = document.getElementById("score");
    this.score.innerText = 0;
  }

  //Aquí realizamos las funciones
  drawBackground = () => {
    ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height);
  };

  clearCanvas = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  //updateScore = (score) => {
  //  this.score += score;
  // };

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
    this.veggies1.drawImage();
    this.veggies2.drawImage();
    this.veggies3.drawImage();
    this.pizza.drawImage();

    // Comprobar si tocan
    // this.pizzapug.checkColision(
    //   this.updateScore,
    //   this.pizza,
    //   this.veggies1,
    //   this.veggies2,
    //   this.veggies3
    // );
    // 4. recursión para la animación
    requestAnimationFrame(this.gameLoop);
  };
}
