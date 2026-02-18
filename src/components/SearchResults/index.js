import React,{useEffect, useState} from "react";
import Song from "../Songs/Song.js";
import './styles.css';

function importAll(r) {
    let imgs = {};
    r.keys().forEach((key) => {
        const fileName = key.replace('./','');
        imgs[fileName] = r(key);
    });
    return imgs;
}

const images = importAll(require.context('../../assets/img',false,/\.(png|jpe?g|svg)$/));

const SearchResults = ({appName}) => {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        const fetchSongs = async () => {
            const response = [
            {id1: 1, image: images['bon jovi.png'], artist:'Cold Play', title:'Yellow', duration:'4:26'},
            {id1: 2, image: images['bon jovi.png'], artist:'Cold Play', title:'Vival La Vida', duration:'3:56'},
            {id1: 3, image: images['bon jovi.png'], artist:'Cold Play', title:'Something Just Like This', duration:'4:45'},
            {id1: 4, image: images['bon jovi.png'], artist:'Cold Play', title:'The Scientist', duration:'4:12'},
            {id1: 5, image: images['bon jovi.png'], artist:'Cold Play', title:'A Sky Full of Stars', duration:'5:05'},
            {id1: 6, image: images['bon jovi.png'], artist:'Bon Jovi', title:'Livin on a prayer', duration:'5:35'},
            {id1: 7, image: images['bon jovi.png'], artist:'Los Angeles Azules', title:'Nunca es suficiente', duration:'4:55'},
            {id1: 8, image: images['bon jovi.png'], artist:'Scorpions', title:'When you came into my life', duration:'4:23'}
            ];

            setSongs(response);
        };
        fetchSongs();
    }, [])
    
return (
    <>
        <div className="artists__search">
            <button className="artists__btn__search"><img src={images['search.svg']} alt="search"/></button>
            <input className="artists__input__search" type="text"/>
            {/* <button className="artists__btn__recent">Recent&nbsp;<img src={images['menu.svg']} alt="menu"/></button> */}
        </div>
        {
            songs.map(song => {
                const { id1, title, artist, image, duration } = song;
                return (
                    <article id='mainArtist' className = 'main__artists'>
                        <section className="artists__title" key = {id1}>
                            <Song
                                id1 = {id1}
                                title = {title}
                                artist = {artist}
                                image = {image}
                                duration = {duration}
                                addBtn = {images['plus.svg']}
                            />
                        </section>
                    </article>
                )
            })
            // songs.map(song => {
            //     // const { id1, title, artist, image, duration, addBtn } = movie;
            //     return (
            //     <article id='mainArtist' className = 'main__artists'>
            //         <section className="artists__title">
            //             <Song song = {song} />
            //         </section>
            //     </article>
            //     )
            // })
        }
    </>
)
};

export default SearchResults;