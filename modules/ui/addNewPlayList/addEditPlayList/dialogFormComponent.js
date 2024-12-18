import { addEditPlayListState, setNewAlbumImage, setNewTitle } from "../../../data/data.js";
import { createElementWithClass } from "../../playLists/palayList/tracks/classCreator/createElementWithClass.js"

export let dialogFormElement = () => {
    const element = createElementWithClass('form');
    
    const playListNameInputElement = createElementWithClass('input');
    playListNameInputElement.addEventListener('input', () => {
        setNewTitle(playListNameInputElement.value)
    })

    setTimeout(() => {
        playListNameInputElement.focus()
    }, 0)

    playListNameInputElement.value = addEditPlayListState.newTitle

    const playListImageSourceElement = createElementWithClass('input');
    playListImageSourceElement.addEventListener('input', () => {
        setNewAlbumImage(playListImageSourceElement.value)
    })

    element.append(playListNameInputElement, playListImageSourceElement)

    return element;
} 