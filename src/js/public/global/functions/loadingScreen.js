import {body, loader} from '../variables';

const loadingScreen = () => {
    loader.classList.add("hidden");
    body.style.overflow = "initial";
};

export default loadingScreen;