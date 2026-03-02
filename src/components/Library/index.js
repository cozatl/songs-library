import './styles.css';
import Songs from "../Songs/SongsLibrary.js";

const Library = ({songs}) => {
    
    return (
        <article id='mainLibrary' className = 'main__library'>
            <div className="library__list">
                <article className = 'main__library'>
                    <section className="library__title">
                        <h2>Library List</h2>
                        <div className="library__list">
                            <article className="library__songs">
                                {songs.map(song => {
                                    return (
                                        <div className='library__song' key={song.idTrack}>
                                                <Songs
                                                    song = {song}
                                                />
                                        </div>
                                    )
                                })}
                            </article>
                        </div>
                    </section>
                </article>
            </div>
        </article>
    )
}

export default Library;