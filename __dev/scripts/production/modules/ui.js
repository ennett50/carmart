var ui = {
    init: function () {

        this.phoneMask();

        this.fancyBox();

        this.sliderCatalog();





    },
    phoneMask: function () {
        $("input.js-phone-mask").mask("+7(999) 999-99-99");
    },
    fancyBox: function(){
        $(".js-fancybox").fancybox({
            padding: 0,
            margin: 40,
            loop: false,
            closeBtn: true,
            wmode: 'transparent',
            allowfullscreen   : 'true',
            allowscriptaccess : 'always',

        });
    },
    sliderCatalog: function(){
        $('.js-catalog-slider').bxSlider({
            mode: 'fade',
            pager: false,
            controls: true
        });
    }

};
