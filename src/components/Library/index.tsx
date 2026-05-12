import React from "react";
import './styles.ts';
import Songs from "../Songs/SongsLibrary.js";
import { StyledLibraryList, StyledMainLibrary } from './styles.ts';
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store.tsx";

//When input parameter is given, we need to create the object and assigned it to a list
//so that we can attach it in the input parameter
// TYPE DEFINITION not used since redux was used for this matter
// type Song = {
//     idTrack: number;
//     strTrack: string;
//     idAlbum: number;
//     idArtist: number;
//     strArtist: string;
//     strAlbum: string;
//     intDuration: number;
//     albumImage: string | null;
// }

// type SongsList = {
//     songs: Song[];
// }


// const Library = ({songs}: SongsList) => {        //NOT NEEDED FOR REDUX
const Library = () => {
    const songs = useSelector((state:RootState) => state.songs.songs);
    return (
        <StyledMainLibrary id='mainLibrary'>
            <StyledLibraryList>
                <article>
                    <section>
                        <h2>Library List</h2>
                        <article>
                            {songs.map(song => {
                                return (
                                    <div key={song.idTrack}>
                                            <Songs
                                                song = {song}
                                            />
                                    </div>
                                )
                            })}
                        </article>
                    </section>
                </article>
            </StyledLibraryList>
        </StyledMainLibrary>
    )
}

export default Library;