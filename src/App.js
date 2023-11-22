import './App.css';
import PreNav from './component/PreNav';
import NavBar from './component/NavBar.js';
import {BrowserRouter as Router, Routes} from "react-router-dom"
import Slider from "./component/Slider.js"
import data from "./data/data.json"
import Offers from "./component/Offers.js"
import Heading from "./component/Heading.js"
import StarProduct from "./component/StarProduct.js"
import HotAccessioriesMenu from "./component/HotAccessioriesMenu.js"
import {Route } from 'react-router-dom'
import HotAccessiories from "./component/HotAccessiories.js"
import ProductReviews from "./component/ProductReviews.js"


function App() {
  return (
    <Router className="App">
      {document.title = "e-store"} 
      <PreNav />
      <NavBar />
      <Slider start={data.banner.start}/>
      <Offers offer={data.offer}/>
      <Heading text="STAR PRODUCTS"/>
      <StarProduct product={data.starProduct}></StarProduct>
      <Heading text="HOT ACCESSORIES"/>
      <HotAccessioriesMenu />
      <Routes>
        <Route path="/music" element={ <HotAccessiories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />}/>
        <Route path="/devices" element={ <HotAccessiories device={data.hotAccessories.smartDevice} deviceCover={data.hotAccessoriesCover.smartDevice} />}/>
        <Route path="/home" element={ <HotAccessiories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home} />}/>
        <Route path="/lifestyle" element={ <HotAccessiories lifestyle={data.hotAccessories.lifeStyle} lifestyleCover={data.hotAccessoriesCover.lifeStyle} />}/>
        <Route path="/mobileAccessories" element={ <HotAccessiories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories} />}/>
      </Routes>
      <Heading text="PRODUCT REVIEWS"/>
      <ProductReviews productReviews = {data.productReviews} />
    </Router>
  );
}

export default App;
