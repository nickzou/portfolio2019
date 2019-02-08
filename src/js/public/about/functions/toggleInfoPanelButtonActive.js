const toggleInfoPanelButtonActive = (target, other1, other2) => {
    target.classList.add('active');
    other1.classList.remove('active');
    other2.classList.remove('active');
};

export default toggleInfoPanelButtonActive;