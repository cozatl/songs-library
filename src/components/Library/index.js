import './styles.css';
import Songs from "../Songs/SongsLibrary.js";

const Library = ({songs}) => {
    
    return (
        <>
            <article className = 'main__library'>                
                <div className="library__list">
                    {songs.map(song => {                        
                        return (
                            <div className='library__song' key={song.id1}>
                                    <Songs
                                        song = {song}
                                    />
                            </div>
                        )
                    })}
                </div>
            </article>
            {/* <article className = 'main__library'>                
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
            </article> */}
        </>
    )
}

export default Library;