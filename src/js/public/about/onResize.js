import {activeTab, tabUnderline} from './variables';
import setUnderline from './functions/setUnderline';

window.addEventListener('resize', ()=> {
    setInterval(() => setUnderline(activeTab, tabUnderline), 300);
});