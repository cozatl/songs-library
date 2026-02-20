import React from "react";
//import search from '../../img/search.svg' if folder is 2 folders up current folder

const Songs = ({song}) => {
    return (
        <>
            <div>
                <span>
                    <img src={song.image} alt=""/>
                    <a href="#mainLibrary">{song.title}</a>
                    <a href="#mainLibrary">{song.artist}</a>
                    <p>{song.duration}</p>
                </span>
            </div>
        </>
)}

export default Songs;