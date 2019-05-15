//block goes to top of stack
const rocketArray = document.querySelector(".blocks");
const rockets = document.querySelectorAll(".block");
rockets.forEach(el =>
  el.addEventListener("click", function() {
    rocketArray.prepend(el);
  })
);

//mouse clicked moves box to the right
let holding = false;

rockets.forEach(el => el.addEventListener("mousedown", moveRight));

window.addEventListener("mouseup", stopMove);

let interval = null;

function moveRight(e) {
  holding = true;
  e.target.currentX = 0; //how to fix this
  interval = setInterval(function() {
    updatePos(e.target);
  }, 100);
}

function stopMove(e) {
  holding = false;
  clearInterval(interval);
  interval = setInterval(function() {
    updatePos(e.target);
  }, 100);
}

function updatePos(e) {
  if (holding === true && e.currentX < 500) {
    e.currentX = e.currentX + 10;
    e.style.position = "relative";
    e.style.left = e.currentX + "px";
  }
  if (holding === false && e.currentX > 0) {
    e.currentX = e.currentX - 10;
    e.style.position = "relative";
    e.style.left = e.currentX + "px";
  }
}
