import loadingScreen from './functions/loadingScreen';
import SmoothScroll from 'smooth-scroll';

document.addEventListener('DOMContentLoaded', ()=> {
    loadingScreen();
    new SmoothScroll('a[href*="#"]', {
        speed: 300
    });
});