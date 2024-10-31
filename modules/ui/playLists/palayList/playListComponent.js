import { createElementWithClass } from "./tracks/classCreator/createElementWithClass.js";
import { tracksComponent } from "./tracks/tracksComponent.js";



export let playListComponent = (inputPlayList) => {
    const element = createElementWithClass('div', ['playList']);

    const playListTitleElement = document.createElement('h2');
    playListTitleElement.textContent = inputPlayList.title;

    element.append(playListTitleElement, tracksComponent(inputPlayList.tracks));

    return element;
};
