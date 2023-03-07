// Getting reference to Canvas object
const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d');

// Setting dimensions of canvas
const canvasWidth = 700;
const canvasHeight = 500;
const paddleWidth = 15;
const paddleHeight = 80;
const radius = 10;

// render rect
function renderBackground() {
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);
}

//render circles
function renderBall(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.fillStyle = 'red';
  ctx.fill();
}

function renderPaddle(posY) {
  ctx.fillStyle = 'white';
  ctx.fillRect(20, posY, paddleWidth, paddleHeight);
}

let posX = 10;
let vx = +2;
let paddleLeftY = 0;

setInterval(() => {
  renderBackground();
  renderBall(posX, 20);
  renderPaddle(paddleLeftY);
  posX += vx;
  if (posX + radius >= canvasWidth || posX - radius <= 0) {
    vx = -1 * vx;
  }
  // Vertical axis
}, 17);

document.addEventListener('keypress', (e) => {
  if (e.key === 's') {
    paddleLeftY += 5;
  }
  if (e.key === 'w') {
    paddleLeftY -= 5;
  } 
});