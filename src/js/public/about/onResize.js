import {activeTab, tabUnderline} from './variables';

document.addEventListener('resize', ()=> {
    setInterval(() => setUnderline(activeTab, tabUnderline), 300);
});