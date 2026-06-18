import { createSlice, current } from "@reduxjs/toolkit";

export interface Song {
    idTrack: number;
    strTrack: string;
    idAlbum: number;
    idArtist: number;
    strArtist: string;
    strAlbum: string;
    intDuration: number;
    albumImage: string | null;
}

interface LibraryState {
    songs: Song[]
}

const initialState: LibraryState = {
    songs: []
};
// npm install @reduxjs/toolkit
const librarySlice = createSlice({
    name: 'library',
    initialState,
    // This will replace actions and then passed it to reducers
    reducers: {
        addSong: (state, action) => {
            const exists = state.songs.some(
                song => song.idTrack === action.payload.idTrack
            );
            if(!exists){
                // console.log('state 1',state.songs)
                state.songs.push(action.payload);//console.log('addSong',action.payload)
                console.log('state 2', current(state.songs));
            }
            else {
                console.log('Song was previously added!')
            }
        },
        removeSong: (state, action) => {
            //Return only the tasks that are not selected (removing the selected task)
            // return state.tasks.filter(task => task.id !== action.payload);
            return {
                ...state,
                songs: state.songs.filter(song => song.idTrack !== action.payload)                
            }
            // state.songs = state.songs.filter(song => song.idTrack !== action.payload);
        }
    },
});

// Export actions and reducer
export const { addSong, removeSong } = librarySlice.actions;

const { reducer: libraryReducer } = librarySlice;
export default libraryReducer;
// export default librarySlice.reducer;