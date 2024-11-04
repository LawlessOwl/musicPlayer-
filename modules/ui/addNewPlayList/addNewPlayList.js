import { addPlaylist } from "../../data/data.js";
import { createElementWithClass } from "../playLists/palayList/tracks/classCreator/createElementWithClass.js"

export const addNewPlayListButton = () => {
    const element = createElementWithClass('div');

    const addNewPlayListButton = createElementWithClass('button');
    addNewPlayListButton.append('add new playlist');
    element.append(addNewPlayListButton);
    addNewPlayListButton.addEventListener('click', () => {
        addPlaylist()
    })

    return(element)
}