import { deletePlayList } from "../../../data/data.js";
import { createElementWithClass } from "./tracks/classCreator/createElementWithClass.js";
import { tracksComponent } from "./tracks/tracksComponent.js";



export let playListComponent = (inputPlayList) => {
    const element = createElementWithClass('div', ['playList']);

    const playListTitleElement = document.createElement('h2');
    playListTitleElement.append(inputPlayList.title);

    const deletePlaylistButton = createElementWithClass("button")
    deletePlaylistButton.append('❌')
    deletePlaylistButton.addEventListener('click', () => {
        deletePlayList(inputPlayList.id)
    })

    element.append(deletePlaylistButton ,playListTitleElement, tracksComponent(inputPlayList.tracks));

    return element;
};
