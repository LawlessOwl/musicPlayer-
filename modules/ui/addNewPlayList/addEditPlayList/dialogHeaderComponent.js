import { createElementWithClass } from "../../playLists/palayList/tracks/classCreator/createElementWithClass.js"

export let dialogHeaderElement = () => {
    const element = createElementWithClass('h3');

    element.append("Add new playlist")

    return element;
} 