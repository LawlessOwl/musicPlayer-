const musicList = [
    {
        id: 1,
        title: "OP",
        tracks: [
            {
                artist: "KISIDA KYODAN & THE AKEBOSI ROCKETS",
                title: "HIGHSCHOOL OF THE DEAD",
                isHot: true
            },
            {
                artist: "ALI",
                title: "LOST IN PARADISE",
                isHot: true
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
                isHot: true
            },
            {
                artist: "DOMO",
                title: "Alone",
                isHot: true
            }
        ]
    }
];

const rootRender = document.getElementById('root');

for (let i = 0; i < musicList.length; i++) {
    const playList = musicList[i];

    const playListElement = document.createElement('div');

    const playListTitleElement = document.createElement('h2');
    playListTitleElement.textContent = playList.title;
    playListElement.appendChild(playListTitleElement);

    const tracksElement = document.createElement("ul");

    for (let j = 0; j < playList.tracks.length; j++) {
        const track = playList.tracks[j];
        const trackElement = document.createElement('li');
        const trackTitleElement = document.createElement('p');
        trackTitleElement.textContent = track.title;
        trackElement.appendChild(trackTitleElement);
        tracksElement.appendChild(trackElement);
    }

    playListElement.appendChild(tracksElement);
    rootRender.appendChild(playListElement);
}