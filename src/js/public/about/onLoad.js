import {aboutTitle, aboutText, infoPanelContent, aboutBackgroundImage} from './variables';

document.addEventListener('DOMContentLoaded', ()=> {
    fetch('http://localhost/portfolio2019/admin//wp-json/wp/v2/pages/19')
    .then((response)=> {return response.json();})
    .then((data)=> {
        //Temporary output to be able to see the data being returned
        console.log(data);
        //sets About Section title
        aboutTitle.innerHTML = data.title.rendered;
        //sets About Section content
        aboutText.innerHTML = data.content.rendered;
        aboutBackgroundImage.srcset = data.acf.background_image.sizes["hero-background-size-4k"] + " 1921w, " + data.acf.background_image.sizes["hero-background-size-hd"] + " 1441w, " + data.acf.background_image.sizes["hero-background-size-large"] + " 769w, " + data.acf.background_image.sizes["hero-background-size-tablet"] + " 415w, " + data.acf.background_image.sizes["hero-background-size-phablet"] + " 320w";
        //Checks if Profile Picture has been set, then renders it
        if (data.acf.profile_picture) {
            let profilePicture = document.createElement("IMG");
            profilePicture.className = "about-image";
            infoPanelContent.prepend(profilePicture);
            profilePicture.src = data.acf.profile_picture.sizes.thumbnail;
        }
    });
});