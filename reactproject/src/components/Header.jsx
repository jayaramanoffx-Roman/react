import React, { useState } from 'react'
import "./Header.css"
import silversteelwatch from '../assets/silversteelwatch.png'
import jblboom from '../assets/jblboom.jpg'
import shopzlogo from '../assets/logoshopz.png'
import shopzmp4 from '../assets/SHOPZTEXTmp4.mp4'
import nothingearbuds from '../assets/nothingearbuds.jpg'
import { Navigate, useNavigate } from 'react-router-dom'
import Footer from './Footer'


const Header = ({ search, setSearch }) => {
   const[Showsearch,setShowsearch] = useState(false);
    

   const navigate = useNavigate()
   const handlenavigation = () => {
      navigate('/Profile')
   }
   const handleregister = () => {
   navigate('/Register')
   }
   const handlelogin = () => {
      navigate('/login')
   }
  return (
  <header >
    
     <div id='freeshipping'>
        Kick off the New Year with free shipping on orders over Rs. 999!
     </div>
        <div className="auth-buttons">
          <button onClick={handlelogin} className="login-btn">LOGIN</button>
          <button onClick={handleregister} className="register-btn">REGISTER</button>
        </div>
     <div id='logos'>
      <i  onClick={()=> setShowsearch(!Showsearch)}  className="bi bi-search"></i>
      <i onClick={() => navigate('/Wishlist')}className="bi bi-bag-heart-fill"></i>
      <img id='mainlogo' src={shopzlogo} alt="ShopZ Logo" />
      <i  onClick={() => navigate('/Cart')} className="bi bi-cart-check-fill"></i>
      <i onClick={handlenavigation}  className="bi bi-person-circle"></i>
     </div>
      {Showsearch && (
     <div >
      <input type="text" placeholder='   Search here......' value={search}
onChange={(event) => setSearch(event.target.value)} id="searchbar" />
     </div>
      )}

     <div id='menubar'>
      <a href="" className = "menu">  SHOP  </a>
      <a href="" className = "menu">  COLLECTIONS  </a> 
      <a href="" className = "menu">  NEW ARRIVALS  </a> 
      <a href="#footer" className = "menu">  ABOUT  </a>
      <a href="" className = "menu">  CONTACT  </a>
     </div>

  </header>
  )
}

export default Header