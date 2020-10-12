import Swiper, { Autoplay, EffectFlip, Pagination } from 'swiper';

Swiper.use([Pagination, Autoplay, EffectFlip]);

const swiper = new Swiper('.reviews__slider', {
        pagination: {
                el: '.swiper-pagination',
                dynamicBullets: true,
                clickable: true,
        },
        // autoHeight: true,
        loop: true,
        slidesPerView: 'auto',
        effect: 'flip',
        speed: 1200,
        autoplay: {
                delay: 3000,
        },
        observer: true,
        breakpoints: {
                320: {
                  autoHeight: true,
                },
                576: {
                  autoHeight: false,
                },
        },
});