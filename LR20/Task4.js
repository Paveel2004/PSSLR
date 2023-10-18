let container = document.querySelector(".container");
let ball = document.querySelector(".ball");

let maxX = container.clientWidth - ball.offsetWidth;
let maxY = container.clientHeight - ball.offsetHeight;

let size = 30;
let start = null;
let duration = 1;

function step(timestamp) {
  let progress, x, y;
  if (start === null) start = timestamp;

  progress = (timestamp - start) / duration / 2000;

  x = progress * maxX / size;
  y = 2 * Math.sin(x);

  ball.style.left = Math.min(maxX, size * x) + "px";
  ball.style.top = maxY / 2 + (size * y) + "px";

  if (progress >= 1) start = null;
  requestAnimationFrame(step);
}
requestAnimationFrame(step);