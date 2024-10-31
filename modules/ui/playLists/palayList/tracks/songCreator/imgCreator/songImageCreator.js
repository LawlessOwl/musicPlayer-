export let songImageCreator = (trackImageSource) => {
    const element = document.createElement('img');
    element.src = trackImageSource;
    return element;
};
