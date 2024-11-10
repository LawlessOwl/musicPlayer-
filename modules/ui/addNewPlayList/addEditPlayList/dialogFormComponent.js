import { setNewTitle } from "../../../data/data.js";
import { createElementWithClass } from "../../playLists/palayList/tracks/classCreator/createElementWithClass.js"

export let dialogFormElement = () => {
    const element = createElementWithClass('form');
    
    const playListNemeInputElement = createElementWithClass('input');
    playListNemeInputElement.addEventListener('change', () => {
        setNewTitle(playListNemeInputElement.value)
    })
    const playListImageSourceElement = createElementWithClass('input');

    element.append(playListNemeInputElement, playListImageSourceElement)

    return element;
} 