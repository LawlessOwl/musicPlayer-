import { addPlaylist, closeEditDialog } from "../../../data/data.js";
import { createElementWithClass } from "../../playLists/palayList/tracks/classCreator/createElementWithClass.js"

export let dialogButtonsElements = () => {
    const element = createElementWithClass('div');
    
    const addPlayListButton = createElementWithClass('button');
    addPlayListButton.append("Add playlist")
    addPlayListButton.addEventListener('click', () => {
        addPlaylist();
        closeEditDialog();
    })

    const cancelButton = createElementWithClass('button');
    cancelButton.append('Cancel')
    cancelButton.addEventListener('click', () => {
        closeEditDialog();
    })

    element.append(addPlayListButton, cancelButton)

    return element;
} 