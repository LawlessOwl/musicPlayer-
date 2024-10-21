const musicList = [
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

const rootRender = document.getElementById('root');

let songImageCreator = (trackImageSource) => {
    element = document.createElement('img');
    element.src = trackImageSource;
    return element;
}

let songCreator = (inputTrack) => {
    const element = document.createElement('li');

    const trackImgElement = songImageCreator(inputTrack.imageSource)

    trackSongElement = document.createElement('audio');
    trackSongElement.setAttribute('controls', '');
    trackSongElement.src = inputTrack.songSource;

    element.append(trackImgElement, inputTrack.title, trackSongElement);
    return element;
}


for (let i = 0; i < musicList.length; i++) {
    const playList = musicList[i];

    const playListElement = document.createElement('div');

    const playListTitleElement = document.createElement('h2');
    playListTitleElement.textContent = playList.title;

    const tracksElement = document.createElement("ul");

    for (let j = 0; j < playList.tracks.length; j++) {
        const track = playList.tracks[j];
        
        const trackElement = songCreator(track)

        tracksElement.append(trackElement);
    }

    playListElement.append(playListTitleElement, tracksElement); 
    rootRender.append(playListElement);
}
