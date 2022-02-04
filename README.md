Pizza Pug Game

DESCRIPTION
A hungry pug is around our galaxy and his greatest desire is to eat. But be careful! Veggies are extremely unhealthy!! They can send you directly to the Game Over screen. May the pizza be with you!

MVP (DOM-CANVAS)

1. The game has a pug that moves around the canvas. Vertically and horizontally.
2. Food start to fall from the top of the canvas.
3. Veggies are so unhealthy that can take you to the Game Over Screen.
4. Pizza gives is the only food you can eat.

BACKLOG

1. The pug can move around the canvas.
2. Iteraction with food. Veggies ends game and pizza gives you score (bonus).
3. Add music to the game screen. BONUS
4. Add players name. BONUS
5. Add scoreboard. BONUS

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

States y States Transitions

-splashScreen
-gameScreen
-gameOverScreen

Task
Task definition in order of priority
