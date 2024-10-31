export let createElementWithClass = (tagName, classes = []) => {
    const element = document.createElement(tagName);
    classes.forEach(cl => {
        element.classList.add(cl);
    });
    return element;
};
