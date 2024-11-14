import { deletePlayList, showEditDialog } from "../../../data/data.js";
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

    const editPlayListButton = createElementWithClass("button")
    editPlayListButton.append('✏️')
    editPlayListButton.addEventListener('click', () => {
        showEditDialog(inputPlayList.id)
    })

    element.append(deletePlaylistButton, editPlayListButton, playListTitleElement, tracksComponent(inputPlayList.tracks));

    return element;
};
