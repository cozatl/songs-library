import React from "react";
import convertInt2Time from "../utils/convertInt2Time.ts";
import { removeSong } from '../../redux/libraryActions';
import { useDispatch } from "react-redux";

const Songs = ({song}) => {

    const dispatch = useDispatch();

    return (
        <>
            <div>
                <span>
                    <img src={song.albumImage} alt=""/>
                    <a href="#mainLibrary">{song.strTrack}</a>
                    <a href="#mainLibrary">{song.strArtist}</a>
                    <p>{convertInt2Time(song.intDuration)}</p>
                    <button id="removeSong" 
                            onClick={() => 
                                dispatch(removeSong(song.idTrack))
                            }>-
                    </button>
                </span>
            </div>
        </>
)}

export default Songs;