class Game {
  constructor() {
    //! PROPIEDADES DEL JUEGO
    this.bg = new Image();
    this.bg.src = "./images/canvasbackground.jpg";
    this.pizzapug = new Pizzapug();
    this.carrotArr = [new Food("./images/carrot.png", 80)];
    this.brocoliArr = [new Food("./images/brocoli.png", 80)];
    this.pizzaArr = [new Food("./images/pizza.png", 130)];
    this.pizza = new Food("./images/pizza.png");
    this.isGameOn = true;
    this.pizzaScore = 1000;
    this.scoreDom = document.querySelector("#score");
    this.uListUpdateNamScor = document.querySelector("#nameandscore-list");
    this.addName = document.querySelector("#name-input");
    this.score = 0;
    this.yumy = new Image();
    this.yumy.src = "images/yumimage.png";
    this.yumOn = false;
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
      //actualizar el nombre y el contador
      this.updateNameScore();
      //paro música
      audio.pause().then(() => {
        return true;
      });
      audio.loop = false;
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
      //this.yumOn = true;
      //this.yumyText();
      ctx.drawImage(this.yumy, this.pizzapug.x, this.pizzapug.y, 50, 50);
      //this.yumyText();
      //setInterval(
      //() => ctx.fillText("YUM!", this.pizzapug.x, this.pizzapug.y),
      //  2000
      //);
      //ctx.strokeText("YUM!", this.pizzapug.x, this.pizzapug.y);
      //console.log("YUM");
      //acumular el score en una variable
      this.score += this.pizzaScore;
      //acceder al valor del DOM
      this.scoreDom.innerText = this.score;
      //console.log(this.scoreDom.innerText);
    }
  };

  yumyText = () => {
    if ((this.yumOn = true)) {
      setInterval(() => {
        ctx.drawImage(this.yumy, this.pizzapug.x, this.pizzapug.y, 50, 50);
      }, 2000);
    }
  };

  moreVeggies = () => {
    let lastBrocoli = this.brocoliArr[this.brocoliArr.length - 1];
    let lastCarrot = this.carrotArr[this.carrotArr.length - 1];

    if (lastBrocoli.y >= canvas.height) {
      //this.x = Math.floor(Math.random() * (1080 - 1)) + 1;
      this.brocoliArr.push(new Food("./images/brocoli.png", 80));
    } else if (lastCarrot.y >= canvas.height) {
      // this.x = Math.floor(Math.random() * (1080 - 1)) + 1;
      this.carrotArr.push(new Food("./images/carrot.png", 80));
    }
  };

  morePizza = () => {
    let lastPizza = this.pizzaArr[this.pizzaArr.length - 1];

    if (lastPizza.y >= canvas.height) {
      this.pizzaArr.push(
        new Food("./images/pizza.png", 130),
        new Food("./images/pizza.png", 130)
      );
    }
  };

  updateNameScore = () => {
    let scoreDom = this.scoreDom.innerText;
    let newNameScoreList = document.createElement("li");

    if (scoreDom <= 2000) {
      newNameScoreList.innerText =
        playerName +
        " you achieved " +
        scoreDom +
        " points. That is... a waste of pizza!";
    } else if (scoreDom <= 5000) {
      newNameScoreList.innerText =
        "Well ..." +
        playerName +
        " you achieved " +
        scoreDom +
        ". Not bad hooman.";
    } else if (scoreDom <= 10000) {
      newNameScoreList.innerText = "WOW " + playerName + " you ate " + scoreDom;
      +" points in pizzas!";
    } else {
      newNameScoreList.innerText =
        scoreDom + " points " + playerName + " you BEAST! ";
    }

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
    this.morePizza();

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
