/*     NOT USED BECAUSE NOW USING REDUX TOOLKIT *****
import { createStore } from 'redux';
import rootReducer from './index';

//File converted to Typescript to type store and use it correctly in other files
export const store = createStore(rootReducer);
//Typing RootState to avoid errors in Typescript files
export type RootState = ReturnType<typeof store.getState>;

export default store;
//******/


import { configureStore } from "@reduxjs/toolkit";
import libraryReducer from "./slices/librarySlice.ts";
import albumReducer from "./slices/albumSlice.ts";
import songsReducer from "./slices/songSlice.ts";


export const store = configureStore ({
    reducer: {
        library: libraryReducer,
        album: albumReducer,
        songs: songsReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;