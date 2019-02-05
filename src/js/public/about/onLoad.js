import {aboutTitle, infoPanelContent, featurePanelSlide, aboutBackgroundImage, tabUnderline, activeTab, tabs, resumeTab, skillsTab} from './variables';
import setUnderline from './functions/setUnderline';
import createSection from './functions/createSection';

document.addEventListener('DOMContentLoaded', ()=> {
    fetch('http://localhost/portfolio2019/admin//wp-json/wp/v2/pages/19')
    .then((response)=> response.json())
    .then((data)=> {
        const {title, content, acf} = data;
        const resumeSection = acf.resume_section;
        const skillsSection = acf.skills_section;

        //sets About Section title
        aboutTitle.innerHTML = title.rendered;

        //renders the Background Image in the Featured Panel
        aboutBackgroundImage.srcset = `${acf.background_image.sizes["hero-background-size-4k"]} 1921w, ${acf.background_image.sizes["hero-background-size-hd"]} 1441w, ${acf.background_image.sizes["hero-background-size-large"]} 769w, ${acf.background_image.sizes["hero-background-size-tablet"]} 415w, ${acf.background_image.sizes["hero-background-size-phablet"]} 320w`;

        //Checks if Profile Picture has been set, then renders it
        let profilePicture = () => {
            if (acf.profile_picture) {
                return `<img class="about-image" data-aos="fade-down" src="${acf.profile_picture.sizes.thumbnail}">`;
            }
        }

        //Sets bio section text
        infoPanelContent.innerHTML = `
            <div class="info-panel-content-slide">
            ${profilePicture()}
            <h2 data-aos="fade-down">bio</h2>
            <div id="about-text" class="text" data-aos="fade-down">${content.rendered}</div>
            </div>
            <div class="info-panel-content-slide show-in-mobile">
                ${createSection(resumeSection, 'resume')}
            </div>
        `;

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
        
        if (resumeSection) {
            featurePanelSlide.innerHTML = createSection(resumeSection, 'resume');
        }

        resumeTab.addEventListener('click', () => featurePanelSlide.innerHTML = createSection(resumeSection, 'resume', featurePanelSlide));
        skillsTab.addEventListener('click', () => featurePanelSlide.innerHTML = createSection(skillsSection, 'skills', featurePanelSlide));
    });
});