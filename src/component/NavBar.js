import React from 'react';
import '../styles/Nav.css';
import {Link} from "react-router-dom"
import data from "../data/data.json" ;

const searchIcon = <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg> ;

function NavBar() {
  return (
    <div class="nav">
        <div className="logo">
            <Link to="/"  >
              <img id="logoImage"   src={data.logo} alt="not availaible"></img>
            </Link>
        </div>

          <Link to="/" className='navlinks' >MI Phones</Link>
          <Link to="/" className='navlinks'>Redmi Phones</Link>
          <Link to="/" className='navlinks'>TV</Link>
          <Link to="/" className='navlinks'>Laptops</Link>
          <Link to="/" className='navlinks'>Fitness & Lifestyle</Link>
          <Link to="/" className='navlinks'>Home</Link>
          <Link to="/" className='navlinks'>Radio</Link>
          <Link to="/" className='navlinks'>Accessories</Link>

        <div className="searchbox">
            <input type='text' placeholder='search for the product' ></input>{searchIcon}
        </div>

      </div>
   
  )
}

export default NavBar