import {featurePanelSlide} from '../variables';
import renderItem from './renderItem';
import createElementandSetClass from '../../global/functions/createElementandSetClass';

const createSection = (section, sectionName ) => {
    featurePanelSlide.innerHTML = "";
    section.forEach((s) => {
        const {section_title, item} = s; 

        //Creates the section DOM elements
        let sectionBlock = createElementandSetClass('SECTION', `${sectionName}-section`);
        let sectionList = createElementandSetClass('UL', `${sectionName}-list`);
        let sectionTitle = createElementandSetClass('H3', `${sectionName}-section-title`);

        //Sets data to above created DOM elements
        sectionTitle.innerHTML = section_title;
        item.forEach((i)=> { sectionList.innerHTML += renderItem(i, sectionName)});

        //Renders them to the "feature-panel-content" DOM element
        sectionBlock.appendChild(sectionTitle);
        sectionBlock.appendChild(sectionList);

        featurePanelSlide.appendChild(sectionBlock);
        console.log('event');
    });
}

export default createSection;