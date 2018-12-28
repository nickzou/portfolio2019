import {aboutTitle} from '../variables';

const setTitle = (data) => {
    aboutTitle.innerHTML = data.title.rendered;
};

export default setTitle;