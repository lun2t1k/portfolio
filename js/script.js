$(document).ready(() => {
    (function calcAge() {
        const birthdate = new Date(2000, 7, 25) // YYYY, MM, DD
        const today = new Date()
        const age = today.getFullYear() - birthdate.getFullYear() -
            (today.getMonth() < birthdate.getMonth() ||
                (today.getMonth() === birthdate.getMonth() && today.getDate() < birthdate.getDate()))
        $('#age').html(age)
    })()

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
