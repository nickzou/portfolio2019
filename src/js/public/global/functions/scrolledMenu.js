import {menu, breakpointsInverse} from '../variables';

const scrolledMenu = () => {
    const {laptop} = breakpointsInverse;
    if (laptop == true) {
        if (window.pageYOffset > (window.innerHeight - 10)) {
            if (!menu.classList.contains('active')) {
                menu.classList.add('active');
            }
        } else {
            if(menu.classList.contains('active')) {
                menu.classList.remove('active');
            }
        }
    } else {
        if (!menu.classList.contains('active')) {
            menu.classList.add('active');
            
        }
    }
};

export default scrolledMenu;