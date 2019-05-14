// Your code goes here
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
