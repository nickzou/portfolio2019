import {featurePanelSlide} from '../variables';
import renderItem from './renderItem';

const createSection = (section, sectionName ) => {
    featurePanelSlide.innerHTML = "";
    section.forEach((s) => {
        const {section_title, item} = s;

        let sectionItems = ``;

        item.forEach((i) => sectionItems += renderItem(i, sectionName));

        featurePanelSlide.innerHTML += `
            <section class="${sectionName}-section">
                <h3 class="${sectionName}-section-title" data-aos="fade-down">${section_title}</h3>
                <ul class="${sectionName}-list">
                    ${sectionItems}
                </ul>
            </section>
        `;
    });
}

export default createSection;