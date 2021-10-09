(function ($) {
    $(function () {

        $('.home-catalog__tabs').on('click', 'button:not(.active)', function () {
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('.home-catalog').find('.home-catalog__cont-block').removeClass('active').eq($(this).index()).addClass('active');
        });

        $('.home-info__tabs').on('click', 'button:not(.active)', function () {
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('.home-info').find('.home-info__cont-block').removeClass('active').eq($(this).index()).addClass('active');
        });

        $('.product-info__tabs').on('click', '.product-info__tabs-block:not(.active)', function () {
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('.product-info').find('.product-info__cont-block').removeClass('active').eq($(this).index()).addClass('active');
        });

    });
})(jQuery);
$('.home-offer__range-title').css('left', 40 / 2 + "%");
document.querySelectorAll('.home-offer__range').forEach(inp => {
    inp.closest('.home-offer__range-wrap').querySelector('.home-offer__range-title span').innerHTML = inp.querySelector('input').value;
    inp.addEventListener('change', function (e) {
        inp.closest('.home-offer__range-wrap').querySelector('.home-offer__range-title span').innerHTML = inp.querySelector('input').value;
        $('.home-offer__range-title').css('left', (inp.querySelector('input').value) / 2 + "%");

    });
});
$('.home-faq__name').on("click", function () {
    $(this).closest('.home-faq__block').toggleClass("active");
});
$('.product-left__slider img').on("click", function () {
    $('.product-left__img img').attr("src", $(this).attr("src"));
});
$('.product-left__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    slide: 'img',
    prevArrow: ".product-left__slider-prev",
    nextArrow: ".product-left__slider-next",
    responsive: [{
        breakpoint: 1200,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false
        }
    }]
});