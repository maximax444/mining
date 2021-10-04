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