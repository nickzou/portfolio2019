import loadingScreen from './functions/loadingScreen';
import fullpage from 'fullpage.js';

document.addEventListener('DOMContentLoaded', ()=> {
    loadingScreen();
    new fullpage('#site-wrapper', {
        autoScrolling: true
    });
});