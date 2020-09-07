ymaps.ready(function() {
    const map = new ymaps.Map("map", {
        center: [59.938635, 30.323118],
        zoom: 17
    });
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            "<div style='color: #FFFFFF; font-weight: bold;'>$[properties.iconContent]</div>"
        ),
        myPlacemark = new ymaps.Placemark(map.getCenter(), {
            hintContent: "Мы находимся здесь"
        }, {
            iconLayout: "default#image",
            iconImageHref: "img/icon-map-pin.svg",
            iconImageSize: [67, 100],
            iconImageOffset: [-45, -100]
        }),
        map.geoObjects
        .add(myPlacemark)
});
