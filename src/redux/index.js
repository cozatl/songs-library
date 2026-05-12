import { combineReducers } from "redux";
import songsReducer from "./libraryReducer";

const rootReducer = combineReducers({
    songs: songsReducer,
})
export default rootReducer;