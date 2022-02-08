//* GLOBAL VARIABLES

const splashScreen = document.querySelector("#splash-screen");
const canvas = document.querySelector("#game-canvas");
const gameOverScreen = document.querySelector("#gameover-screen");
const ctx = canvas.getContext("2d");
const eatPizzaButton = document.querySelector("#start-btn");
const playAgainButton = document.querySelector("#restart-btn");
let newGame;
const score = document.querySelector("#score-container");
let audio = new Audio();
audio.src = "./audio/audiogame.mp3";
audio.volume = 0.2;

//* STATE MANAGAMENT FUNCTIONS

const startGame = () => {
  //splashScreen da paso al canvas
  //console.log("click");
  audio.play().then(() => {
    return true;
  });
  audio.loop = true;
  //audio.reset;

  splashScreen.style.display = "none";
  canvas.style.display = "flex";
  gameOverScreen.style.display = "none";
  score.style.display = "block";
  // empieza el juego
  let newGame = new Game();
  //console.log(newGame);
  document.addEventListener("keydown", (event) => {
    if (event.key.includes("Arrow")) {
      newGame.pizzapug[event.key]();
    }
  }); //esta sintaxis la vi en un video de youtube, es buena práctica¿?

  newGame.gameLoop();

  //eatPizzaButton.removeEventListener("click", startGame); // quitar el addevEventListener para evitar bugs,  o que el juego se vuelva a iniciar de 0
};

//* ADD EVENT lISTENERS

//eatPizzaButton.addEventListener("click", startGame);
eatPizzaButton.addEventListener("click", () => {
  startGame();
  //this.audio.audioGame();
  //console.log("MUSICA!");
});

playAgainButton.addEventListener("click", () => {
  //this.audioGame.pause();
  //this.audioGame();
  startGame();
});
