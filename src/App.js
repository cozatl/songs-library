import './App.css';
import Header from "./components/Header/Header.js";
import Songs from "./components/Songs/Songs.js";

function App() {
  return (
    <div className="App">
      <Header className="App-header" appName='Songs Library'/>
      <Songs className="main__library"/>
    </div>
  );
}

export default App;
