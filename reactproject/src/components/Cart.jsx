import React, { useState } from 'react'
import './Cart.css'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const navigate = useNavigate()

  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cartItems')
    return savedCart ? JSON.parse(savedCart) : []
  })

  const removeItem = (index) => {
    const updatedCart = cartItems.filter((item, itemIndex) => itemIndex !== index)

    setCartItems(updatedCart)
    localStorage.setItem('cartItems', JSON.stringify(updatedCart))
  }

  const totalPrice = cartItems.reduce((total, item) => {
    return total + Number(item.price)
  }, 0)

  return (
    <div id="cartbody">

      <h1>MY CART</h1>

      {cartItems.length === 0 ? (
        <h2 id="emptycart">Your cart is empty</h2>
      ) : (
        <>
          <div id="cartcontainer">
            {cartItems.map((item, index) => (
              <div className="cartcard" key={index}>

                <img
                  src={`http://127.0.0.1:8000${item.image}`}
                  alt={item.name}
                />

                <div className="cartdetails">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <h4>₹{item.price}</h4>
                </div>

                <button className="removebtn" onClick={() => removeItem(index)}>   REMOVE    </button>

              </div>
            ))}
          </div>

          <div id="carttotal">
            TOTAL : ₹{totalPrice}
          </div>
          <button id="checkoutbtn"
              onClick={() => {
                localStorage.removeItem('cartItems')
                navigate('/SUCCESS')
               }}
                >
               CHECKOUT
          </button>
        </>
      )}

      <button id="backhome" onClick={() => navigate('/HOME')}>
        BACK TO HOME
      </button>

    </div>
  )
}

export default Cart