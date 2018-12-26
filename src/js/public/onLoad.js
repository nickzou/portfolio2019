import {hero, heroBackgroundImage} from './variables';
import {jarallax, jarallaxElement} from 'jarallax';

document.addEventListener('DOMContentLoaded', ()=> {
    fetch('http://localhost/portfolio2019/admin//wp-json/wp/v2/pages/5')
    .then((response) => { return response.json(); })
    .then((data)=> {
        console.log(data);
        heroBackgroundImage.src  = data.acf.background_image.sizes["hero-background-size-4k"];
        jarallaxElement();
    });
});