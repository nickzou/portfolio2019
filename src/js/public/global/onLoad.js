import loadingScreen from './functions/loadingScreen';
import scrolledMenu from './functions/scrolledMenu';
import SmoothScroll from 'smooth-scroll';
import {menu} from './variables';

document.addEventListener('DOMContentLoaded', ()=> {
    loadingScreen();
    new SmoothScroll('a[href*="#"]', {
        speed: 300
    });
    document.addEventListener('scroll', ()=> {
        setInterval(scrolledMenu(), 300);
    });
});