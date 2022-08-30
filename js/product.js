
$(window).on('load', function () {
    // $('#preloader').css({
    //     "transform": "translateY(-100%)",
    //     "transition-delay": "2s"
    // });
    $('#preloader').css({
        "visibility": "hidden",
        "transition-delay": "2s"
    });
    $('.loader').css({
        "opacity": "0",
        "transform": "translate(-50%,-100%)",
        "transition-delay": "2s"
    });
});
/*loading*/


const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: " + (e.pageY - 20) + "px; left: " + (e.pageX - 20) + "px;")
})

document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
})


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    // mousewheel: true,
});


// var swiper = new Swiper(".mySwiper", {
//     cssMode: true,
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
//     pagination: {
//         el: ".swiper-pagination",
//     },
//     mousewheel: true,
//     keyboard: true,
// });
// swiper.on('slideChange', function () {
//     console.log(this.imagesToLoad[this.activeIndex].getAttribute("data-text"));
// });
/*old by css mode*/


$(document).ready(function () {
    $("#more").click(function () {
        $('html, body').animate({
            scrollTop: $("#card1").offset().top
        }, 100);
    });
});



$(function () {
    $("#card1").flip({
        trigger: 'manual'
    });
    $("#card1").click(function () {
        $("#card1").flip('toggle');
        checkLenght($(this));
    });
    $("#card2").flip({
        trigger: 'manual'
    });
    $("#card2").click(function () {
        $("#card2").flip('toggle');
        checkLenght($(this));
    });
    $("#card3").flip({
        trigger: 'manual'
    });
    $("#card3").click(function () {
        $("#card3").flip('toggle');
        checkLenght($(this));
    });
    $("#card4").flip({
        trigger: 'manual'
    });
    $("#card4").click(function () {
        $("#card4").flip('toggle');
        checkLenght($(this));
    });
    $("#card5").flip({
        trigger: 'manual'
    });
    $("#card5").click(function () {
        $("#card5").flip('toggle');
        checkLenght($(this));
    });

});