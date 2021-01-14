jQuery(function ($) {

    ScrollReveal().reveal('.works-wrapper', {
        duration: 800,
        viewFactor: 0.5,
        distance: '20px',
        origin: 'bottom',
    });

    ScrollReveal().reveal('.blog-wrapper', {
        duration: 800,
        viewFactor: 0.5,
        distance: '20px',
        origin: 'bottom',
    });
    
    ScrollReveal().reveal('.contact-wrapper', {
        duration: 800,
        viewFactor: 0.5,
        distance: '20px',
        origin: 'bottom',
    });

    setTimeout(function() {
        $('.main-copy').fadeIn(800);
    }, 400);

    $('#submit').click(function (e) {
        e.preventDefault();
    });
});