import {siteTitle, siteSubtitle} from '../variables';

const setHeroText = (data) => {
    siteTitle.innerHTML = data.acf.site_title;
    siteSubtitle.innerHTML = data.acf.site_subtitle;
};

export default setHeroText;