import {menu} from '../variables';

const scrolledMenu = () => {
    if (window.pageYOffset > (window.innerHeight - 10)) {
        if (!menu.classList.contains('active')) {
            menu.classList.add('active');
        }
    } else {
        if(menu.classList.contains('active')) {
            menu.classList.remove('active');
        }
    }
};

export default scrolledMenu;