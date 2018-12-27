import {siteTitle, siteSubtitle} from '../variables';

const setText = (data) => {
    siteTitle.innerHTML = data.acf.site_title;
    siteSubtitle.innerHTML = data.acf.site_subtitle;
};

export default setText;