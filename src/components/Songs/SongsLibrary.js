import React from "react";
import convertInt2Time from "../utils/convertInt2Time.ts";
//import search from '../../img/search.svg' if folder is 2 folders up current folder

const Songs = ({song}) => {
    return (
        <>
            <div>
                <span>
                    <img src={song.albumImage} alt=""/>
                    <a href="#mainLibrary">{song.strTrack}</a>
                    <a href="#mainLibrary">{song.strArtist}</a>
                    <p>{convertInt2Time(song.intDuration)}</p>
                </span>
            </div>
        </>
)}

export default Songs;