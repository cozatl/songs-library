import Song from "../Songs/Song.js";
import './styles.ts';
import React, { useEffect, useState } from "react";
import { StyledArtistsList, StyledArtistsSearch, StyledArtistsTitle, StyledMainArtists } from "./styles.ts";
import { AppDispatch, RootState } from "../../redux/store.ts";
import { useDispatch, useSelector } from "react-redux";
import { FAILED, LOADING, SUCCEEDED } from "../../redux/status.js";
import { fetchAlbum } from "../../redux/slices/albumSlice.ts";
import { fetchSongs } from "../../redux/slices/songSlice.ts";


declare const require: any;
function importAll(r: any) {
    let imgs:Record<string,string> = {};
    r.keys().forEach((key: string) => {
        const fileName = key.replace('./','');
        imgs[fileName] = r(key);
    });
    return imgs;
}

// const images = importAll((require as any).context('../../assets/img',false,/\.(png|jpe?g|svg)$/)); //Required in production
//Next lines required only for TESTING
const images = typeof require.context === 'function'
  ? importAll((require as any).context('../../assets/img',false,/\.(png|jpe?g|svg)$/))
  : {};

    const SearchResults = () => {
    // Create dispatch to work with the store
    const dispatch = useDispatch<AppDispatch>();
    const [inputValue, setInputValue] = useState('');

    // Define local variables from Slicers
    const album = useSelector((state:RootState) => state.album.album);
    const status = useSelector((state:RootState) => state.album.status);
    
    const songs = useSelector((state:RootState) => state.songs.songs);
    const statusSongs = useSelector((state:RootState) => state.songs.status);    

    // Control button to get albums from input form
    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();//console.log('input',inputValue)
        dispatch(fetchAlbum(inputValue));
    }

    // UseEffect to get songs with the results from albums gathered
    useEffect(() => {
        const albums = Object.values(album).flat();
        // console.log('status:',status);
        //Executes it only when the component is idle and not all the time
        if (status === SUCCEEDED && albums.length > 0) {
            dispatch(fetchSongs(albums));
        }
    },[album, status, dispatch]);

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
                    songs.map(song => {console.log('test')
                        return (
                            <article id='mainArtist' key = {song.idTrack}>
                                <StyledArtistsTitle className="artists__title">
                                    <Song
                                        addBtn = {images['plus.svg']}
                                        song = {song}
                                    />
                                </StyledArtistsTitle>
                            </article>
                        )
                    })
                }
                {
                    status === FAILED && <p>Error while loading albums or incorrect parameters were given.</p>
                }
                {
                    statusSongs === FAILED && <p>Error while loading songs or no album was found.</p>
                }
            </StyledArtistsList>
        </StyledMainArtists>
    )
    const renderContent = () => {
        if (status === LOADING) return <p style={{zIndex: 100}}>Loading Albums to get songs...</p>
        if (statusSongs === LOADING) return <p style={{zIndex: 100}}>Loading Songs...</p>
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