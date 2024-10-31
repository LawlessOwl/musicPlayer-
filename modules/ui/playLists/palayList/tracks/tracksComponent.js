import { songCreator } from './songCreator/songCreator.js';

export let tracksComponent = (inputTracks) => {
    const element = document.createElement("ul");


    for (let j = 0; j < inputTracks.length; j++) {
        const track = inputTracks[j];

        const trackElement = songCreator(track);

        element.append(trackElement);
    }

    return element;

};
