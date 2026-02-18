import React from "react";
//import search from '../../img/search.svg' if folder is 2 folders up current folder

const Songs = ({appName, id, title, image, artist, duration}) => {
    return (
        <>
            <div>
                <span key={id}>
                    <img src={image} alt=""/>
                    <a href="#mainLibrary">{title}</a>
                    <a href="#mainLibrary">{artist}</a>
                    <p>{duration}</p>
                </span>
            </div>
        </>
)}

export default Songs;