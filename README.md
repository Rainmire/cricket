# BattleTanks - Turn-Based Projectile Combat Game

### Background and Overview
BattleTanks is a game where you control a tank and take turns playing against an AI opponent. Tanks can fire projectiles that are affected by gravity and do damage on hit. When the opponent's HP drops to 0, you win!

### Functionality & MVP
* Tanks can move across the surface of the terrain and have a certain amount of HP. When HP drops to zero, the tank is destroyed.
* Tanks can shoot projectiles which travel a distance based on the amount of power the player sets before firing.
* Projectiles are affected by gravity and will drop with distance.
* AI opponent moves and calculates projectile path when attempting to shoot the player.

### Wireframes
The terrain will consist of hills on which the two tanks will be placed. At the bottom is a slider to adjust the power of the shot and a fire button which is active on the player's turn.

![](https://github.com/Rainmire/tanks/blob/master/docs/Wireframes.png)

### Architecture and Technologies
This project will be implemented with the following technologies:
* Vanilla JavaScript for overall structure and game logic
* Webpack to bundle and serve up the various scripts
* `HTML5 Canvas` for rendering terrain and tanks

The architecture for this project will be:
`map.js`: this script will handle rendering the game
`tanks.js`: this script will handle the logic for tank actions
`computerplayer.js`: this script allows the AI to make the best possible moves
`game.js`: this script handles the game logic, including turns and game over

### Implementation Timeline

Day 1:
* Setup Webpack
* Setup entry file

Day 2:
* complete `map.js` and make sure it renders properly

Day 3:
* Complete `game.js` and `tanks.js`
* Make sure game is playable

Day 4:
* Complete `computerplayer.js`
* Make sure AI works

Bonus:
Generate terrain dynamically
