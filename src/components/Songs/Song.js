import React, { Fragment } from "react";

const Song = (songs) => {
    const handleAdd = () => {
        try {
            songs.onAddSong(songs.song);
        } catch (error) {
            console.log(error);
        }
        
    }
    return (
        <Fragment key={songs.song.id1}>
            <div className="artist__description">
                <img src={songs.song.image} alt=""/>
                <span>
                    <a href="#mainArtist">{songs.song.artist}</a>                               
                    <a href="#mainArtist">{songs.song.title}</a>
                </span>            
            </div>
            <button id="addSong" onClick={handleAdd}>
                <img src={songs.addBtn} alt=""/>
            </button>
            <p>{songs.song.duration}</p>                   
        </Fragment>
)}

export default Song;