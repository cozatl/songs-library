import './styles.css';
import React,{useEffect, useState} from "react";
import Songs from "../Songs/SongsLibrary.js";

function importAll(r) {
    let imgs = {};
    r.keys().forEach((key) => {
        const fileName = key.replace('./','');
        imgs[fileName] = r(key);
    });
    return imgs;
}

const images = importAll(require.context('../../assets/img',false,/\.(png|jpe?g|svg)$/));

const Library = ({appName, id, title, image, artist, duration}) => {
    const [songs, setSongs] = useState([]);
    
        useEffect(() => {
            const fetchSongs = async () => {
                const response = [
            {id: 1, image: images['bon jovi.png'], artist:'Cold Play', title:'Yellow', duration:'4:26'},
            {id: 2, image: images['bon jovi.png'], artist:'Cold Play', title:'Vival La Vida', duration:'3:56'},
            {id: 3, image: images['bon jovi.png'], artist:'Cold Play', title:'Something Just Like This', duration:'4:45'},
            {id: 4, image: images['bon jovi.png'], artist:'Cold Play', title:'The Scientist', duration:'4:12'},
            {id: 5, image: images['bon jovi.png'], artist:'Cold Play', title:'A Sky Full of Stars', duration:'5:05'}
            ];
    
            setSongs(response);
            };
            fetchSongs();
        }, [])

    return (
        <>
            <article className = 'main__library'>                
                <div className="library__list">
                    {songs.map(song => {
                        const { id, title, artist, image, duration } = song;
                        return (
                            <div className='library__song'>
                                    <Songs
                                        key = {id}
                                        image = {image}
                                        title = {title}
                                        artist = {artist}                                        
                                        duration = {duration}
                                    />
                            </div>
                        )
                    })}
                </div>
            </article>
        </>
    )
}

export default Library;