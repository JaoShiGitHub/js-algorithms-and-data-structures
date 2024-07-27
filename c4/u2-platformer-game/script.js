const startBtn = document.getElementById("start-btn");
const canvas = document.getElementById("canvas");
const startScreen = document.querySelector(".start-screen");
const checkpointScreen = document.querySelector(".checkpoint-screen");
const checkpointMessage = document.querySelector(".checkpoint-screen > p");

const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;
const gravity = 0.5;
let isCheckpointCollisionDetectionActive = true;

const proportionalSize = (size) => {
  return innerHeight < 500 ? Math.ceil((size / 500) * innerHeight) : size;
}

class Player {
  constructor() {
    this.position = {
      x: proportionalSize(10),
      y: proportionalSize(400),
    };
    this.velocity = {
      x: 0,
      y: 0,
    };
    this.width = proportionalSize(40);
    this.height = proportionalSize(40);
  }
  
// For creating the player's width, height, position, and fill color
draw() {
  ctx.fillStyle = "#99c9ff";  // player colour
  ctx.fillRect(this.position.x, this.position.y, this.width, this.height); // player's shape
 }
  
// updating the player's position and velocity as it moves throughout the game
  update() {
    this.draw();
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    
    // protect the player to not move past the height of the canvas.
    if (this.position.y + this.height + this.velocity.y <= canvas.height) {
      if (this.position.y < 0) {
        this.position.y = 0;
        this.velocity.y = gravity;
      }
      this.velocity.y += gravity;
    } else {
      this.velocity.y = 0;
    }
    
    if (this.position.x < this.width) {
       this.position.x = this.width;
    }

    //  Check if the player's x position has exceeded the right edge of the canvas
    //  If it has, set the player's x position to the maximum value so the player does not accidentally go off screen to the right
    if (this.position.x >= canvas.width - this.width * 2) {
      this.position.x = canvas.width - this.width * 2;
    }
  }
}

const player = new Player()

const animate = () => {};

const startGame = () => {
  canvas.style.display = "block";
  startScreen.style.display = "none";
  player.draw();
}

startBtn.addEventListener("click", startGame);
