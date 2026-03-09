//import './styles';
import React from "react";
import { useLocation } from "react-router-dom";
import { StyledContainer, StyledDetails, StyledLinks } from "./styles.ts";

const Details = () => { 
    const location = useLocation();
    const song = location.state?.song;
    console.log(song);
    return (
        <>
            <StyledContainer>
                {/* Added new styled-components */}
                <StyledLinks to='/home'>Return home</StyledLinks>
                <h1>Track details</h1>
                <StyledDetails className='details'>
                    <img src={song.albumImage} alt=""/>
                    <p>id: {song.idTrack}</p>
                    <p>Group: {song.strArtist}</p>
                    <p>Album: {song.strAlbum}</p>
                    <p>Title: {song.strTrack}</p>
                </StyledDetails>
            </StyledContainer>
        </>
    )
}

export default Details;