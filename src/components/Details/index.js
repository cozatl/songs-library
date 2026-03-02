import './styles.css';
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Details = () => { 
    const location = useLocation();
    const song = location.state?.song;
    console.log(song);
    return (
        <>
            <article className = 'main__details'>
                <Link className='links' to='/home'>Return home</Link>
                <h1>Track details</h1>
                <div className='details'>
                    <img src={song.albumImage} alt=""/>
                    <p>id: {song.idTrack}</p>
                    <p>Group: {song.strArtist}</p>
                    <p>Album: {song.strAlbum}</p>
                    <p>Title: {song.strTrack}</p>
                </div>
            </article>
        </>
    )
}

export default Details;