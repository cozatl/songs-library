// import './App.css';
import Header from "./components/Header/index.tsx";
import SearchResults from './components/SearchResults/index.tsx';
import Library from './components/Library/index.tsx';
import Details from './components/Details/index.tsx';
import { Route, Routes, Navigate } from "react-router-dom";
import Theme from "./Theme/index.ts";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./Theme/GlobalStyles.js";
import { StyledMain } from './styles.ts';

function App() {
  // Hooks are gone whe REDUX TOOLKIT, the code looks cleaner now.
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Header appName='Artist Songs'/>
        <StyledMain className="App">
          <Routes>
            {/* Redirects to home from the beginning */}
            <Route path= '/' element={<Navigate to = '/home' />} />
            <Route path='/home' element={
                <>
                   <SearchResults />          {/* No need of input parameters with REDUX TOOLKIT */}
                  <Library />
                </>
              } 
            />
            <Route path='song/:id' element={<Details/>} />
          </Routes>          
        </StyledMain>
      </ThemeProvider>
    </>
  );
}

export default App;
