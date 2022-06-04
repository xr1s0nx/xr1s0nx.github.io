$('.sites__slider').slick({
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth: true
});
//   popular__slider

$('.popular__slider').slick({
    infinite: true,
    slidesToShow: 2,
    centerMode: true,
    slidesToScroll: 1,
    arrows: true,
    variableWidth: true
});

$('.works__slide').slick({
    infinite: true,
    slidesToShow: 3,
    centerMode: false,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    variableWidth: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                centerMode: false,
                variableWidth: false,

            }
        }
    ]
});
// works__slide

$('.retiree__slider').slick({
    infinite: false,
    slidesToShow: 1,
    centerMode: false,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    variableWidth: false
});

$('.employees__slider').slick({
    infinite: true,
    slidesToShow: 2,
    centerMode: true,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    variableWidth: true
});


let filterBtn = document.querySelectorAll('.filter'),
    tf = false;

function deleateAll() {
    if (tf == true) {
        filterBtn.forEach(btn => {
            btn.classList.remove('activeBtn');
        })
    }

};


filterBtn.forEach(btn => {
    btn.addEventListener('click', e => {
        deleateAll();
        btn.classList.add('activeBtn');
        tf = true;
    })
});

// employees__slider