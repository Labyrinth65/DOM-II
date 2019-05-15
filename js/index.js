// Your code goes here
//ten unique event listeners
const logo = document.querySelector("header img");
logo.addEventListener("dblclick", function() {
  alert("Don't click me!");
});

const title = document.querySelector(".logo-heading");
title.addEventListener("mouseover", function() {
  title.style.color = "green";
});

title.addEventListener("mouseout", function() {
  title.style.color = "black";
});

const navItems = document.querySelectorAll("nav a");
document.addEventListener("keydown", function() {
  navItems.forEach(el => (el.style.color = "blue"));
});

document.addEventListener("scroll", function() {
  navItems.forEach(el => (el.style.color = "black"));
});

const destImg = document.querySelector(".content-destination img");
destImg.addEventListener("mouseenter", function() {
  destImg.style.border = "thin solid red";
});

destImg.addEventListener("mouseleave", function() {
  destImg.style.border = "none";
});

const midImgs = document.querySelectorAll(".content-section img");
midImgs.forEach(el =>
  el.addEventListener("dragend", function() {
    alert("Please don't drag me bro");
  })
);

const welcome = document.querySelector(".intro h2");
welcome.addEventListener("contextmenu", function() {
  welcome.style.fontSize = "50px";
});

window.addEventListener("resize", function() {
  welcome.style.background = "aqua";
});

//prevent event propagation
const bodyTitle = document.querySelectorAll(".text-content h2");
bodyTitle.forEach(el =>
  el.addEventListener("click", function(event) {
    el.style.color = el.style.color === "orange" ? "black" : "orange";
    event.stopPropagation();
  })
);

const bodyText = document.querySelectorAll(".text-content");
bodyText.forEach(el =>
  el.addEventListener("click", function() {
    if (el.style.color === "blue") {
      el.style.color = "black";
    } else {
      el.style.color = "blue";
    }
    // el.style.color = el.style.color === "blue" ? "black" : "blue";
    console.log(el.style.color);
  })
);

//preventDefault
navItems.forEach(el =>
  el.addEventListener("click", event => {
    event.preventDefault();
  })
);

//GSAP
TweenMax.to(title, 2, {
  left: 100,
  backgroundColor: "aqua",
  padding: 20
});

// drag and drop AH project

let shiftX, shiftY;

let dragged = document.querySelector(".img-content");

dragged.addEventListener("dragstart", event => {
  shiftX = event.clientX - dragged.getBoundingClientRect().left;
  shiftY = event.clientY - dragged.getBoundingClientRect().top;
});

dragged.addEventListener("dragend", event => {
  console.log(shiftX, shiftY);
  dragged.style.position = "absolute";
  dragged.style.left = event.clientX - shiftX + "px";
  dragged.style.top = event.clientY - shiftY + "px";
  console.log(event.clientY, event.clientX);
});
