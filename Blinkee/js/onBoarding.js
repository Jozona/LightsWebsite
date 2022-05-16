$('.onboard-modal.show-on-load').modal('show');
if ($('.onboard-modal .onboard-slider-container').length) {
    $('.onboard-modal .onboard-slider-container').slick({
        dots: true,
        infinite: false,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    $('.onboard-modal').on('shown.bs.modal', function (e) {
        $('.onboard-modal .onboard-slider-container').slick('setPosition');
    });
}