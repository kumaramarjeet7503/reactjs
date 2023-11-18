import './App.css';
import PreNav from './component/PreNav';
import NavBar from './component/NavBar.js';
import {BrowserRouter as Router} from "react-router-dom"

function App() {
  return (
    <Router className="App">
      <PreNav />
      <NavBar />
    </Router>
  );
}

export default App;
