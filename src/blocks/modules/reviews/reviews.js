import Splide from '@splidejs/splide';

document.addEventListener( 'DOMContentLoaded', function () {
	new Splide( '#reviewsSplide', {
        type: 'loop',
        width: '100vw',
        height: '100vh',
        autoplay: true,
	} ).mount();
} ); 