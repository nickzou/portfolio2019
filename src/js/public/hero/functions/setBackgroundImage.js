import {heroBackgroundImage} from '../variables';

const setBackgroundImage = (data) => {
    heroBackgroundImage.srcset = data.acf.background_image.sizes["hero-background-size-4k"] + " 1921w, " + data.acf.background_image.sizes["hero-background-size-hd"] + " 1441w, " + data.acf.background_image.sizes["hero-background-size-large"] + " 769w, " + data.acf.background_image.sizes["hero-background-size-tablet"] + " 415w, " + data.acf.background_image.sizes["hero-background-size-phablet"] + " 320w";
};

export default setBackgroundImage;