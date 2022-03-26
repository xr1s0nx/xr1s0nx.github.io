let mobMenu = document.querySelector('.mob-menu');
mobButtonOp = document.querySelector('.mob-menu__btn');
mobButtonCl = document.querySelector('.mobCl-menu__btn');
body = document.querySelector('body');
modal = document.querySelector('.modal__zak');


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

function OpModal() {
    modal.classList.add('modal__zak-active');
}

function ClModal() {
    modal.classList.remove('modal__zak-active');
}


$(document).ready(function() {
	$('.fullpage').fullpage({
		licenseKey: '96534AEF-713C432E-A6FABFA1-72D3118B',
		autoScrolling:true,
		scrollHorizontally: true,
        // normalScrollElements: '.pluese',
        scrollOverflow: true
	});

	//methods
});




$(document).ready(function () {
    $('.equip__slider').slick({
        slidesToShow: 1,
        arrows: true,
        infinite: true,
        autoPlay: true,
        adaptiveHeight: true,
        asNavFor: '.nav__slider'
    });
});


$(document).ready(function () {
    $('.nav__slider').slick({
        slidesToShow: 7,
        slidesToScroll: 1,
        asNavFor: '.equip__slider',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        variableWidth: true
    });
});



$(document).ready(function () {
    $('.slider').slick({
        slidesToShow: 1,
        arrows: false,
        infinite: true,
        autoPlay: true,
        adaptiveHeight: true
    });
});

$(document).ready(function () {
    $('.vert__slider-wrap').slick({
        slidesToShow: 1,
        arrows: false,
        dots: true,
        infinite: true,
        autoPlay: true,
        adaptiveHeight: true,
        vertical: true,
        verticalSwiping: true,
        responsive: [
            {
                breakpoint: 1270,
                settings: {
                    dots: false,
                    vertical: false,
                    verticalSwiping: false,
                }
            }
        ]
    });
});

