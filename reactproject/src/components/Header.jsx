import React, { useEffect, useState } from 'react'
import './Header.css'
import shopzlogo from '../assets/shopz rgb.png'
import { useNavigate } from 'react-router-dom'

const Header = ({ search, setSearch, setCategory }) => {

    const [Showsearch, setShowsearch] = useState(false)
    const [wishlistCount, setWishlistCount] = useState(0)
    const [cartCount, setCartCount] = useState(0)
    const [username, setUsername] = useState(
        localStorage.getItem('username')
    )

    const navigate = useNavigate()

    useEffect(() => {
        const updateWishlistCount = () => {
            const wishlistItems =
                JSON.parse(localStorage.getItem('wishlistItems')) || []

            setWishlistCount(wishlistItems.length)
        }

        const updateCartCount = () => {
            const cartItems =
                JSON.parse(localStorage.getItem('cartItems')) || []

            const totalQuantity = cartItems.reduce((total, item) => {
                return total + item.quantity
            }, 0)

            setCartCount(totalQuantity)
        }

        const updateUser = () => {
            setUsername(localStorage.getItem('username'))
        }

        updateWishlistCount()
        updateCartCount()
        updateUser()

        window.addEventListener('wishlistUpdated', updateWishlistCount)
        window.addEventListener('cartUpdated', updateCartCount)
        window.addEventListener('userUpdated', updateUser)

        return () => {
            window.removeEventListener('wishlistUpdated', updateWishlistCount)
            window.removeEventListener('cartUpdated', updateCartCount)
            window.removeEventListener('userUpdated', updateUser)
        }
    }, [])

    return (
        <header>
            <div id="freeshipping">
                Kick off the New Year with free shipping on orders over Rs. 999!
            </div>

            {!username && (
                <div className="auth-buttons">
                    <button
                        onClick={() => navigate('/LOGIN')}
                        className="login-btn"
                    >
                        LOGIN
                    </button>

                    <button
                        onClick={() => navigate('/REGISTER')}
                        className="register-btn"
                    >
                        REGISTER
                    </button>
                </div>
            )}

            <div id="logos">
                <i
                    onClick={() => setShowsearch(!Showsearch)}
                    className="bi bi-search"
                ></i>

               <div   className="iconbox"   onClick={() => {  
                  if (!username) {      
                  navigate('/LOGIN')      
                  return    }
                  navigate('/WISHLIST')
               }}
                >
                    <i className="bi bi-bag-heart-fill"></i>

                    <span className="countbadge">
                        {wishlistCount}
                    </span>
                </div>

                <img
                    id="mainlogo"
                    src={shopzlogo}
                    alt="ShopZ Logo"
                />

                <div
                    className="iconbox"
                    onClick={() => {
                    if (!username) {
                    navigate('/LOGIN')
                    return
                   }
                    navigate('/CART')
                   }}
                  >
                    <i className="bi bi-cart-check-fill"></i>

                    <span className="countbadge">
                        {cartCount}
                    </span>
                </div>

                <i
                onClick={() => {
                if (!username) {
                navigate('/LOGIN')
               return
               }
               navigate('/PROFILE')
              }}
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
                <a
                    onClick={() => setCategory('ALL')}
                    className="menu"
                >
                    SHOP ALL
                </a>

                <a
                    onClick={() => setCategory('COLLECTIONS')}
                    className="menu"
                >
                    COLLECTIONS
                </a>

                <a
                    onClick={() => setCategory('NEW')}
                    className="menu"
                >
                    NEW ARRIVALS
                </a>

                <a
                    href="#footer"
                    className="menu"
                >
                    ABOUT
                </a>

                <a
                    onClick={() => navigate('/CONTACT')}
                    className="menu"
                >
                    CONTACT
                </a>
            </div>
        </header>
    )
}

export default Header