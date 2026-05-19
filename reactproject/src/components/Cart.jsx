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
    return total + (item.price * item.quantity)
  }, 0)

  const increaseQuantity = (id) => {

  const updatedCart = cartItems.map((item) =>

    item.id === id
      ? { ...item, quantity: item.quantity + 1 }
      : item

  )

  setCartItems(updatedCart)

  localStorage.setItem(
    'cartItems',
    JSON.stringify(updatedCart)
  )
}

const decreaseQuantity = (id) => {

  let updatedCart = cartItems.map((item) =>

    item.id === id
      ? {
          ...item,
          quantity: item.quantity - 1
        }
      : item

  )

  updatedCart = updatedCart.filter(
    (item) => item.quantity > 0
  )

  setCartItems(updatedCart)

  localStorage.setItem(
    'cartItems',
    JSON.stringify(updatedCart)
  )
}

  return (
    <div id="cartbody">

      <h1>MY CART</h1>

      {cartItems.length === 0 ? (
        <div id="emptycart">

  <i className="bi bi-cart-x-fill"></i>

  <h2>Your cart is empty</h2>

  <p>Add products to continue shopping</p>

</div>
      ) : (
        <>
          <div id="cartcontainer">
            {cartItems.map((item, index) => (
              <div className="cartcard" key={index}>

                <img
                  src={`https://shopz-backend-75aw.onrender.com${item.image}`}
                  alt={item.name}
                />

                <div className="cartdetails">

  <h3>{item.name}</h3>

  <p>{item.description}</p>

  <h4>
    ₹{item.price * item.quantity}
  </h4>

  <div className="quantitybox">

    <button
      onClick={() => decreaseQuantity(item.id)}
    >
      -
    </button>

    <span>{item.quantity}</span>

    <button
      onClick={() => increaseQuantity(item.id)}
    >
      +
    </button>

  </div>

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