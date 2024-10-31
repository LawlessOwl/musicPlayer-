import { playListComponent } from './palayList/playListComponent.js';

export let playListsComponent = (inputPlayLists) => {
    const element = document.createElement('div');

    for (let i = 0; i < inputPlayLists.length; i++) {
        const playList = inputPlayLists[i];

        element.append(playListComponent(playList));
    }

    return element;
};
