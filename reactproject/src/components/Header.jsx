import React, { useState } from 'react'
import "./Header.css"
import shopzlogo from '../assets/logoshopz.png'
import { useNavigate } from 'react-router-dom'

const Header = ({ search, setSearch }) => {

  const [Showsearch, setShowsearch] = useState(false)

  const navigate = useNavigate()

  return (
    <header>

      <div id="freeshipping">
        Kick off the New Year with free shipping on orders over Rs. 999!
      </div>

      <div className="auth-buttons">
        <button onClick={() => navigate('/LOGIN')} className="login-btn">
          LOGIN
        </button>

        <button onClick={() => navigate('/REGISTER')} className="register-btn">
          REGISTER
        </button>
      </div>

      <div id="logos">

        <i
          onClick={() => setShowsearch(!Showsearch)}
          className="bi bi-search"
        ></i>

        <i
          onClick={() => navigate('/WISHLIST')}
          className="bi bi-bag-heart-fill"
        ></i>

        <img id="mainlogo" src={shopzlogo} alt="ShopZ Logo" />

        <i
          onClick={() => navigate('/CART')}
          className="bi bi-cart-check-fill"
        ></i>

        <i
          onClick={() => navigate('/PROFILE')}
          className="bi bi-person-circle"
        ></i>

      </div>

      {Showsearch && (
        <div id="searchbox">
          <input
            type="text"
            placeholder="Search here..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            id="searchbar"
          />
        </div>
      )}

      <div id="menubar">
        <a href="#" className="menu">SHOP</a>
        <a href="#" className="menu">COLLECTIONS</a>
        <a href="#" className="menu">NEW ARRIVALS</a>
        <a href="#footer" className="menu">ABOUT</a>
        <a href="#footer" className="menu">CONTACT</a>
      </div>

    </header>
  )
}

export default Header