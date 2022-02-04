PIZZA PUG GAME

DESCRIPTION

A hungry pug is around our galaxy and his greatest desire is to eat. But be careful! Veggies are extremely unhealthy!! They can send you directly to the Game Over screen. May the pizza be with you!

MVP (DOM-CANVAS)

The game has a pug that moves around the canvas. Vertically and horizontally.
Food start to fall from the top of the canvas.
Veggies are so unhealthy that can take you to the Game Over Screen.
Pizza gives is the only food you can eat.

BACKLOG

Iteraction with food. Veggies ends game and pizza gives you score (bonus).
Add music to the game screen. BONUS
Add players name. BONUS
Add scoreboard. BONUS

DATA STRUCTURE

main.js

-buildSplashScreen () {}
-buildGameScreen () {}
-buildGameOverScreen () {}

game.js

-Game () {}
-gameLoop () {}
-checkCollisions (){}
-clearCanvas () {}
-updateCanvas () {}
-drawCanvas() {}
-gameOver () {}
-addFood () {}

pug.js

-Pug (){this.x; this.y; this.direction; this.size}
-draw (){}
-move () {}

brocoli.js
-brocoli () { this.x; this.y; this.direction; this.size }
-draw () {}
-move () {}

carrot.js
-carrot () { this.x; this.y; this.direction; this.size }
-draw () {}
-move () {}

pizza.js
-pizza () { this.x; this.y; this.direction; this.size }
-draw () {}
-move () {}

STATES & STATES TRANSITIONS

-splashScreen
-gameScreen
-gameOverScreen

TASK

Task definition in order of priority
