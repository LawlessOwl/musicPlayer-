import { addPlaylist, closeEditDialog, addEditPlayListState } from "../../../data/data.js";
import { createElementWithClass } from "../../playLists/palayList/tracks/classCreator/createElementWithClass.js"

export let dialogButtonsElements = () => {
    const element = createElementWithClass('div');
    
    const addPlayListButton = createElementWithClass('button');
    addPlayListButton.append(addEditPlayListState.id ? "Save" : "Add playlist")
    if (addEditPlayListState.newTitle === '') {
        addPlayListButton.disabled = true;
    }
    addPlayListButton.addEventListener('click', () => {
        try {
            addPlaylist();
        } catch(error) {
            alert(error)
        }
        
    })

    const cancelButton = createElementWithClass('button');
    cancelButton.append('Cancel')
    cancelButton.addEventListener('click', () => {
        closeEditDialog();
    })

    element.append(addPlayListButton, cancelButton)

    return element;
} 