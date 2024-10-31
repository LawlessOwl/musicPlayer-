import {musicList} from './modules/data/data.js'
import { playListsComponent } from './modules/ui/playLists/playListsComponent.js';

const rootRender = document.getElementById('root');


const playListsElement = playListsComponent(musicList)

rootRender.append(playListsElement)




