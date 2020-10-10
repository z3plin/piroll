import Swiper, { Autoplay, EffectFlip, Pagination } from 'swiper';

Swiper.use([Pagination, Autoplay, EffectFlip]);

const swiper = new Swiper('.reviews__slider', {
        pagination: {
                el: '.swiper-pagination',
                dynamicBullets: true,
                clickable: true,
        },
        loop: true,
        slidesPerView: 'auto',
        effect: 'flip',
        speed: 800,
        autoplay: {
                delay: 3000,
        },
        observer: true,
});