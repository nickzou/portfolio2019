import AOS from 'aos';
import loadingScreen from './functions/loadingScreen';
import scrolledMenu from './functions/scrolledMenu';
import SmoothScroll from 'smooth-scroll';
import {menu, mobileMenuButton} from './variables';

document.addEventListener('DOMContentLoaded', ()=> {
    loadingScreen();
    AOS.init({
        duration: 1200,
        offset: 35
    });
    new SmoothScroll('a[href*="#"]', {
        speed: 300
    });
    document.addEventListener('scroll', ()=> {
        setInterval(scrolledMenu(), 300);
    });
    mobileMenuButton.addEventListener('click', function() {
        this.classList.toggle('is-active');
        menu.classList.toggle('mobile-open');
    });
});