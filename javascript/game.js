class Game {
  constructor() {
    //! PROPIEDADES DEL JUEGO
    this.bg = new Image();
    this.bg.src = "./images/canvasbackground.jpg";
    this.pizzapug = new Pizzapug();
    this.carrotArr = [new Food("./images/carrot.png")];
    this.brocoliArr = [new Food("./images/brocoli.png")];
    this.pizzaArr = [new Food("./images/pizza.png", 130)];
    this.pizza = new Food("./images/pizza.png");
    this.isGameOn = true;
    this.pizzaScore = 1000;
    this.scoreDom = document.querySelector("#score");
    this.score = 0;
    this.uListUpdateNamScor = document.querySelector("#nameandscore-list");
    this.addName = document.querySelector("#name-input");
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
      //paro música
      //oculto canvas
      canvas.style.display = "none";
      //game over Screen
      gameOverScreen.style.display = "flex";
      //actualizar el nombre y el contador
      this.updateNameScore();
    }
  };

  checkScore = (pizza, i) => {
    if (
      this.pizzapug.x < pizza.x + pizza.width &&
      this.pizzapug.x + this.pizzapug.width > pizza.x &&
      this.pizzapug.y < pizza.y + pizza.height &&
      this.pizzapug.height + this.pizzapug.y > pizza.y
    ) {
      //console.log("COLISIOOOOON");
      //eliminar pizza
      this.pizzaArr.splice(this.pizzaArr[i], 1);
      this.pizzaArr.push(new Food("./images/pizza.png", 130));
      //acumular el score en una variable
      this.score += this.pizzaScore;
      //acceder al valor del DOM
      this.scoreDom.innerText = this.score;
      //console.log(this.scoreDom.innerText);
    }
  };

  moreVeggies = () => {
    let lastBrocoli = this.brocoliArr[this.brocoliArr.length - 1];
    let lastCarrot = this.carrotArr[this.carrotArr.length - 1];

    if (lastBrocoli.y >= canvas.height) {
      //this.x = Math.floor(Math.random() * (1080 - 1)) + 1;
      this.brocoliArr.push(new Food("./images/brocoli.png"));
    } else if (lastCarrot.y >= canvas.height) {
      // this.x = Math.floor(Math.random() * (1080 - 1)) + 1;
      this.carrotArr.push(new Food("./images/carrot.png"));
    }
  };

  foodSpeed = () => {
    setTimeout(() => (this.food.gravity = 3), 4000);
    //console.log("foodSpeed");
    setTimeout(() => (this.food.gravity = 4), 8000);
    setTimeout(() => (this.food.gravity = 5), 15000);
    setTimeout(() => (this.food.gravity = 6), 20000);
  };

  updateNameScore = () => {
    let addNameDom = this.addName.value;
    let scoreDom = this.scoreDom.innerText;
    let newNameScoreList = document.createElement("li");
    newNameScoreList.innerText =
      "Well ..." + addNameDom + " you achieved " + scoreDom;

    uListUpdateNamScor.appendChild(newNameScoreList);
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

    this.brocoliArr.forEach((eachFood) => {
      eachFood.drawImage();
    });

    this.carrotArr.forEach((eachFood) => {
      eachFood.drawImage();
    });

    this.pizzaArr.forEach((eachFood) => {
      eachFood.drawImage();
    });

    //añadir más vegetales a los arr
    this.moreVeggies();
    //this.foodSpeed();

    // Comprobar si colisionan los veggies
    this.carrotArr.forEach((eachCarrot) => {
      this.checkColision(eachCarrot);
    });

    this.brocoliArr.forEach((eachBrocoli) => {
      this.checkColision(eachBrocoli);
    });

    //actualiza el score y elimina pizza del arr
    this.pizzaArr.forEach((eachPizza, i) => {
      this.checkScore(eachPizza, i);
    });

    // 4. recursión para la animación
    if (this.isGameOn) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
