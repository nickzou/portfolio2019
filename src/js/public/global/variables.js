export const body = document.getElementById('body');
export const menu = document.getElementById('menu');
export const mobileMenuButton = document.getElementById('mobile-menu-button'); 
export const loader = document.getElementById('loader');

export let windowHeight = window.innerHeight;

export const breakpoints = {
    laptop: window.matchMedia("(max-width: 992px)"),
    tablet: window.matchMedia("(max-width: 768px)"),
    phablet: window.matchMedia("(max-width: 575px)")
};
export const breakpointsInverse = {
    laptop: window.matchMedia("(min-width: 991px)"),
    tablet: window.matchMedia("(min-width: 767px)"),
    phablet: window.matchMedia("(min-width: 574px)")
};