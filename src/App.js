import './App.css';
import Header from "./components/Header/Header.js";
import SearchResults from './components/SearchResults/index.js';
import Library from './components/Library/index.js';
import Details from './components/Details/index.js';
// import SearchImg from '../src/assets/img/search.svg'
import { useState } from 'react';
import Songs from './components/Songs/Song.js';

function App() {
  // const[library, setLibrary] = useState([]);

  // function addSong(song) {
  //   setLibrary(prev => [...prev,song]);
  // }
  return (
    <>
      <Header className="App-header" appName='Songs artists'/>
        <main className="App">
          <article className="main__artists">            
            <div className="artists__list">
              <SearchResults/>
            </div>
          </article>
          <article id='mainLibrary' className = 'main__library'>
            <section className="library__title">
              <h2>Song List</h2>         
              <div className="library__list">                              
                <article className="library__songs">
                  <Library/>
                </article>
              </div>
            </section>
          </article>
          <Details/>
        </main>
    </>
  );
}

export default App;
