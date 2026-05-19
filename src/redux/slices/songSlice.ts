import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';    // npm install axios
import { FAILED, IDLE, LOADING, SUCCEEDED } from "../status";

type Song = {
    idTrack: number;
    strTrack: string;
    idAlbum: number;
    idArtist: number;
    strArtist: string;
    strAlbum: string;
    intDuration: number;
    albumImage: string | null;
}
interface SongState {
    songs: Song[];
    status: string | null;
}

interface Album {
    idArtist: string;
    strArtist: string;
    idAlbum: string;
    strAlbum: string;
    strAlbumThumb: string;
}

export const fetchSongs = createAsyncThunk('songs/fetchSongs', async (albums: Album[]) => {
    const limitedAlbums = albums.slice(0,10);
    const requests = limitedAlbums.map(async album =>
        axios.get(`https://www.theaudiodb.com/api/v1/json/123/track.php?m=${album.idAlbum}`)
    );
    const albumMap = new Map(
        limitedAlbums.map(album => [album.idAlbum, album.strAlbumThumb])
    );
    // console.log('maps',albumMap)
    const response = await Promise.all(requests);
    // console.log('res',response)
    const allSongs = response.flatMap(res =>
        res.data.track??[]);
        // console.log('all',allSongs);
        const songsWithImg = allSongs.map(song => ({
            ...song, albumImage: albumMap.get(song.idAlbum) || null
        }));
    return songsWithImg ?? [];
    });

const initialState: SongState = {
    songs: [],
    status: IDLE,
};
// npm install @reduxjs/toolkit
const songsSlice = createSlice({
    name: 'album',
    initialState,
    // This will replace actions and then passed it to reducers
    reducers: {
        // addSongs: (state, action) => {
        //     state.songs.push(action.payload);
        // },        
    },
    extraReducers: builder => {
        // 3 states
        // Pending. Asynchronous action is in progress to be delivered
        // fulfilled. Asynchronous action is completed and data is retrieved
        // rejected. Asynchronous action failed
        // state. Retrieves state information (data)
        // action. Gatheres all information from the operation
        builder
            .addCase(fetchSongs.pending, (state, action) => {
                console.log('pending', action);
                state.status = LOADING;
            })
            .addCase(fetchSongs.fulfilled, (state, action) => {
                console.log('fulfilled', action);
                state.songs = action.payload;
                state.status = SUCCEEDED;
            })
            .addCase(fetchSongs.rejected, (state, action) => {
                console.log('rejected', action);
                state.status = FAILED;
            })
    }
});

// Export actions and reducer
// export const { addSongs } = songsSlice.actions;

const { reducer: songsReducer } = songsSlice;
export default songsReducer;
// export default librarySlice.reducer;