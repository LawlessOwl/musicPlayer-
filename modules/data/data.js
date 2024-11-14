export let musicList = [
    {
        id: 1,
        title: "OP",
        tracks: [
            {
                artist: "ALI",
                title: "LOST IN PARADISE",
                isHot: true,
                imageSource: "/musicPlayer-/src/img/lostInParadise.jpg",
                songSource: "./src/songs/Ali Lost In Paradise (Jujutsu Kaisen Ending Theme Song) (Feat. Aklo).mp3"
            },
            {
                artist: "Kenshi Yonezu",
                title: "KICK BACK",
                isHot: true,
                imageSource: "/musicPlayer-/src/img/kickBack.jpg",
                songSource: "./src/songs/kickBack.mp3"
            }
        ]
    },
    {
        id: 2,
        title: "Lo-Fi",
        tracks: [
            {
                artist: "Dreamhop",
                title: "Somewhere Elsewhere",
                isHot: true,
                imageSource: "/musicPlayer-/src/img/somewhereElsewhere.jpg",
                songSource: "./src/songs/SomewhereElsewhere.mp3"
            },
            {
                artist: "DOMO",
                title: "Alone",
                isHot: true,
                imageSource: "/musicPlayer-/src/img/alone.jpg",
                songSource: "./src/songs/alone.mp3"
            }
        ]
    }
];

export let addEditPlayListState = { 
    value: false,
    newTitle: '',
    id: null,
};

export const setNewTitle = (title) => {
    addEditPlayListState.newTitle = title
    emit()
}

export const showEditDialog = (playlistId = null) => {
    addEditPlayListState.value = true
    if (playlistId) {
        addEditPlayListState.id = playlistId;
        const foundedPlaylists = musicList.find((p) => p.id === playlistId)
        if (!foundedPlaylists) {
            throw new Error('404')
        }
        addEditPlayListState.newTitle = foundedPlaylists.title
    }
    emit()
}

export const closeEditDialog = () => {
    addEditPlayListState.value = false
    addEditPlayListState.id = null
    addEditPlayListState.title = ''
    emit()
}

const observers = []


export const deletePlayList = (id) => {
    musicList = musicList.filter(p => p.id !== id)
    emit()
}

export const addPlaylist = () => {
    if (addEditPlayListState.newTitle === '') {
        throw new Error("please input the playlist title");
        
    }

    if (addEditPlayListState.id) {
        const foundedPlaylists = musicList.find((p) => p.id === addEditPlayListState.id)
        if (!foundedPlaylists) {
            throw new Error('404')
        }
        foundedPlaylists.title =  addEditPlayListState.newTitle
    } else {
        musicList.push({
            id:  Date.now(),
            title: addEditPlayListState.newTitle,
            tracks: []
        })
    }
    closeEditDialog();
    addEditPlayListState.newTitle = '';
    emit()
}

export const subscribe = (observer) => {
    observers.push(observer)
    emit()
}

const emit = () => {
    observers.forEach((observer) => observer());
}