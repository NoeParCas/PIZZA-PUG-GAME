//* GLOBAL VARIABLES

const splashScreen = document.querySelector("#splash-screen");
const canvas = document.querySelector("#game-canvas");
const ctx = canvas.getContext("2d");
let newGame;
const eatPizzaButton = document.querySelector("#start-btn");
const score = document.querySelector("#score-container");
//* STATE MANAGAMENT FUNCTIONS

const startGame = () => {
  //splashScreen da paso al canvas
  console.log("click");
  splashScreen.style.display = "none";
  canvas.style.display = "flex";
  //score.style.display = "block";

  // empieza el juego
  let newGame = new Game();
  //console.log(newGame);
  document.addEventListener("keydown", (event) => {
    if (event.key.includes("Arrow")) {
      newGame.pizzapug[event.key]();
    }
  }); //esta sintaxis la vi en un video de youtube, es buena práctica¿?

  newGame.gameLoop();

  eatPizzaButton.removeEventListener("click", startGame); // quitar el addevEventListener para evitar bugs,  o que el juego se vuelva a iniciar de 0
};

//* ADD EVENT lISTENERS

eatPizzaButton.addEventListener("click", startGame);
