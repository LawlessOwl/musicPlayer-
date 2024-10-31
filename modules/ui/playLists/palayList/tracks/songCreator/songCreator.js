import { titleCreator } from './titleCreator/titleCreator.js';
import { songImageCreator } from "./imgCreator/songImageCreator.js";


export let songCreator = (inputTrack) => {
    const element = document.createElement('li');

    let trackSongElement = document.createElement('audio');
    trackSongElement.setAttribute('controls', '');
    trackSongElement.src = inputTrack.songSource;

    element.append(songImageCreator(inputTrack.imageSource), titleCreator(inputTrack), trackSongElement);
    return element;
};
