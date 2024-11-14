import { addEditPlayListState, setNewTitle } from "../../../data/data.js";
import { createElementWithClass } from "../../playLists/palayList/tracks/classCreator/createElementWithClass.js"

export let dialogFormElement = () => {
    const element = createElementWithClass('form');
    
    const playListNemeInputElement = createElementWithClass('input');
    playListNemeInputElement.addEventListener('input', () => {
        setNewTitle(playListNemeInputElement.value)
    })

    setTimeout(() => {
        playListNemeInputElement.focus()
    }, 0)

    playListNemeInputElement.value = addEditPlayListState.newTitle

    const playListImageSourceElement = createElementWithClass('input');

    element.append(playListNemeInputElement, playListImageSourceElement)

    return element;
} 