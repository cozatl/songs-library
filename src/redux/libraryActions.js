export const addSong = (song) => {
    return {
        type: 'ADD_SONG',
        payload: song,
    }
}

export const removeSong = (idTrack) => {
    return {
        type: 'REMOVE_SONG',
        payload: idTrack,
    }
}