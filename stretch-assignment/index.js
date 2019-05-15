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
let interval = null;

function updatePos(e) {
  if (holding === true && e.currentX < 500) {
    e.currentX = e.currentX + 10;
    e.style.position = "relative";
    e.style.left = e.currentX + "px";
  }
}

function returnPos(e) {
  if (holding === false && e.currentX > 0) {
    e.currentX = e.currentX - 10;
    e.style.left = e.currentX + "px";
  }
}

function moveRight(e) {
  holding = true;
  e.target.currentX = 0;
  interval = setInterval(function() {
    updatePos(e.target);
  }, 100);
}

rockets.forEach(el => el.addEventListener("mousedown", moveRight));

//mouseup returns rockets
window.addEventListener("mouseup", stopMove);

// const rocketRed = document.querySelector(".block--red");
// const rocketBlue = document.querySelector(".block--blue");
// const rocketGreen = document.querySelector(".block--green");
// const rocketPink = document.querySelector(".block--pink");
// const rocketGray = document.querySelector(".block--gray");

// function stopMove() {
//   holding = false;
//   clearInterval(interval);
//   interval = setInterval(function() {
//     returnPos(rocketRed);
//   }, 100);
//   interval = setInterval(function() {
//     returnPos(rocketBlue);
//   }, 100);
//   interval = setInterval(function() {
//     returnPos(rocketGreen);
//   }, 100);
//   interval = setInterval(function() {
//     returnPos(rocketPink);
//   }, 100);
//   interval = setInterval(function() {
//     returnPos(rocketGray);
//   }, 100);
// }

function stopMove() {
  holding = false;
  clearInterval(interval);
  rockets.forEach(function(el) {
    interval = setInterval(function() {
      returnPos(el);
    }, 100);
  });
}
