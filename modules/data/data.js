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

export let isDialogOpen = { 
    value: false,
    newTitle: '',
};

export const setNewTitle = (title) => {
    isDialogOpen.newTitle = title
    emit()
}

export const showEditDialog = () => {
    isDialogOpen.value = true
    emit()
}

export const closeEditDialog = () => {
    isDialogOpen.value = false
    emit()
}

const observers = []


export const deletePlayList = (id) => {
    musicList = musicList.filter(p => p.id !== id)
    emit()
}

export const addPlaylist = () => {
    if (isDialogOpen.newTitle === '') {
        throw new Error("please input the playlist title");
        
    }
    musicList.push({
        id:  Date.now(),
        title: isDialogOpen.newTitle,
        tracks: []
    })
    closeEditDialog();
    isDialogOpen.newTitle = '';
    emit()
}

export const subscribe = (observer) => {
    observers.push(observer)
    emit()
}

const emit = () => {
    observers.forEach((observer) => observer());
}