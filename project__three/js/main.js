$(document).ready(function () {
    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        speed: 600,
        responsive: [
            {
                breakpoint: 980,
                settings: {
                    // slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false
                }


            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false,
                    variableWidth: true

                }
            }
        ]
    });
});

$(document).ready(function () {
    $('.stages__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        speed: 600,
        variableWidth: true
    });
});

let PopUp = document.querySelector('.popUp');

let navBar = document.querySelector('.header__sub-menu'),
    searchBar = document.querySelector('.search__wrap'),
    searchInp = document.querySelector('.search-inp'),
    tf = false;

function searchFull() {
    navBar.classList.add('unActiveNav');
    searchBar.classList.add('activeSearch');
    tf = true;
}

function PopUpOp() {
    PopUp.classList.add('popUp-active')
}

function PopUpCl() {
    PopUp.classList.remove('popUp-active')
}

document.onclick = function (e) {
    if (e.target.className != 'search-inp') {
        if (e.target.className != 'submBtn') {
            if (tf === true) {
                navBar.classList.remove('unActiveNav');
                searchBar.classList.remove('activeSearch');
                searchInp.value = '';
                tf = false;
            }
        }
    };
};

// 

var accordion = (function (element) {
    var _getItem = function (elements, className) { // функция для получения элемента с указанным классом
        var element = undefined;
        elements.forEach(function (item) {
            if (item.classList.contains(className)) {
                element = item;
            }
        });
        return element;
    };
    return function () {
        var _mainElement = {}, // .accordion
            _items = {}, // .accordion-item
            _contents = {}; // .accordion-item-content
        var _actionClick = function (e) {
            if (!e.target.classList.contains('accordion-item-header')) { // прекращаем выполнение функции если кликнули не по заголовку
                return;
            }
            e.preventDefault(); // отменям стандартное действие
            // получаем необходимые данные
            var header = e.target,
                item = header.parentElement,
                itemActive = _getItem(_items, 'show');
            if (itemActive === undefined) { // добавляем класс show к элементу (в зависимости от выбранного заголовка)
                item.classList.add('show');
            } else {
                // удаляем класс show у ткущего элемента
                itemActive.classList.remove('show');
                // если следующая вкладка не равна активной
                if (itemActive !== item) {
                    // добавляем класс show к элементу (в зависимости от выбранного заголовка)
                    item.classList.add('show');
                }
            }
        },
            _setupListeners = function () {
                // добавим к элементу аккордиона обработчик события click
                _mainElement.addEventListener('click', _actionClick);
            };

        return {
            init: function (element) {
                _mainElement = (typeof element === 'string' ? document.querySelector(element) : element);
                _items = _mainElement.querySelectorAll('.accordion-item');
                _setupListeners();
            }
        }
    }
})();

var accordion1 = accordion();
accordion1.init('#accordion');