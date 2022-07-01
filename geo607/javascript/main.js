$(document).ready(function () {
  $('.galery-slider').slick({
    autoplay: true,

    arrows: true,
    dots: false,
    adaptiveHeight: false,
    slidesToShow: 3,
    centerMode: false,
    slidesToScroll: 2,
    infinite: false,
    touchThreshold: 150,
    waitForAnimate: false,

    responsive: [{
      breakpoint: 1250,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 820,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    ]
  });

  $('.steps-slider').slick({
    autoplay: true,
    arrows: true,
    dots: false,
    adaptiveHeight: false,
    slidesToShow: 3,
    centerMode: false,
    slidesToScroll: 2,
    infinite: false,
    touchThreshold: 150,
    waitForAnimate: false,

    responsive: [{
      breakpoint: 1250,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 820,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    ]
  });

  $('.opportunities-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    infinite: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
    ],
  });
})

window.onload = function () {
  document.body.classList.add('loaded_hiding');
  window.setTimeout(function () {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded_hiding');
  }, 500);
}

$(window).scroll(function () {
  if ($(this).scrollTop() > 50) {
    $('.header').addClass('active');
  } else {
    $('.header').removeClass('active');
  }
});

$(document).ready(function () {
  $('.accordion > li > .accordion__answer').hide();

  $('.accordion > li').click(function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active").find(".accordion__answer").slideUp();
    } else {
      $(".accordion > li.active .accordion__answer").slideUp();
      $(".accordion > li.active").removeClass("active");
      $(this).addClass("active").find(".accordion__answer").slideDown();
    }
    return false;
  });
});

$('.js-fullscreen-map').click(function () {
  $('.opportunities-about').toggleClass('active');
});

$('.js-menu-toggle').click(function () {
  $('.header').toggleClass('mobile-active');
});

(function () {
  // let previousScroll = 0;
  // $(window).scroll(() => {
  //   let currentScroll = $(this).scrollTop();
  //   currentScroll > previousScroll ? $('.opportunities__drill').removeClass('active') : $('.opportunities__drill').addClass('active');
  //   previousScroll = currentScroll;
  // });

  if (screen.width > 960) {
    var Revealator = "undefined" != typeof Revealator ? Revealator : {};
    $(function () {
      Revealator = $.extend({}, {
        timer: null,
        busy: !1,
        scroll_padding: 0,
        effects_padding: 0,
        refresh: function () { }
      }, "undefined" != typeof Revealator ? Revealator : {}), Revealator.refresh = function () {
        var a = $(window),
          e = $(document),
          o = $(document.body),
          t = 0,
          l = Revealator.effects_padding,
          r = a.height() - Revealator.effects_padding,
          s = Revealator.scroll_padding,
          v = e.height() - Revealator.scroll_padding;
        0 === a.scrollTop() ? o.hasClass("at-top") || o.addClass("at-top").removeClass("at-bottom").removeClass("near-top").removeClass("near-bottom") : a.scrollTop() + a.height() === e.height() ? o.hasClass("at-bottom") || o.addClass("at-bottom").removeClass("at-top").removeClass("near-top").removeClass("near-bottom") : a.scrollTop() <= s ? o.hasClass("near-top") || o.addClass("near-top").removeClass("near-bottom").removeClass("at-top").removeClass("at-bottom") : a.scrollTop() + a.height() >= v ? o.hasClass("near-bottom") || o.addClass("near-bottom").removeClass("near-top").removeClass("at-top").removeClass("at-bottom") : (o.hasClass("at-top") || o.hasClass("at-bottom") || o.hasClass("near-top") || o.hasClass("near-bottom")) && o.removeClass("at-top").removeClass("at-bottom").removeClass("near-top").removeClass("near-bottom"), $('*[class*="revealator"]').each(function () {
          t++;
          var a = this,
            e = $(a),
            o = a.getBoundingClientRect(),
            s = void 0;
          s = o.top > r && o.bottom > r ? "revealator-below" : o.top < r && o.bottom > r ? "revealator-partially-below" : o.top < l && o.bottom > l ? "revealator-partially-above" : o.top < l && o.bottom < l ? "revealator-above" : "revealator-within", e.hasClass("revealator-load") && !e.hasClass("revealator-within") && (e.removeClass("revealator-below revealator-partially-below revealator-within revealator-partially-above revealator-above"), e.addClass("revealator-within")), e.hasClass(s) || e.hasClass("revealator-load") || (e.hasClass("revealator-once") ? (e.hasClass("revealator-within") || (e.removeClass("revealator-below revealator-partially-below revealator-within revealator-partially-above revealator-above"), e.addClass(s)), (e.hasClass("revealator-partially-above") || e.hasClass("revealator-above")) && e.addClass("revealator-within")) : (e.removeClass("revealator-below revealator-partially-below revealator-within revealator-partially-above revealator-above"), e.addClass(s)))
        })
      }, $(window).bind("scroll resize load ready", function () {
        Revealator.busy || (Revealator.busy = !0, setTimeout(function () {
          Revealator.busy = !1, Revealator.refresh()
        }, 300))
      })
    });
  } else {
    $('#body').removeClass('revealator');
  }
}());

let drill = document.querySelector('.opportunities__drill-img')

window.addEventListener("scroll", function () {
  let value = -window.scrollY;


  if (value > -1020) {
    drill.style.top = 0 + value * -0.08 + "%";

  }
  console.log(value)

});