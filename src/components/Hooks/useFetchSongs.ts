import axios from "axios";
import { useEffect, useState } from "react"

type Song = {
    idTrack: number;
    strTrack: string;
    idAlbum: number;
    idArtist: number;
    strArtist: string;
    strAlbum: string;
    intDuration: number;
    albumImage: string | null;
}
interface FetchSongState {
    songs: Song[];
    loadingSongs: boolean;
    errorSongs: string | null;
}

interface Album {
    idArtist: string;
    strArtist: string;
    idAlbum: string;
    strAlbum: string;
    strAlbumThumb: string;
}

const useFetchSongs = (albums: Album[]) => {
    const [songState,setSongState] = useState<FetchSongState>({songs: [], loadingSongs: true, errorSongs: null}); 
    useEffect(() => {//console.log(albumState.album.length)
        // if (!albums || albums.length === 0) {//console.log(albums.length);
        //     console.log('No Albums were given, please validate input parameter');
        //     return;
        // }
            
        const fetchSong = async () => {
            setSongState(prev => ({
                ...prev,
                loadingSongs:false,
                errorSongs:null}));
            try {
                const limitedAlbums = albums.slice(0,10);
                // console.log('tets',limitedAlbums);
                const requests = limitedAlbums.map(album =>
                    axios.get(`https://www.theaudiodb.com/api/v1/json/123/track.php?m=${album.idAlbum}`)
                );
                const albumMap = new Map(
                    limitedAlbums.map(album => [album.idAlbum, album.strAlbumThumb])
                );
                // console.log(requests)
                const response = await Promise.all(requests);
                const allSongs = response.flatMap(res =>
                    res.data.track??[]);
                    // console.log(allSongs);
                    const songsWithImg = allSongs.map(song => ({
                        ...song, albumImage: albumMap.get(song.idAlbum) || null
                    }));
                    // console.log(songsWithImg);
                    setSongState({songs:songsWithImg, loadingSongs:false, errorSongs:null}
                );
                
            } catch (error) {
                setSongState({songs: [], loadingSongs:false, errorSongs:"Failed to fetch album values"}); 
            }
        }
        
        fetchSong();
    }, [albums]);//console.log(songState);
    return songState;
};

export default useFetchSongs;