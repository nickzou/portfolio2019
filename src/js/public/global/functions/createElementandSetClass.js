const createElementandSetClass = (element = 'DIV', classname) => {
    let createdElement = document.createElement(element);
    if (classname) {
        createdElement.className = classname;
    }
    return createdElement;
};

export default createElementandSetClass;