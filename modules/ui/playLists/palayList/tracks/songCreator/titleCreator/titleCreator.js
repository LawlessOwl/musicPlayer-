import { hotTracksElement } from './hotTrackCreator/hotTracksElement.js';


export let titleCreator = (inputTrack) => {
    return `${hotTracksElement(inputTrack) + " "}${inputTrack.artist} - ${inputTrack.title}`;
};
