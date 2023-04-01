$(document).ready(() => {
    $('.owl-carousel').owlCarousel({
        items: 1,
        margin: 0,
        loop: true,
        center: true,
        nav: true,
        lazyLoad: true
    })

    $('.section-col__image img').removeClass('hidden')
})
