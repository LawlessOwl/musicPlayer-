import { isDialogOpen } from "../../../data/data.js";
import { createElementWithClass } from "../../playLists/palayList/tracks/classCreator/createElementWithClass.js"
import { dialogButtonsElements } from "./dialogActionsComponent.js";
import { dialogFormElement } from "./dialogFormComponent.js";
import { dialogHeaderElement } from "./dialogHeaderComponent.js";

export let addEditPlayList = () => {
    const element = createElementWithClass('dialog');

    element.append(dialogHeaderElement(), dialogFormElement(), dialogButtonsElements())

  element.open = isDialogOpen.value;

    return element;
} 