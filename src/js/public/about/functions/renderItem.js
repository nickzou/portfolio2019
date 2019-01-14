const renderItem = (item, type) => {
    if (type == 'resume') {
        const {title, subtitle, duration, description} = item;

        return `<li class="resume-item"><h4 class="item-title" data-aos="fade-down">${title}</h4><h5 class="item-subtitle" data-aos="fade-down">${subtitle} / ${duration}</h4><p class="item-description" data-aos="fade-down">${description}</p></li>`;
    }
    else if (type == 'skills') {
        const {title, subtitle, icon} = item;

        return `<li class="skills-item"><div class="item-icon"><img src="${icon.sizes.thumbnail}" data-aos="fade-down"></div><h4 class="item-title" data-aos="fade-down">${title}</h4><h5 class="item-subtitle" data-aos="fade-down">${subtitle}</h5></li>`;
    }
}

export default renderItem;