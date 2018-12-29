import {aboutTitle, aboutText, infoPanelContent, aboutBackgroundImage, tabUnderline, activeTab, tabs} from './variables';
import setUnderline from './functions/setUnderline';

document.addEventListener('DOMContentLoaded', ()=> {
    fetch('http://localhost/portfolio2019/admin//wp-json/wp/v2/pages/19')
    .then((response)=> {return response.json();})
    .then((data)=> {
        const {title, content, acf} = data;
        //Temporary output to be able to see the data being returned
        //console.log(data);
        //sets About Section title
        aboutTitle.innerHTML = title.rendered;
        //sets About Section content
        aboutText.innerHTML = content.rendered;
        aboutBackgroundImage.srcset = acf.background_image.sizes["hero-background-size-4k"] + " 1921w, " + acf.background_image.sizes["hero-background-size-hd"] + " 1441w, " + acf.background_image.sizes["hero-background-size-large"] + " 769w, " + acf.background_image.sizes["hero-background-size-tablet"] + " 415w, " + acf.background_image.sizes["hero-background-size-phablet"] + " 320w";
        //Checks if Profile Picture has been set, then renders it
        if (acf.profile_picture) {
            let profilePicture = document.createElement("IMG");
            profilePicture.className = "about-image";
            infoPanelContent.prepend(profilePicture);
            profilePicture.src = acf.profile_picture.sizes.thumbnail;
        }
        setUnderline(activeTab, tabUnderline);
        const removeActiveClass = (actives) => {
            actives.forEach((active)=> {
                active.classList.remove("active");
                
            });
        };
        tabs.forEach((tab)=> {
            tab.addEventListener('click', function () {
                removeActiveClass(tabs);
                this.classList.add("active");
                setUnderline(this, tabUnderline);
            });
        });
    });
});