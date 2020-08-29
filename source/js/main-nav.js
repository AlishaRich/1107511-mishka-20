var menu = document.querySelector(".main-nav");
var button = document.querySelector(".main-nav__toggle");

menu.classList.remove("main-nav--nojs");
menu.classList.add("main-nav--close");

button.addEventListener("click", function() {
  if (menu.classList.contains("main-nav--close")) {
    menu.classList.remove("main-nav--close");
    menu.classList.add("main-nav--open");
  } else {
    menu.classList.add("main-nav--close");
    menu.classList.remove("main-nav--open");
  }
});
