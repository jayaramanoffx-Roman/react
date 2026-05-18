import React from 'react'
import './Profile.css'
import { useNavigate } from 'react-router-dom'

const Profile = () => {

  const navigate = useNavigate()

  const username = localStorage.getItem('username')

  const cartItems =
    JSON.parse(localStorage.getItem('cartItems')) || []

  const wishlistItems =
    JSON.parse(localStorage.getItem('wishlistItems')) || []

  const cartTotalQuantity = cartItems.reduce((total, item) => {
    return total + item.quantity
  }, 0)

  const handleLogout = () => {
    localStorage.removeItem('username')
    window.dispatchEvent(new Event('userUpdated'))
    navigate('/LOGIN')
  }

  return (
    <div id="profilebody">

      <div id="profilecard">

        <div className="profile-left">
          <div className="profile-avatar">
            <i className="bi bi-person-fill"></i>
          </div>

          <h2>{username}</h2>
          <p>SHOPZ CUSTOMER</p>

          <button onClick={() => navigate('/HOME')}>
            BACK TO HOME
          </button>
        </div>

        <div className="profile-right">
          <h1>MY PROFILE</h1>

          <div className="profile-info">
            <p><span>Name :</span> {username}</p>
            <p><span>Email :</span> user@gmail.com</p>
            <p><span>Phone :</span> +91 98765 43210</p>
            <p><span>Location :</span> Chennai, Tamil Nadu</p>
          </div>

          <div className="profile-boxes">

            <div>
              <i className="bi bi-bag-check-fill"></i>
              <h4>Orders</h4>
              <p>0 Items</p>
            </div>

            <div onClick={() => navigate('/WISHLIST')}>
              <i className="bi bi-heart-fill"></i>
              <h4>Wishlist</h4>
              <p>{wishlistItems.length} Items</p>
            </div>

            <div onClick={() => navigate('/CART')}>
              <i className="bi bi-cart-check-fill"></i>
              <h4>Cart</h4>
              <p>{cartTotalQuantity} Items</p>
            </div>

          </div>

          <button id="logoutbtn" onClick={handleLogout}>
            LOGOUT
          </button>
        </div>

      </div>

    </div>
  )
}

export default Profile