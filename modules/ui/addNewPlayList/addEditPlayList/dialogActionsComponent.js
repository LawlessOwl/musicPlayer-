import { addPlaylist, closeEditDialog, isDialogOpen } from "../../../data/data.js";
import { createElementWithClass } from "../../playLists/palayList/tracks/classCreator/createElementWithClass.js"

export let dialogButtonsElements = () => {
    const element = createElementWithClass('div');
    
    const addPlayListButton = createElementWithClass('button');
    addPlayListButton.append("Add playlist")
    if (isDialogOpen.newTitle === '') {
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