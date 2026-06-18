import React, { Fragment } from "react";
import convertInt2Time from "../utils/convertInt2Time.ts";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addSong } from "../../redux/slices/librarySlice.ts";
// import { addSong } from "../../redux/libraryActions.js"        //NOT NEEDED FOR REDUX TOOLKIT

const Song = (songs) => {
    const dispatch = useDispatch();                //ADDED TO DISPATCH SONG DIRECTLY HERE

    const handleAdd = () => {
        try {
            // songs.onAddSong(songs.song);        //NOT NEEDED FOR REDUX
            dispatch(addSong(songs.song));//console.log('songs',songs.song)
        } catch (error) {
            console.log(error);
        }        
    }
    
    return (
        <Fragment key={songs.song.idTrack}>
            <div className="artist__description">
                <img src={songs.song.albumImage} alt=""/>
                <span>
                    <Link to ={`/song/${songs.song.idTrack}`} state={{song: songs.song}} >
                        {songs.song.strArtist}
                    </Link>
                    <Link to ={`/song/${songs.song.idTrack}`} state={{song: songs.song}} >
                        {songs.song.strTrack}
                    </Link>
                </span>            
            </div>
            <button id="addSong"
                    aria-label="add"
                    onClick={handleAdd}>
                <img src={songs.addBtn} alt=""/>
            </button>
            <p>{convertInt2Time(songs.song.intDuration)}</p>
        </Fragment>
)}

export default Song;