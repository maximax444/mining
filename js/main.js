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



$(".inp1").on("change", function () {
    $(this).closest(".catalog-filter__ranges").find(".slider-1").val($(this).val());
});
$(".inp2").on("change", function () {
    $(this).closest(".catalog-filter__ranges").find(".slider-2").val($(this).val());
});

$(".slider-1").on("input", function () {
    let sliderOne = $(this).val();
    let sliderTwo = $(this).closest(".catalog-filter__ranges-wrap").find(".slider-2").val();
    let sliderMaxValue = $(this).attr('max');
    let sliderTrack = $(this).closest(".catalog-filter__ranges-wrap").find(".slider-track");
    if ((parseInt(sliderTwo) - parseInt(sliderOne)) <= 0) {
        $(this).val(parseInt(sliderTwo));
        $(this).closest(".catalog-filter__ranges").find(".catalog-filter__ranges-inputs .inp1").val(sliderTwo);
    } else {
        $(this).closest(".catalog-filter__ranges").find(".catalog-filter__ranges-inputs .inp1").val(sliderOne);
    }
    percent1 = (sliderOne / sliderMaxValue) * 100;
    percent2 = (sliderTwo / sliderMaxValue) * 100;
    sliderTrack.css('background', `linear-gradient(to right, #dadae5 ${percent1}% , #3264fe ${percent1}% , #3264fe ${percent2}%, #dadae5 ${percent2}%)`);
});
$(".slider-2").on("input", function () {
    let sliderOne = $(this).closest(".catalog-filter__ranges-wrap").find(".slider-1").val();
    let sliderTwo = $(this).val();
    let sliderMaxValue = $(this).attr('max');
    let sliderTrack = $(this).closest(".catalog-filter__ranges-wrap").find(".slider-track");
    if ((parseInt(sliderTwo) - parseInt(sliderOne)) <= 0) {
        $(this).val(parseInt(sliderOne));
        $(this).closest(".catalog-filter__ranges").find(".catalog-filter__ranges-inputs .inp2").val(sliderOne);
    } else {
        $(this).closest(".catalog-filter__ranges").find(".catalog-filter__ranges-inputs .inp2").val(sliderTwo);
    }

    percent1 = (sliderOne / sliderMaxValue) * 100;
    percent2 = (sliderTwo / sliderMaxValue) * 100;
    sliderTrack.css('background', `linear-gradient(to right, #dadae5 ${percent1}% , #3264fe ${percent1}% , #3264fe ${percent2}%, #dadae5 ${percent2}%)`);
});
$('.catalog-sort__filter').on('click', function () {
    $('.catalog-filter').addClass('active');
});
$('.catalog-filter__btn, .catalog-filter__close').on('click', function () {
    $('.catalog-filter').removeClass('active');
});
