import './App.css';
import PreNav from './component/PreNav';
import NavBar from './component/NavBar.js';
import {BrowserRouter as Router} from "react-router-dom"
import Slider from "./component/Slider.js"
import data from "./data/data.json"

function App() {
  return (
    <Router className="App">
      <PreNav />
      <NavBar />
      <Slider start={data.banner.start}/>
    </Router>
  );
}

export default App;
