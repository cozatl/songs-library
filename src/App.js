import './App.css';
import Header from "./components/Header/Header.js";
import SearchResults from './components/SearchResults/index.js';
import Library from './components/Library/index.js';
import Details from './components/Details/index.js';
import { useState, useEffect,useRef} from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import useFetchAlbum from './components/Hooks/useFetchAlbum.ts';

function App() {
  const[library, setLibrary] = useState([]);
  const [artist, setArtist] = useState('');

  const {album, loadingAlbums, errorAlbums} = useFetchAlbum(artist);
    // console.log(album);
  
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
        // console.log(key + ' is ' + value['idTrack']);
        if (value['idTrack'] === song['idTrack']) {
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
      <Header className="App-header" appName='Artist Songs'/>
        <main className="App">
          <Routes>
            {/* Redirects to home from the beginning */}
            <Route path= '/' element={<Navigate to = '/home' />} />
            <Route path='/home' element={
                <>
                  <SearchResults onAddSong={addSong} album={album} loadingAlbums={loadingAlbums} errorAlbums={errorAlbums} setArtist={setArtist} />
                  <Library songs={library} />
                </>
              } 
            />
            <Route path='song/:id' element={<Details/>} />
          </Routes>          
        </main>
    </>
  );
}

export default App;
