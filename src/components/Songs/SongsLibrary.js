import React from "react";
import convertInt2Time from "../utils/convertInt2Time.ts";
// import { removeSong } from '../../redux/libraryActions';
import { useDispatch } from "react-redux";
import { removeSong } from "../../redux/slices/librarySlice.ts";

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
                            aria-label="remove"
                            onClick={() => 
                                dispatch(removeSong(song.idTrack))
                            }>-
                    </button>
                </span>
            </div>
        </>
)}

export default Songs;