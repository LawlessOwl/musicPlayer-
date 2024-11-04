import {musicList, subscribe} from './modules/data/data.js'
import { addNewPlayListButton } from './modules/ui/addNewPlayList/addNewPlaylist.js';
import { playListsComponent } from './modules/ui/playLists/playListsComponent.js';

const rootRender = document.getElementById('root');

export let refresh = () => {
    rootRender.innerHTML = ''
    const playListsElement = playListsComponent(musicList)
    rootRender.append(addNewPlayListButton() ,playListsElement)
}

subscribe(refresh)

refresh()




