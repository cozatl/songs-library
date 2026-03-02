import Song from "../Songs/Song.js";
import './styles.css';
// import useFetchAlbum from "../Hooks/useFetchAlbum.ts";
import useFetchSongs from "../Hooks/useFetchSongs.ts";
import { useState } from "react";

function importAll(r) {
    let imgs = {};
    r.keys().forEach((key) => {
        const fileName = key.replace('./','');
        imgs[fileName] = r(key);
    });
    return imgs;
}

const images = importAll(require.context('../../assets/img',false,/\.(png|jpe?g|svg)$/));

const SearchResults = ({appName, onAddSong, album, loadingAlbums, errorAlbums, setArtist}) => {
    const [inputValue, setInputValue] = useState('');

    //Inactive to get data from App.js and mantain state and songs from API
    // const [artist, setArtist] = useState('');
    // const {album, loadingAlbums, errorAlbums} = useFetchAlbum(artist);
    // // console.log(album);

    const handleSearch = (e) => {
        e.preventDefault();
        // console.log('here');
        setArtist(inputValue);
    }

    const {songs, loadingSongs, errorSongs} = useFetchSongs(album);
    // console.log(songs);

    const renderSongs = () => (
        <article className="main__artists">
            <div className="artists__list">
                <div className="artists__search">
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
                </div>            
                {
                    songs.map(song => {
                        return (
                            <article id='mainArtist' className = 'main__artists' key = {song.idTrack}>
                                <section className="artists__title">
                                    <Song
                                        addBtn = {images['plus.svg']}
                                        onAddSong = {onAddSong}
                                        // onDetails = {onDetails}
                                        song = {song}
                                    />
                                </section>
                            </article>
                        )
                    })
                }
            </div>
        </article>
    )
    const renderContent = () => {//console.log(artist.length);
        //It can be applied, either with new functions or  direct code if it is few content
        // if (artist.length > 0){console.log('test',loadingAlbums)
            if (loadingAlbums) return <p>Loading Albums to get songs...</p>
        // }      
        // if (songs != null){
            if (loadingSongs) return <p>Loading Songs...</p>
        // }         
        if (errorAlbums) return <p>Error while loading albums</p>
        // if (loadingSongs && artist != null) return <p>Loading Songs...</p>
        if (errorSongs) 
        {
        return (
                <>
                <article className="main__artists">
                    <div className="artists__list">
                        <div className="artists__search">
                            <input 
                                className="artists__input__search"
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                            />
                            <button onClick={handleSearch}
                                className="artists__btn__search">
                                <img src={images['search.svg']} alt="search"/>
                            </button>
                        </div>
                    </div>
                    <p>No parameters given or group didn't found</p>
                </article>                
                </>)
        }
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