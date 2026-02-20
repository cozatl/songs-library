import './App.css';
import Header from "./components/Header/Header.js";
import SearchResults from './components/SearchResults/index.js';
import Library from './components/Library/index.js';
import Details from './components/Details/index.js';
import { useState, useEffect,useRef} from 'react';

function App() {
  
  const[library, setLibrary] = useState([]);
  
  const isFirstRender = useRef(true);
  
  useEffect(() => {
    !isFirstRender.current && library.length > 0 ? 
    console.log('Song added to the library.') : isFirstRender.current = false;
  },[library]);

  function addSong(song) {
    try {
      let flag = false;
      if (library.length > 0) {
      Object.keys(library).forEach(key => {
        const value = library[key];
        // console.log(key + ' is ' + value['id1']);
        if (value['id1'] === song['id1']) {
          console.log('Song was previously added!');
          flag = true;
          return;
        }
      });
    }
      if (!flag) {setLibrary(prev => [...prev,song]);}
    } catch (error) {
            console.log(error);
        }
  }
  return (
    <>
      <Header className="App-header" appName='Songs artists'/>
        <main className="App">
          <article className="main__artists">
            <div className="artists__list">
              <SearchResults onAddSong={addSong} />
            </div>
          </article>
          <article id='mainLibrary' className = 'main__library'>
            <section className="library__title">
              <h2>Library List</h2>
              <div className="library__list">
                <article className="library__songs">
                  <Library songs={library} />
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
