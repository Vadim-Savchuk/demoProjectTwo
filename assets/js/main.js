const swiper = new Swiper('.swiper', {

    slidesPerView: 7,
    loop: true,
    slidesPerGroup: 1,
    spped: 800,
    spaceBetween: 20,

    
    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        530: {
            slidesPerView: 2,
        },
        760: {
            slidesPerView: 3,
        },
        1000: {
            slidesPerView: 4,
        },
        1200: {
            slidesPerView: 5,
        },
        1400: {
            slidesPerView: 7,
        }
    }

});

const body     = document.querySelector('body');
const navBtn   = document.querySelector('.burger-button');
const btnIcon  = navBtn.querySelector(' a');
const nav      = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav__link');

navBtn.addEventListener('click', () => {
    nav.classList.toggle('active')

    for(let link of navLinks) {
        link.addEventListener('click', () => {
            nav.classList.remove('active')
            body.classList.remove('hiden')
            btnIcon.classList.remove('active')
        });
    }

    if(nav.classList.contains('active')) {
        body.classList.add('hiden')
        btnIcon.classList.add('active')
    } else {
        body.classList.remove('hiden')
        btnIcon.classList.remove('active')
    }
});