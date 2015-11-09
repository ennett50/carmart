var ui = {
    init: function () {

        this.phoneMask();

        this.fancyBox();

        this.sliderCatalog();

        this.changeCity();

    },
    phoneMask: function () {
        $("input.js-phone-mask").mask("+7(999) 999-99-99");
    },
    fancyBox: function () {
        $(".js-fancybox").fancybox({
            padding: 0,
            margin: 40,
            loop: false,
            closeBtn: true,
            wmode: 'transparent',
            allowfullscreen: 'true',
            allowscriptaccess: 'always'

        });
    },
    sliderCatalog: function () {
        $('.js-catalog-slider').bxSlider({
            mode: 'fade',
            pager: false,
            controls: true
        });
    },
    changeCity : function(){
        $('.js-change-city').click(function(){
            $('.main-search-popup').fadeIn();
        });
        $('.js-cancel-search').click(function(){
            $('.main-search-popup').fadeOut();
        })
    }

};


ymaps.ready(function () {
    var myMap = new ymaps.Map('js-map-search', {
            center: [59.943256,30.331282],
            zoom: 12
        }, {
            searchControlProvider: 'yandex#search'
        }),
        myPlacemark = new ymaps.Placemark([59.943256,30.331282], {
            balloonContent: 'Санкт-Петербург'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '/images/icon/icon-map.png',
            // Размеры метки.
            iconImageSize: [49, 69],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-25, -69]
        });

    myMap.geoObjects.add(myPlacemark);
    myMap.behaviors.disable('scrollZoom');
});