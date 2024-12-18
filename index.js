import {musicList, subscribe} from './modules/data/data.js'
import { addNewPlayListButton } from './modules/ui/addNewPlayList/addNewPlayList.js';
import { playListsComponent } from './modules/ui/playLists/playListsComponent.js';
import { addEditPlayList } from './modules/ui/addNewPlayList/addEditPlayList/addEditPlayList.js'

const rootRender = document.getElementById('root');

export let refresh = () => {
    rootRender.innerHTML = ''
    const playListsElement = playListsComponent(musicList)
    rootRender.append(addNewPlayListButton() ,playListsElement, addEditPlayList())
}

subscribe(refresh)

refresh()




