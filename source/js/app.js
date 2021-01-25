'use strict';

(function () {
  let pageNav = document.querySelector('.page-nav');
  let pageNavToggle = document.querySelector('.page-nav__toggle');

  pageNavToggle.addEventListener('click', function () {
    pageNav.classList.toggle('page-nav--show');
  });
})();

document.addEventListener("DOMContentLoaded", function () {
  (function () {
    let map = document.querySelector("#map");
    if (map === null) {
      return;
    }

    ymaps.ready(init);

    function init() {
      const coord = [34.869726184622785, -111.76009820576179];
      let myMap = new ymaps.Map("map", {
        center: coord,
        zoom: 10
      });
      let myPlacemark = new ymaps.Placemark(coord, {
          hintContent: "город Седона"
        }, {
          iconLayout: "default#image",
          iconImageHref: "img/map-marker.svg",
          iconImageSize: [27, 27],
          iconImageOffset: [-13, -13]
        }
      );
      myMap.geoObjects.add(myPlacemark);
    }
  })();
});
