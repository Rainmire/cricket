# Canvas Cricket - A Pixel-Collision Based Physics Engine Demo

### Background and Overview
Cricket is a demo in pixel collisions presented as a quick puzzle game. The objective is to move the cricket to the goal using the keyboard to move and the mouse to draw platforms to stand on.

### Functionality & MVP
* User can control the cricket using arrow keys and spacebar.
* User can draw on the canvas using the mouse to draw terrain.
* Physics engine applies gravity and detects collision between the cricket and terrain, preventing the cricket from moving through drawn terrain.

### Wireframes

![](https://github.com/Rainmire/cricket/blob/master/docs/Wireframes.jpg)

### Architecture and Technologies
This project will be implemented with the following technologies:
* Vanilla JavaScript for overall structure and game logic
* Webpack to bundle and serve up the various scripts
* `HTML5 Canvas` for rendering terrain and tanks

The architecture for this project will be:
`map.js`: houses the physics engine and renders the cricket
`drawcanvas.js`: allows user to draw terrain on the canvas
`game.js`: initializes the game, and resets the game when the user reaches the goal

### Implementation Timeline

Day 1:
* Setup Webpack
* Setup entry file

Day 2:
* Begin working on `map.js` physics engine

Day 3:
* Complete `map.js` and `game.js`

Day 4:
* Complete `drawcanvas.js`

Day 5:
* Game testing
