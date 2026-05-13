import React, { useState } from 'react'
import "./Header.css"
import silversteelwatch from '../assets/silversteelwatch.png'
import jblboom from '../assets/jblboom.jpg'
import shopzlogo from '../assets/logoshopz.png'
import shopzmp4 from '../assets/SHOPZTEXTmp4.mp4'
import nothingearbuds from '../assets/nothingearbuds.jpg'
import { Navigate, useNavigate } from 'react-router-dom'
import Footer from './Footer'


const Header = ({framework,Name}) => {
   const[Showsearch,setShowsearch] = useState(false);
    

   const navigate = useNavigate()
   const handlenavigation = () => {
      navigate('/PROFILE')
   }
  return (
  <header>
    
     <div id='freeshipping'>
        Kick off the New Year with free shipping on orders over Rs. 999!
     </div>
     <div id='logos'>
      <i  onClick={()=> setShowsearch(!Showsearch)}  class="bi bi-search"></i>
      <i class="bi bi-bag-heart-fill"></i>
      <img id='mainlogo' src={shopzlogo} alt="ShopZ Logo" />
      <i class="bi bi-cart-check-fill"></i>
      <i onClick={handlenavigation}  class="bi bi-person-circle"></i>
     </div>
      {Showsearch && (
     <div >
      <input type="text" placeholder='   Search here......' id="searchbar" />
     </div>
      )}

     <div id='menubar'>
      <a href="" class = "menu">  SHOP  </a>
      <a href="" class = "menu">  {Name}  </a> 
      <a href="" class = "menu">  {framework} ARRIVALS  </a> 
      <a href="#footer" class = "menu">  ABOUT  </a>
      <a href="" class = "menu">  CONTACT  </a>
     </div>

  </header>
  )
}

export default Header