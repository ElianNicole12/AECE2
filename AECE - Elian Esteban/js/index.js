$(document).ready(function(){
    $('.carrusel').slick({
        slidesToScroll: 1,
        autoplay: Infinity,
        autoplaySpeed: 4000,
    });

    $('.beneficios__contenedor').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: Infinity,
        autoplaySpeed: 2000,
    });
});

sal({one: false});