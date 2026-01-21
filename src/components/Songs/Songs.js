import React, {Component} from "react";
//import search from '../../img/search.svg' if folder is 2 folders up current folder

function importAll(r) {
    let imgs = {};
    r.keys().forEach((key) => {
        const fileName = key.replace('./','');
        imgs[fileName] = r(key);
    });
    return imgs;
}

const images = importAll(require.context('../../assets/img',false,/\.(png|jpe?g|svg)$/));

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isloggedIn: false,
            welcomeMessage: 'Welcome'
        }
    }

    render() {
        return (
            <main>
                <article className = 'main__library'>
                    <div className="library__search">
                        <button className="library__btn__search"><img src={images['search.svg']} alt="search"/></button>
                        <input className="library__input__search" type="text"/>
                        <button className="library__btn__recent">Recent&nbsp;<img src={images['menu.svg']} alt="menu"/></button>
                    </div>
                    <div className="library__list">
                        <button className="library__btn__play">
                            <img src={images['liked songs.png']} alt=""/>
                            <div className="library__btn__info">
                                <p>Liked Songs</p>
                                <p>Artist</p>
                            </div>                    
                        </button>
                        <button className="library__btn__play">
                            <img src={images['angeles azules.png']} alt=""/>
                            <div className="library__btn__info">
                                <p>Los Angeles Azules</p>
                                <p>Artist</p>
                            </div>                    
                        </button>
                        <button className="library__btn__play">
                            <img src={images['imagine dragons.png']} alt=""/>
                            <div className="library__btn__info">
                                <p>Imagine Dragons</p>
                                <p>Artist</p>
                            </div>                    
                        </button>
                        <button className="library__btn__play">
                            <img src={images['guns n roses.png']} alt=""/>
                            <div className="library__btn__info">
                                <p>Guns N' Roses</p>
                                <p>Artist</p>
                            </div>                    
                        </button>
                        <button className="library__btn__play">
                            <img src={images['metallica.png']} alt=""/>
                            <div className="library__btn__info">
                                <p>Metallica</p>
                                <p>Artist</p>
                            </div>                    
                        </button>
                        <button className="library__btn__play">
                            <img src={images['def Leppard.png']} alt=""/>
                            <div className="library__btn__info">
                                <p>Def Lepard</p>
                                <p>Artist</p>
                            </div>                    
                        </button>
                        <button className="library__btn__play">
                            <img src={images['bon jovi.png']} alt=""/>
                            <div className="library__btn__info">
                                <p>Bon Jovi</p>
                                <p>Artist</p>
                            </div>                    
                        </button>
                        <button className="library__btn__play">
                            <img src={images['maroon 5.png']} alt=""/>
                            <div className="library__btn__info">
                                <p>Maroon 5</p>
                                <p>Artist</p>
                            </div>                    
                        </button>
                    </div>
                </article>
                <article id='mainArtist' className = 'main__artists'>
                    <section className="artists__title">
                        <div>
                            <span className="artists__name">Artist Name</span>
                        </div>
                        {/* <div class="artists__bar">
                            <img src="./img/coldplay_icon.jpg" alt=""/>
                        </div> */}
                        <div className="artists__list">
                            <h2>Song List</h2>
                            <article className="artists__songs">
                                <div>
                                    <span>
                                        <p>1</p>
                                        <img src={images['bon jovi.png']} alt=""/>
                                        <a href="#mainArtist">Yellow</a>
                                    </span>
                                    <p>4:26</p>
                                </div>
                                <div>
                                    <span>
                                        <p>2</p>
                                        <img src={images['bon jovi.png']} alt=""/>
                                        <a href="#mainArtist">Vival La Vida</a>
                                    </span>
                                    <p>4:26</p>
                                </div>
                                <div>
                                    <span>
                                        <p>3</p>
                                        <img src={images['bon jovi.png']} alt=""/>
                                        <a href="#mainArtist">Something Just Like This</a>
                                    </span>
                                    <p>4:26</p>
                                </div>
                                <div>
                                    <span>
                                        <p>4</p>
                                        <img src={images['bon jovi.png']} alt=""/>
                                        <a href="#mainArtist">The Scientist</a>
                                    </span>
                                    <p>4:26</p>
                                </div>
                                <div>
                                    <span>
                                        <p>5</p>
                                        <img src={images['bon jovi.png']} alt=""/>
                                        <a href="#mainArtist">A Sky Full of Stars</a>
                                    </span>
                                    <p>4:26</p>
                                </div>                   
                            </article>
                        </div>                        
                    </section>
                </article>
                <article className = 'main__playing'>
                    <h1>{this.props.appName}</h1>
                    {/* <button onClick={this.handleButtonClick}>Click Me</button>
                    <p>{this.state.welcomeMessage}</p>
                    <p>{this.state.isloggedIn ? 'Welcome, user' : 'You are not connected'}</p> */}
                </article>
            </main>
        )
    }
}

export default Header;