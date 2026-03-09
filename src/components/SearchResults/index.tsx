import Song from "../Songs/Song.js";
import './styles.ts';
import useFetchSongs from "../Hooks/useFetchSongs.ts";
import React, { useState } from "react";
import { StyledArtistsList, StyledArtistsSearch, StyledArtistsTitle, StyledMainArtists } from "./styles.ts";

declare const require: any;
function importAll(r: any) {
    let imgs:Record<string,string> = {};
    r.keys().forEach((key: string) => {
        const fileName = key.replace('./','');
        imgs[fileName] = r(key);
    });
    return imgs;
}

const images = importAll((require as any).context('../../assets/img',false,/\.(png|jpe?g|svg)$/));

interface SearchResultProps {
    onAddSong: (song:any) => void;
    album: any[];
    loadingAlbums: boolean;
    errorAlbums: string | null;
    setArtist: React.Dispatch<React.SetStateAction<string>>;
}

const SearchResults = ({onAddSong, album, loadingAlbums, errorAlbums, setArtist}: SearchResultProps) => {
    const [inputValue, setInputValue] = useState('');

    //Inactive to get data from App.js and mantain state and songs from API
    // const [artist, setArtist] = useState('');
    // const {album, loadingAlbums, errorAlbums} = useFetchAlbum(artist);
    // // console.log(album);

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //  console.log('here');
        setArtist(inputValue);
    }

    let {songs, loadingSongs, errorSongs} = useFetchSongs(album);
    
    // console.log(songs);

    const renderSongs = () => (
        <StyledMainArtists>
            <StyledArtistsList>
                <StyledArtistsSearch className="artists__search">
                    <form onSubmit={handleSearch}>
                        <label>Search Artist: </label>
                        <input
                            className="artists__input__search"
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                         <button type="submit"
                            className="artists__btn__search">
                            <img src={images['search.svg']} alt="search"/>
                            
                        </button>
                    </form>
                </StyledArtistsSearch>            
                {
                    songs.map(song => {
                        return (
                            <article id='mainArtist' key = {song.idTrack}>
                                <StyledArtistsTitle className="artists__title">
                                    <Song
                                        addBtn = {images['plus.svg']}
                                        onAddSong = {onAddSong}
                                        // onDetails = {onDetails}
                                        song = {song}
                                    />
                                </StyledArtistsTitle>
                            </article>
                        )
                    })
                }
            </StyledArtistsList>
        </StyledMainArtists>
    )
    const renderContent = () => {//console.log(artist.length);
        //It can be applied, either with new functions or  direct code if it is few content
        // if (artist.length > 0){console.log('test',loadingAlbums)
        if (loadingAlbums) return <p style={{zIndex: 100}}>Loading Albums to get songs...</p>
        if (errorAlbums) return <p>Error while loading albums</p>
        if (loadingSongs) return <p style={{zIndex: 100}}>Loading Songs...</p>
        if (errorSongs)
        return (
                <StyledMainArtists>
                    <StyledArtistsList>
                        <StyledArtistsSearch>
                            <form onSubmit={handleSearch}>
                                <label>Search Artist: </label>
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                />
                                <button type="submit">
                                    <img src={images['search.svg']} alt="search"/>
                                </button>
                            </form>
                        </StyledArtistsSearch>
                    </StyledArtistsList>
                    <p>No parameters given or group not found</p>
                </StyledMainArtists>
                )
        return renderSongs();
    }
    return (
        <>
            {
                renderContent()
            }
        </>
    )
};
export default SearchResults;