const mainNav = document.querySelector(".main-nav");
const navButton = document.querySelector(".main-nav__toggle");
const indexBuyButton = document.querySelector(".product-card__button");
const popup = document.querySelector(".popup-wrapper");
const catalogBuyButton = document.querySelectorAll(".card__button");

mainNav.classList.remove("main-nav--nojs");
mainNav.classList.add("main-nav--close");

navButton.addEventListener("click", function() {
    if (mainNav.classList.contains("main-nav--close")) {
        mainNav.classList.remove("main-nav--close");
        mainNav.classList.add("main-nav--open");
    } else {
        mainNav.classList.add("main-nav--close");
        mainNav.classList.remove("main-nav--open");
    }
});

if (indexBuyButton) {
    indexBuyButton.addEventListener("click", function() {
        popup.classList.remove("popup-wrapper--hide");
    });
}

if (catalogBuyButton) {
    catalogBuyButton.forEach(function(evt) {
        evt.addEventListener("click", function() {
            popup.classList.remove("popup-wrapper--hide");
        });
    });
}

document.addEventListener("keydown", function() {
    const key = event.key;
    if (key === "Escape") {
        popup.classList.add("popup-wrapper--hide");
    }
});
