// THIS IS A HANDLER CAN BE IMPORTED IN COMPONENTS AND TRIGGER BY THEIR EVENTS
export const playSongItem = (songName)=> {
    return playItemSong(songName)  
}
export const playVN = (songName)=> {
    return playVNSong(songName)  
}
export const playUSUK = (songName)=> {
    return playUSUKSong(songName)  
}
export const playKPOP = (songName)=> {
    return playKPOPSong(songName)  
}


//----ACTION TYPES ------------------------------------------------------
export const PLAY_SONG_ITEM = "PLAY_SONG_ITEM";
export const PLAY_SONG_VN = "PLAY_SONG_VN";
export const PLAY_SONG_USUK = "PLAY_SONG_USUK";
export const PLAY_SONG_KPOP = "PLAY_SONG_KPOP";
export const ADD_SONG_TO_PLAYLIST = "ADD_SONG_TO_PLAYLIST";
// ------ACTION CREATOR---------------------------------------------------

export const playItemSong = songName=> ({
    type: PLAY_SONG_ITEM,
    payload: { songName }
});
export const playVNSong = songName=> ({
    type: PLAY_SONG_VN,
    payload: { songName }
});
export const playUSUKSong = songName=> ({
    type: PLAY_SONG_USUK,
    payload: { songName }
});
export const playKPOPSong = songName=> ({
    type: PLAY_SONG_KPOP,
    payload: { songName }
});
export const addThisSong = name => ({
    type: ADD_SONG_TO_PLAYLIST,
    payload: { name }
});
