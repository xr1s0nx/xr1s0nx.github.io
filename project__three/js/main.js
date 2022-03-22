let mobMenu = document.querySelector('.mob-menu');
    mobButtonOp = document.querySelector('.mob-menu__btn');
    mobButtonCl = document.querySelector('.mobCl-menu__btn');
    body = document.querySelector('body');


function mobMenuOpen() {
    mobMenu.classList.add("mob-menu__active");
    mobButtonOp.style.visibility = 'hidden';
    mobButtonOp.style.opacity = '0';
    mobButtonCl.style.visibility = 'visible';
    mobButtonCl.style.opacity = '1';
    body.classList.add('noscroll');
    root.classList.add('noscroll');

}

function mobMenuClose() {
    mobMenu.classList.remove("mob-menu__active");
    mobButtonOp.style.visibility = 'visible';
    mobButtonOp.style.opacity = '1';
    mobButtonCl.style.visibility = 'hidden';
    mobButtonCl.style.opacity = '0';
    body.classList.remove('noscroll');
    root.classList.remove('noscroll');

}


$(document).ready(function () {
    $('.slider').slick({
        slidesToShow: 1,
        arrows: false,
        infinite: true,
        autoPlay: true,
        adaptiveHeight: true
    });
});

