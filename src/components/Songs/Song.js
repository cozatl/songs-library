import React, { Fragment } from "react";
import convertInt2Time from "../utils/convertInt2Time.ts";
import { Link } from "react-router-dom";

const Song = (songs) => {
    const handleAdd = () => {
        try {
            songs.onAddSong(songs.song);
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
            <button id="addSong" onClick={handleAdd}>
                <img src={songs.addBtn} alt=""/>
            </button>
            <p>{convertInt2Time(songs.song.intDuration)}</p>
        </Fragment>
)}

export default Song;