import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';    // npm install axios
import { FAILED, IDLE, LOADING, SUCCEEDED } from "../status";

export const fetchAlbum = createAsyncThunk('songs/fetchAlbum', async (artist:string) => {//console.log(`https://www.theaudiodb.com/api/v1/json/123/searchalbum.php?s=${artist}`)
    const response = await axios.get(`https://www.theaudiodb.com/api/v1/json/123/searchalbum.php?s=${artist}`); // Get data from API URL
    // return response.data.slice(0, 10)  ?? [];     // Return only 10 records from all the response
    
    return response.data ?? [];
    });

interface Album {
    idArtist: string;
    strArtist: string;
    idAlbum: string;
    strAlbum: string;
    strAlbumThumb: string;
}
interface AlbumState {
    album: Album[];
    status: string | null;
}

const initialState: AlbumState = {
    album: [],
    status: IDLE,
};
// npm install @reduxjs/toolkit
const albumSlice = createSlice({
    name: 'album',
    initialState,
    // This will replace actions and then passed it to reducers
    reducers: {
    },
    extraReducers: builder => {
        // 3 states
        // Pending. Asynchronous action is in progress to be delivered
        // fulfilled. Asynchronous action is completed and data is retrieved
        // rejected. Asynchronous action failed
        // state. Retrieves state information (data)
        // action. Gatheres all information from the operation
        builder
            .addCase(fetchAlbum.pending, (state, action) => {
                console.log('pending', action);
                state.status = LOADING;
            })
            .addCase(fetchAlbum.fulfilled, (state, action) => {
                console.log('fulfilled', action);
                state.status = SUCCEEDED;
                state.album = action.payload;
            })
            .addCase(fetchAlbum.rejected, (state, action) => {
                console.log('rejected', action);
                state.status = FAILED;
            })
    }
});

// Export actions and reducer
// export const { addAlbum } = albumSlice.actions;

const { reducer: albumReducer } = albumSlice;
export default albumReducer;
// export default librarySlice.reducer;