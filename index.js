import {musicList} from './modules/data/data.js'
import { playListsComponent } from './modules/ui/playLists/playListsComponent.js';

const rootRender = document.getElementById('root');

export let refresh = () => {
    rootRender.innerHTML = ''
    const playListsElement = playListsComponent(musicList)
    rootRender.append(playListsElement)
}


const playListsElement = playListsComponent(musicList)

rootRender.append(playListsElement)




