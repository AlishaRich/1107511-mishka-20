var button = document.querySelectorAll(".card__button");
var popup = document.querySelector(".popup-wrapper");
var close = popup.querySelector(".popup-wrapper__button");

[].forEach.call(button, function(evt){
    evt.addEventListener("click", function (del) {
    popup.classList.remove("visually-hidden")});
});

close.addEventListener("click", function () {
  popup.classList.add("visually-hidden")
});
