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
audio.volume = 0.1;
const addName = document.querySelector("#name-input");
const ulistName = document.querySelector("#name-list");
const addNameBtn = document.querySelector("#btn-add");
const uListUpdateNamScor = document.querySelector("#nameandscore-list");
let playerName = "";

//* STATE MANAGAMENT FUNCTIONS

const addHoomanName = () => {
  playerName = addName.value;
  //crear un nuevo elemento en la lista
  let newNameList = document.createElement("li");
  //crear el innerText del nuevo elemento li
  newNameList.innerText = "Welcome " + playerName + "! Are you ready??";
  //agregar el elemento li a la ul que ya tenemos
  ulistName.appendChild(newNameList);
  //limpiar el input
  addName.value = " ";
};

const startGame = () => {
  //música Maestro!
  audio.play().then(() => {
    return true;
  });
  audio.loop = true;

  //splashScreen da paso al canvas
  splashScreen.style.display = "none";
  canvas.style.display = "flex";
  gameOverScreen.style.display = "none";

  // empieza el juego
  let newGame = new Game();

  document.addEventListener("keydown", (event) => {
    if (event.key.includes("Arrow")) {
      newGame.pizzapug[event.key]();
    }
  });
  //poner el score a 0
  newGame.scoreDom.innerText = 0;
  //limpiar el "li" creado con el nombre y el score de la jugada anterior
  newGame.uListUpdateNamScor.innerText = " ";

  newGame.gameLoop();
};

//* ADD EVENT lISTENERS

eatPizzaButton.addEventListener("click", startGame);

playAgainButton.addEventListener("click", startGame);

addNameBtn.addEventListener("click", addHoomanName);
