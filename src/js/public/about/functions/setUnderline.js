const setUnderline = (active, underline) => {
    let underlineWidth = active.clientWidth;
    let underlinePositionX = active.offsetLeft;
    underline.style.width = underlineWidth + "px";
    underline.style.left = underlinePositionX + "px";
};

export default setUnderline;