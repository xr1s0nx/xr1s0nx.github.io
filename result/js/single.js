$(document).ready(function () {
    AOS.init();

    // window.onload = function () {
    //     document.querySelector(".preloader").classList.add("active");
    // };

    /* burger */
    $(".nav_toggle").on("click", function () {
        $(".nav").toggleClass("active");
        $(".shadow").toggleClass("active");
        $(".nav_toggle").toggleClass("active");
    });

    $(".shadow, .close").on("click", function () {
        $(".nav").removeClass("active");
        $(".shadow").removeClass("active");
        $(".nav_toggle").removeClass("active");
        $(".call_modal").removeClass("active");
    });

    $(".header .phone").on("click", function () {
        $(".call_modal").addClass("active");
        $(".shadow").addClass("active");
        $(".nav").removeClass("active");
        $(".nav_toggle").removeClass("active");
    });

    Cocoen.create(document.querySelector(".cocoen"));

    const leaf = document.getElementById("leaf_1");
    const leaf2 = document.getElementById("leaf_2");
    const leaf3 = document.getElementById("leaf_3");

    const recom_3 = document.getElementById("recom_3");
    const recom_4 = document.getElementById("recom_4");

    const footer_1 = document.getElementById("footer_1");
    const footer_2 = document.getElementById("footer_2");

    window.addEventListener("scroll", function () {
        let value = window.scrollY;
        leaf.style.top = 85 + value * -0.02 + "%";
        leaf2.style.top = 87 + value * -0.02 + "%";
        leaf3.style.top = 110 + value * -0.02 + "%";

        recom_3.style.left = 122 + value * -0.02 + "%";
        recom_4.style.right = 122 + value * -0.02 + "%";

        footer_1.style.top = 152 + value * -0.02 + "%";
        footer_2.style.top = 176 + value * -0.02 + "%";
    });

    $(document).ready(function () {
        $("form").submit(function () {
            var e = $(this);
            return $.ajax({
                type: "POST",
                url: "mail.php",
                data: e.serialize(),
            }).done(function () {
                setTimeout(function () {
                    e.trigger("reset");
                }, 1e3);
            });
        });
    });
});
