const renderItem = (item, type) => {
    if (type == 'resume') {
        const {title, subtitle, duration, description} = item;

        return `<li class="resume-item"><h4 class="item-title">${title}</h4><h5 class="item-subtitle">${subtitle} / ${duration}</h5><p class="item-description">${description}</p></li>`;
    }
    else if (type == 'skills') {
        const {title, subtitle, icon} = item;

        return `<li class="skills-item"><div class="item-icon"><img src="${icon.sizes.thumbnail}"></div><h4 class="item-title">${title}</h4><h5 class="item-subtitle">${subtitle}</h5></li>`;
    }
}

export default renderItem;