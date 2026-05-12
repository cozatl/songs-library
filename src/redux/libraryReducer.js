const initialState = {
    songs: []
}
const songsReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_SONG':
            //Review if song exists in the library before adding it again.
            const exists = state.songs.some(
                song => song.idTrack === action.payload.idTrack
            );
            if (exists) {
                console.log('Song was previously added!'); //Send message in case song was added previously
                return state;
            }
            return {
                ...state,
                songs: [...state.songs, action.payload]
            }
        case 'REMOVE_SONG':
            return {
                ...state,
                songs: state.songs.filter(song => song.idTrack !== action.payload)
            }
        default:
            return state
    }
}

export default songsReducer;