import React, { useEffect, useState } from 'react'
import './Wishlist.css'
import { useNavigate } from 'react-router-dom'

const Wishlist = () => {

  const navigate = useNavigate()

 const [wishlistItems, setWishlistItems] = useState(() => {
  const savedWishlist = localStorage.getItem('wishlistItems')
  return savedWishlist ? JSON.parse(savedWishlist) : []
})

 const removeWishlist = (id) => {
  const updatedWishlist = wishlistItems.filter((item) => item.id !== id)

  setWishlistItems(updatedWishlist)

  localStorage.setItem(
    'wishlistItems',
    JSON.stringify(updatedWishlist)
  )
}

  return (
    <div id="wishlistbody">

      <h1>MY WISHLIST</h1>

      {wishlistItems.length === 0 ? (

        <div id="emptywishlist">

  <i className="bi bi-heartbreak-fill"></i>

  <h2>No wishlist items</h2>

  <p>Your favourite products will appear here</p>

</div>

      ) : (

        <div id="wishlistcontainer">

          {wishlistItems.map((item) => (

            <div className="wishlistcard" key={item.id}>

              <img
                src={`https://shopz-backend-75aw.onrender.com${item.image}`}
                alt={item.name}
              />

              <h3>{item.name}</h3>

              <h4>₹{item.price}</h4>

              <button
                className="removebtn"
                onClick={() => removeWishlist(item.id)}
              >
                REMOVE
              </button>

            </div>

          ))}

        </div>

      )}

      <button
        id="backhome"
        onClick={() => navigate('/Home')}
      >
        BACK TO HOME
      </button>

    </div>
  )
}

export default Wishlist