// Scroll animation //
AOS.init({
    easing: 'ease-out-back',
    duration: 1000,
    once: true,
});

$(document).click(function(e) {
    e.stopPropagation();
    var container = $("button.navbar-toggler");

    //check if the clicked area is dropDown or not
    if (container.has(e.target).length === 0) {
        $('.navbar-collapse').removeClass('show');
        $(".menubar").removeClass("open");
    }
})

$(document).on('click', '.menubar', function(e) {
    $('.navbar-collapse').toggleClass('show');
    $(".menubar").toggleClass("open");
});


$(".r-close").click(function() {
    $(".menubar").removeClass("open");
});

// Preloader //
$(window).load(function() {
    $(".preloader").delay(0).fadeOut("fast");
})

// $(".navbar .navbar-toggler").click(function(){
//   $(".navbar .navbar-collapse").addClass("show");
// });
// $(".r-close").click(function(){
//   $(".header-main .navbar-collapse").removeClass("show");
// });

// Fixed header //
$(window).scroll(function() {
    if ($(window).scrollTop() >= 300) {
        $('.header-area').addClass('fixed-header');
    } else {
        $('.header-area').removeClass('fixed-header');
    }
});

// Header active class
$('.nav-item').click(function() {
    $('.active').removeClass('active');
    $(this).addClass('active');
})

// Roadmap //
$('.roadmap-slider').owlCarousel({
    loop: false,
    margin: 10,
    dots: false,
    nav: true,
    mouseDrag: false,
    navText: ["<svg width='64' height='64' viewBox='0 0 64 64' fill='none' xmlns='http://www.w3.org/2000/svg'><circle cx='32' cy='32' r='31' transform='rotate(180 32 32)' fill='#5D98FE' stroke='white' stroke-width='2'/><path d='M35.3335 40.3333L25.3335 31.9999L35.3335 23.6666V40.3333Z' fill='white'/></svg>", "<svg width='64' height='64' viewBox='0 0 64 64' fill='none' xmlns='http://www.w3.org/2000/svg'><circle cx='32' cy='32' r='31' fill='#5D98FE' stroke='white' stroke-width='2'/><path d='M28.6665 23.6667L38.6665 32.0001L28.6665 40.3334V23.6667Z' fill='white'/></svg>"],
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 1,
            nav: false
        },
        1000: {
            items: 2,
            nav: true,
        }
    }
});


var initialSrc = "";
var scrollSrc = "assets/images/token-distribution.svg";

$(window).scroll(function() {
    var value = $(this).scrollTop();
    if (value > 800)
        $(".token-img").attr("src", scrollSrc);
    else
        $(".token-img").attr("src", initialSrc);
});


// Back to top //
var btn = $('#button');

$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, '300');
});

// Check wallet //
jQuery(".form-check .form-check-input").change(function() {
    if (this.checked) {
        jQuery('.suggesion-ico').removeClass('disabled');
    } else {
        jQuery('.suggesion-ico').addClass('disabled');
    }
});


// Show more pages //
$(function() {
    $(".show-more-item").slice(0, 3).show();
    $("#loadMore").on('click', function(e) {
        e.preventDefault();
        $(".show-more-item:hidden").slice(0, 3).slideDown();
        if ($(".show-more-item:hidden").length == 0) {
            $("#loadLess").fadeIn('slow');
            $("#loadMore").hide();
            // $("#loadMore").text('Load only the first 3');
        }
    });

    $("#loadLess").on('click', function(e) {
        e.preventDefault();
        $('.show-more-item:not(:lt(6))').fadeOut();
        $("#loadMore").fadeIn('slow');
        $("#loadLess").hide();

        desiredHeight = $(window).height();
        window.scrollTo(0, 0);
    });

});



var x = 12;

function updateClass() {
    if (x == 12) $(".hours").removeClass('active');
    $('#hour-' + x).addClass('active');
    if (x == 12) x = 1;
    else x++;
};
$(document).ready(function() {
    setInterval(function() {
        updateClass();
    }, 4500);
});




let vid = document.querySelector("#myVid");

vid.addEventListener('ended', playNextVideo, false);

function playNextVideo(e) {
    console.log('video ended')
    $('#secondVid').removeClass('d-none');
    $('#myVid').remove();
}