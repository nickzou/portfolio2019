import {aboutTitle, aboutText, infoPanelContent, aboutBackgroundImage, tabUnderline, activeTab, tabs, featurePanelContent} from './variables';
import setUnderline from './functions/setUnderline';
import createElementandSetClass from '../global/functions/createElementandSetClass';

document.addEventListener('DOMContentLoaded', ()=> {
    fetch('http://localhost/portfolio2019/admin//wp-json/wp/v2/pages/19')
    .then((response)=> {return response.json();})
    .then((data)=> {
        const {title, content, acf} = data;
        const resumeSection = acf.resume_section;

        //sets About Section title
        aboutTitle.innerHTML = title.rendered;

        //sets About Section content
        aboutText.innerHTML = content.rendered;

        //renders the Background Image in the Featured Panel
        aboutBackgroundImage.srcset = `${acf.background_image.sizes["hero-background-size-4k"]} 1921w, ${acf.background_image.sizes["hero-background-size-hd"]} 1441w, ${acf.background_image.sizes["hero-background-size-large"]} 769w, ${acf.background_image.sizes["hero-background-size-tablet"]} 415w, ${acf.background_image.sizes["hero-background-size-phablet"]} 320w`;

        //Checks if Profile Picture has been set, then renders it
        if (acf.profile_picture) {
            let profilePicture = createElementandSetClass('IMG', 'about-image');
            infoPanelContent.prepend(profilePicture);
            profilePicture.src = acf.profile_picture.sizes.thumbnail;
        }

        //sets the initial Underline for the tabs in the Featured Panel
        setUnderline(activeTab, tabUnderline);

        //function that removes Active Class from tab
        const removeActiveClass = (actives) => {
            actives.forEach((active)=> {
                active.classList.remove('active');
                
            });
        };

        //Loops through tabs and adds click event to add active class to tab clicked and removes active from all others
        tabs.forEach((tab)=> {
            tab.addEventListener('click', function () {
                removeActiveClass(tabs);
                this.classList.add('active');
                setUnderline(this, tabUnderline);
            });
        });

        //Function that takes "item" object and returns data in HTML form
        const renderResumeItem = (item) => {
            const {title, subtitle, duration, description} = item;

            return `<li class="resume-item"><h4 class="item-title">${title}</h4><h5 class="item-subtitle">${subtitle} / ${duration}</h5><p class="item-description">${description}</p></li>`;

        };

        //If resume section, for each section, render content
        if(resumeSection) {
            resumeSection.forEach((section) => {
                const {section_title, item} = section;

                //Creates the section DOM elements
                let sectionBlock = createElementandSetClass('SECTION', 'resume-section');
                let sectionList = createElementandSetClass('UL', 'resume-list');
                let sectionTitle = createElementandSetClass('H3', 'resume-section-title');

                //Sets data to above created DOM elements
                sectionTitle.innerHTML = section_title;
                item.forEach((i)=> { sectionList.innerHTML += renderResumeItem(i)});

                //Renders them to the "feature-panel-content" DOM element
                sectionBlock.appendChild(sectionTitle);
                sectionBlock.appendChild(sectionList);

                featurePanelContent.appendChild(sectionBlock);
            });
        }
    });
});