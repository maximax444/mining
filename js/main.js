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
        $('.cart-take__tabs').on('click', 'button:not(.active)', function () {
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('.cart-take').find('.cart-take__cont-block').removeClass('active').eq($(this).index()).addClass('active');
        });

        $('.product-info__tabs').on('click', '.product-info__tabs-block:not(.active)', function () {
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('.product-info').find('.product-info__cont-block').removeClass('active').eq($(this).index()).addClass('active');
        });



    });
})(jQuery);
$('input[type="tel"]').inputmask("+7 (999) 999-99-99");
$('.home-offer__range-title').css('left', 40 / 2 + "%");
document.querySelectorAll('.home-offer__range').forEach(inp => {
    inp.closest('.home-offer__range-wrap').querySelector('.home-offer__range-title span').innerHTML = inp.querySelector('input').value;
    inp.addEventListener('input', function (e) {
        inp.closest('.home-offer__range-wrap').querySelector('.home-offer__range-title span').innerHTML = inp.querySelector('input').value;
        $('.home-offer__range-title').css('left', (inp.querySelector('input').value) / 2 + "%");

    });
});
$('.home-faq__name:not(.repair-price__name_empty)').on("click", function () {
    $(this).closest('.home-faq__block').toggleClass("active");
});
$('.product-left__slider > img').on("click", function () {
    $('.product-left__img img').attr("src", $(this).attr("src"));
});
$('.cart__next').on("click", function (e) {
    e.preventDefault();
    $(this).addClass('hide');
    $(this).next('.cart-step').addClass('cart-step_open');
    $(this).next('.cart-step').removeClass('cart-step_close');
    $(this).next('.cart-step').next('.cart__next').removeClass('hide');
    console.log(1);
    if ($(this).prev('.cart-step').hasClass('cart-table')) {
        $('.cart-take').addClass('cart-step_open');
        $('.cart-take').removeClass('cart-step_close');
        $('.cart-take').next('.cart__next').removeClass('hide');
    }
    $(this).prev('.cart-step').removeClass('cart-step_open');
    $(this).prev('.cart-step').addClass('cart-step_prev');
});

$('.cart-steps__next').on("click", function (e) {
    e.preventDefault();
    var th = $('.cart-step_open');
    var ne = $('.cart-step_close:first');
    var nt = $('.cart-steps__block.nt:first');
    nt.addClass('active');
    nt.removeClass('nt');
    th.next('.cart__next').addClass('hide');
    ne.addClass('cart-step_open');
    ne.removeClass('cart-step_close');
    ne.next('.cart__next').removeClass('hide');
    console.log(1);
    // if (th.hasClass('cart-table')) {
    //     $('.cart-take').addClass('cart-step_open');
    //     $('.cart-take').removeClass('cart-step_close');
    //     $('.cart-take').next('.cart__next').removeClass('hide');
    // }
    th.removeClass('cart-step_open');
    th.addClass('cart-step_prev');
});

$('.cart__top-back').on("click", function (e) {
    e.preventDefault();
    $(this).closest('.cart-step').addClass('cart-step_open');
    $(this).closest('.cart-step').removeClass('cart-step_prev');
    $(this).closest('.cart-step').next('.cart__next').removeClass('hide');
});
$('.cat-card__add').on("click", function () {
    $(this).hide();
    $(this).next('.cat-card__col').show();
});
$('.product-cont__check-cart').on("click", function () {
    $(this).hide();
    $(this).next('.product-cont__check-col').show();
});
$('.cart-table__block-plus').on("click", function () {
    var vall = $(this).closest('.cart-table__block-count').find('.cart-table__block-num span');
    vall.html(parseInt(vall.html()) + 1);
});
$('.cart-table__block-min').on("click", function () {
    var vall = $(this).closest('.cart-table__block-count').find('.cart-table__block-num span');
    if (parseInt(vall.html()) > 1) vall.html(parseInt(vall.html()) - 1);
    if (parseInt(vall.html()) == 1) {
        $(this).closest('.cat-card__col').hide();
        $(this).closest('.product-cont__check-col').hide();
        $(this).closest('.cat-card__bottom').find('.cat-card__add').show();
        $('.product-cont__check-cart').show();
    }
});
$('.blog__nav-btn').on('click', function () {
    $(this).hide();
    $('.blog__nav a').show();
});
$(".quiz__slides").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    infinite: false,
    fade: true,
    prevArrow: ".quiz__prev",
    nextArrow: ".quiz__next",
    responsive: [
        {
            breakpoint: 992,
            settings: {
                adaptiveHeight: true
            }
        }]
});
$(".repair-reviews__slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    infinite: false,
    variableWidth: true,
    prevArrow: ".repair-reviews__prev",
    nextArrow: ".repair-reviews__next"
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
$('.repair-reviews__listen').on('click', function (e) {
    e.preventDefault();
    if ($(this).attr('data-play') == 0) {
        $(this).find('span').html('Пауза');
        $(this).attr('data-play', 1);
        $(this).next('audio').trigger('play');

    } else {
        $(this).find('span').html('Слушать');
        $(this).attr('data-play', 0);
        $(this).next('audio').trigger('pause');
    }
});
$('.repair-reviews__all').on('click', function (e) {
    e.preventDefault();
    if ($(this).attr('data-hide') == 1) {
        $(this).html('Скрыть');
        $(this).attr('data-hide', 0);
        $(this).closest('.repair-reviews__main').find('p:not(:first)').show();
    } else {
        $(this).html('Читать полностью');
        $(this).attr('data-hide', 1);
        $(this).closest('.repair-reviews__main').find('p:not(:first):not(:eq(1))').hide();
    }
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
$('.modal-open__standart').on('click', function (e) {
    e.preventDefault();
    $('.overlay__standart').addClass('active');
    $('body').css("overflow", "hidden");
});
$('.modal-open__black').on('click', function (e) {
    e.preventDefault();
    $('.overlay__black').addClass('active');
    $('body').css("overflow", "hidden");
});
$('.modal-open__click').on('click', function (e) {
    e.preventDefault();
    $('.overlay__click').addClass('active');
    $('body').css("overflow", "hidden");
});
$('.modal-open__host').on('click', function (e) {
    e.preventDefault();
    $('.overlay__host').addClass('active');
    $('body').css("overflow", "hidden");
});
$('.popup-call__close').on('click', function (e) {
    e.preventDefault();
    $('.overlay').removeClass('active');
    $('body').css("overflow", "visible");
});
$('.overlay').on('click', function (e) {
    if (!(($(e.target).parents('.popup').length) || ($(e.target).hasClass('popup')))) {
        $('body').css("overflow", "visible");
        $(this).removeClass('active');
    }
});
$('.product-calc__calc-input').on('submit', function (e) {
    e.preventDefault();
    $('.calcDoh span').html(parseInt($('.calcHash span').html()) * parseInt($('.hashPrice').val()) - parseInt($('.calcPotr span').html()) * $(this).find('input').val());
    $('.calcDohPr span').html(Math.round((parseInt($('.calcHash span').html()) * parseInt($('.hashPrice').val()) - parseInt($('.calcPotr span').html()) * $(this).find('input').val()) / parseInt($('.prodPrice').val()), 2));
});
$('[data-toggle="tooltip"]').tooltip();