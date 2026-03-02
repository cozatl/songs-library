import axios from "axios";
import { useEffect, useState } from "react"

interface Album {
    idArtist: string;
    strArtist: string;
    idAlbum: string;
    strAlbum: string;
    strAlbumThumb: string;
}
interface FetchAlbumState {
    album: Album[];
    loadingAlbums: boolean;
    errorAlbums: string | null;
}

const useFetchAlbum = (artist: string) => {
   const [albumState,setAlbumState] = useState<FetchAlbumState>({album: [], loadingAlbums: true, errorAlbums: null});
    useEffect(() => {
        if(!artist) {
            console.log('No artist parameter was given, please add an artist to search!')
            setAlbumState({album: [], loadingAlbums: false, errorAlbums: null});
            return;
        }            

        const fetchAlbum = async () => {
            try {
                const response = await axios.get(`https://www.theaudiodb.com/api/v1/json/123/searchalbum.php?s=${artist}`);
                
                setAlbumState({album: response.data.album, loadingAlbums:false, errorAlbums:null});
            } catch (error) {
                setAlbumState({album: [], loadingAlbums: false, errorAlbums: "Failed to fetch album values"});
            }
        }

        fetchAlbum();
    }, [artist]);

    return albumState;
};

export default useFetchAlbum;