//* GLOBAL VARIABLES

let splashScreen = document.querySelector("#splash-screen");
let canvas = document.querySelector("#game-canvas");
let ctx = canvas.getContext("2d");

//* STATE MANAGAMENT FUNCTIONS

const startGame = () => {
  //splashScreen da paso al canvas
  splashScreen.style.display = "none";
  canvas.style.display = "flex";

  // empieza el juego
  let newGame = new Game();
  //console.log(newGame);
  newGame.gameLoop();
};

//* ADD EVENT lISTENERS

let eatPizzaButton = document.querySelector("#start-btn");
eatPizzaButton.addEventListener("click", startGame);
