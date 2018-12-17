var navLinks = document.querySelectorAll('li');
// Scroll Reveal
ScrollReveal().reveal('.section-container', { delay: 200 });
ScrollReveal().reveal('.title-about-me', { delay: 500 });
ScrollReveal().reveal('.section-about-me', { delay: 500 });
ScrollReveal().reveal('.title-skills', { delay: 500 });
ScrollReveal().reveal('.section-skills', { delay: 500 });
ScrollReveal().reveal('.skills', { delay: 500 });
ScrollReveal().reveal('.title-what-can', { delay: 500 });
ScrollReveal().reveal('.section-what-can', { delay: 500 });

$('.menu-icon').click(function () {
    $('ul.header-nav').toggleClass('nav-active');
    $('.hero').toggleClass('contenido');
    navLinks.forEach((e, i) => {
        if (e.style.animation) {
            e.style.animation = '';
        } else {
            e.style.animation = `navLinkFade 0.5s ease forwards ${i / 10 + 0.04}s`;
        }
    })
});