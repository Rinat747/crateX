$('ul.benefits__tabs').on('click', 'li:not(.active)', function() {
    $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.tabs').find('div.benefits__content').removeClass('active').eq($(this).index()).addClass('active');
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: ".team__btn-right",
        prevEl: ".team__btn-left",
    },
    breakpoints:{
        1200:{
            slidesPerView:4
        },
        1024:{
          slidesPerView:3
        },
        992:{
            slidesPerView:3
        },
        886:{
            slidesPerView:2
        },
        768:{
            slidesPerView:2
        },
        676:{
            slidesPerView:1
        }
    }
});

var swiperTest = new Swiper(".testSwiper", {
    slidesPerView: 1,
    spaceBetween: 60,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".test__next",
        prevEl: ".test__prev",
    },
});


let logIn = document.querySelector('.header__user-link')
let overlay = document.querySelector('.overlay')
let close = document.querySelector('.popup__close')

logIn.addEventListener('click', () => {
   overlay.style.display = 'flex'
})

close.addEventListener('click', () => {
    overlay.style.display = 'none'
})

overlay.addEventListener('click', (e) => {
    if (e.target.className === 'overlay') {
        overlay.style.display = 'none'
    }
})


let burger = document.querySelector('.header__burger')
let menu = document.querySelector('.header__nav')


burger.addEventListener('click', () => {
    burger.classList.toggle('header__burger_active')
    menu.classList.toggle('header__nav_active')

})
