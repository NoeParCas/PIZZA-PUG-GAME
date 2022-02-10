PIZZA PUG GAME

DESCRIPTION

A hungry pug is around our galaxy and his greatest desire is to eat. But be careful! Veggies are extremely unhealthy!! They can send you directly to the Game Over screen. May the pizza be with you!

MVP (DOM-CANVAS)

The game has a pug that moves around the canvas. Vertically and horizontally.
Food start to fall from the top of the canvas.
Veggies are so unhealthy that can take you to the Game Over Screen.
Pizza is the only food you can eat. It desapears when you touch it.

BACKLOG

Scoreboard, each pizza 1000 points
Add music to the game screen.
Add players name at the beginning of the game.
Add a message at the end with players name and score.
Increase the speed of the falling food

DATA STRUCTURE

main.js

-buildSplashScreen () {}
-buildGameScreen () {}
-buildGameOverScreen () {}
-addHoomanName () {}
-startGame () {}

game.js

-Game () {}
-gameLoop () {}
-checkCollisions (){}
-clearCanvas () {}
-updateCanvas () {}
-drawCanvas() {}
-gameOver () {}
-addFood () {}

pizzapug.js

-Pug (){this.x; this.y; this.direction; this.size}
-draw (){}
-move () {}

food.js
-brocoli () { this.x; this.y; this.direction; this.size }
-draw () {}
-move () {}

STATES & STATES TRANSITIONS

-splashScreen
-gameScreen
-gameOverScreen

TASK

Task definition in order of priority
