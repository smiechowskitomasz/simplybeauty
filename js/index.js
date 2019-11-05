$(document).ready(function () {

    $('a[href^="#"]').on('click', function (event) {

        var target = $($(this).attr('href'));

        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });

});

window.sr = ScrollReveal();

// Custom Settings
sr.reveal('.animation', {
    duration: 2000
})
// sr.reveal('.header', {
//     duration: 2000
// });

// sr.reveal('.lineheight', {
//     duration: 2000
// });

// sr.reveal('.sekcja2', {
//     duration: 2000
// });

// sr.reveal('.sekcja3', {
//     duration: 2000
// });