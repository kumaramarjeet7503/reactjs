import './App.css';
import PreNav from './component/PreNav';
import NavBar from './component/NavBar.js';
import {BrowserRouter as Router} from "react-router-dom"
import Slider from "./component/Slider.js"
import data from "./data/data.json"
import Offers from "./component/Offers.js"

function App() {
  return (
    <Router className="App">
      <PreNav />
      <NavBar />
      <Slider start={data.banner.start}/>
      <Offers offer={data.offer}/>
    </Router>
  );
}

export default App;
