var button = document.querySelector(".product-card__button");
var popup = document.querySelector(".popup-wrapper");
var close = popup.querySelector(".popup-wrapper__button");

button.addEventListener("click", function () {
  popup.classList.remove("visually-hidden")
});

close.addEventListener("click", function () {
  popup.classList.add("visually-hidden")
});
