import React from "react";
//import search from '../../img/search.svg' if folder is 2 folders up current folder

// const Song = ({id1, addBtn, title, image, artist, duration}) => {
//     return (
        
//         <>
//             {/* <p>{id1}</p> */}
            
//             <div className="artist__description">
//                 <img src={image} alt=""/>
//                 <span>
//                     <a href="#mainArtist">{artist}</a>                               
//                     <a href="#mainArtist">{title}</a>
//                 </span>            
//             </div>
//             <button id="addSong" >
//                 <img src={addBtn} alt=""/>
//             </button>
//             <p>{duration}</p>                   
//         </>
// )}
const Song = (song) => {
    // const handleAdd = () => {
    //     onAddSong(song);console.log(song)
    // }
    return (        
        <>
            <p></p>
            <div className="artist__description" key={song.id1}>
                <img src={song.image} alt=""/>
                <span>
                    <a href="#mainArtist">{song.artist}</a>                               
                    <a href="#mainArtist">{song.title}</a>
                </span>            
            </div>
            <button id="addSong">
                <img src={song.addBtn} alt=""/>
            </button>
            <p>{song.duration}</p>                   
        </>
)}

export default Song;