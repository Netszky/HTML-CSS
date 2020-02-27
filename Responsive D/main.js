jQuery(function ($) {
    document.getElementsByClassName
    $('.burger__wrapper').on('click', function () {
        $('.sidebar__mobile').addClass('is__open');
        $('.overlay').show();
        $('body').addClass('overflow_hidden');
        $('.burger__menu').addClass('is-animate');
    })
    document.getElementsByClassName
    $('.overlay').on('click', function () {
        $('.overlay').hide();
        $('.sidebar__mobile').removeClass('is__open');
        $('body').removeClass('overflow_hidden');
        $('.burger__menu').removeClass('is-animate');
    })

    function calculateHeroHeight() {
        var heroHeight;
        var headerHeight;
        var screenHeight;

        screenHeight = $(window).height();
        headerHeight = $('.header__main').height();
        heroHeight = (screenHeight - headerHeight);
        $('.home__hero').css('height', heroHeight);
    }

    $(window).on('resize', calculateHeroHeight);
    $(window).load(calculateHeroHeight());
})