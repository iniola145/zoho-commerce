// Scroll Reveal for the different sections
ScrollReveal({distance: "40px", delay: 300});
// First Section
ScrollReveal().reveal(".first-p", {delay: 1000});
ScrollReveal().reveal(".first-b", {delay: 1000});
ScrollReveal().reveal(".first-sub-container", {delay: 800});
ScrollReveal().reveal(".first-sub-c1", {delay: 1300});
// Second Section
ScrollReveal().reveal(".second-div");
// Third Section
ScrollReveal().reveal(".third-p");
ScrollReveal().reveal(".third-div");
// Fourth Section
ScrollReveal().reveal(".fourth-div");
ScrollReveal().reveal(".fourth-sub-div1");
ScrollReveal().reveal(".fourth-sub-div2");
ScrollReveal().reveal(".fourth-sub-div3");
ScrollReveal().reveal(".fourth-sub-div4");
ScrollReveal().reveal(".fourth-sub-div5");
ScrollReveal().reveal(".fourth-sub-div6");
// Fifth Section
ScrollReveal().reveal(".fifth-p1");
ScrollReveal().reveal(".fifth-p2", {delay: 350});
ScrollReveal().reveal(".fifth-p3", {delay: 400});
ScrollReveal().reveal(".fifth-div", {delay: 450});
// Six Section
ScrollReveal().reveal(".sixth-p1");
ScrollReveal().reveal(".sixth-p2", {delay: 350});
ScrollReveal().reveal(".sixth-p3", {delay: 400});
ScrollReveal().reveal(".sixth-div", {delay: 450});
// Seventh Section
ScrollReveal().reveal(".seventh-p1");
ScrollReveal().reveal(".seventh-p2", {delay: 350});
ScrollReveal().reveal(".seventh-p3", {delay: 400});
ScrollReveal().reveal(".seventh-div", {delay: 450});
// Eigth Section
ScrollReveal().reveal(".eigth-div");
ScrollReveal().reveal(".eigth-h1", {delay: 400});
ScrollReveal().reveal(".eigth-a", {delay: 400});

// SWIPERJS
const swiper = new Swiper(".swiper", {
    //   Optional Parameters
    loop: true,
    direction: "horizontal",

    //   Pagination
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    //   Navigation
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    // Keyboard Control
    keyboard: {
        enabled: true,
    },

    // Mousewheel Control
    mousewheel: {
        enabled: true,
        thresholdDelta: 60,
    },

    // Autoplay
    autoplay: {
        delay: 3000,
        // reduce the speed of the autoplay
    },

    // Speed
    speed: 700,

    // Effect
    effect: "coverflow",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
    },
});


