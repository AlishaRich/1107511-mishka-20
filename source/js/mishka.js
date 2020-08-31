var mainNav = document.querySelector(".main-nav");
var navButton = document.querySelector(".main-nav__toggle");
var indexBuyButton = document.querySelector(".product-card__button");
var popup = document.querySelector(".popup-wrapper");
var catalogBuyButton = document.querySelectorAll(".card__button");
// var ymaps = document.querySelector("map");

mainNav.classList.remove("main-nav--nojs");
mainNav.classList.add("main-nav--close");

navButton.addEventListener("click", function(evt) {
  if (mainNav.classList.contains("main-nav--close")) {
    mainNav.classList.remove("main-nav--close");
    mainNav.classList.add("main-nav--open");
  } else {
    mainNav.classList.add("main-nav--close");
    mainNav.classList.remove("main-nav--open");
  }
});

if (indexBuyButton) {
indexBuyButton.addEventListener("click", function(evt) {
  popup.classList.remove("visually-hidden")
});
}

if (catalogBuyButton) {
catalogBuyButton.forEach(function(evt){
    evt.addEventListener("click", function(evt) {
    popup.classList.remove("visually-hidden")});
});
}

if (popup) {
  var closePopup = popup.querySelector(".popup-wrapper__button");
}

if (closePopup) {
closePopup.addEventListener("click", function(evt) {
  popup.classList.add("visually-hidden")
});
}

if (ymaps) {
ymaps.ready(function () {
  var map = new ymaps.Map("map", {
    center: [59.938635, 30.323118],
    zoom: 17
  });
                // Создаём макет содержимого.
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),
    myPlacemark = new ymaps.Placemark(map.getCenter(), {
        hintContent: 'Мы находимся здесь'
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: 'img/icon-map-pin.svg',
        // Размеры метки.
        iconImageSize: [67, 100],
        iconImageOffset: [-45, -100]
    }),
    map.geoObjects
    .add(myPlacemark)
    });
}
