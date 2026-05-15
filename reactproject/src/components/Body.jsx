import React, { useEffect, useState } from 'react'
import './Body.css'
import { useNavigate } from 'react-router-dom'

const Body = ({ search = "" }) => {

  const navigate = useNavigate()

  const [products, setProducts] = useState([])

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cartItems')
    return savedCart ? JSON.parse(savedCart) : []
  })

  const [heartchange, setHeartchange] = useState(() => {
    const savedWishlist = JSON.parse(localStorage.getItem('wishlistItems')) || []

    const savedHearts = {}

    savedWishlist.forEach((item) => {
      savedHearts[item.id] = true
    })

    return savedHearts
  })

  useEffect(() => {
    fetch('http://127.0.0.1:8000/products/')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log('Product fetch error:', error))
  }, [])

  const addToCart = (product) => {
    const updatedCart = [...cart, product]

    setCart(updatedCart)

    localStorage.setItem(
      'cartItems',
      JSON.stringify(updatedCart)
    )

    alert(`${product.name} added to cart`)
  }

  const toggleHeart = (product) => {
    let savedWishlist =
      JSON.parse(localStorage.getItem('wishlistItems')) || []

    const isLiked = heartchange[product.id]

    if (isLiked) {
      savedWishlist = savedWishlist.filter(
        (item) => item.id !== product.id
      )
    } else {
      savedWishlist.push(product)
    }
    console.log(savedWishlist)
    localStorage.setItem(
      'wishlistItems',
      JSON.stringify(savedWishlist)
    )

    setHeartchange((prev) => ({
      ...prev,
      [product.id]: !prev[product.id]
    }))
  }

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div id="wholebody">

      <div id="filterbox">
        <span id="filtertext">Filters</span>

        <div>
          <select id="a-z">
            <option>Alphabets a-z</option>
            <option>Watches</option>
            <option>Powerbanks</option>
            <option>Pendrive</option>
            <option>Earbuds</option>
            <option>Boom Headphones</option>
          </select>
        </div>
      </div>

      <div id="allproducts">

        {filteredProducts.length === 0 && (
          <h2 id="noproduct">No products found</h2>
        )}

        <div className="bundle">

          {filteredProducts.map((product) => (

            <div className="setofproducts" key={product.id}>

              <div className="imagebox">

                <img
                  src={`http://127.0.0.1:8000${product.image}`}
                  alt={product.name}
                  className="productimg"
                />

                <div className="notify">TOPSELLER</div>

                <i
                  onClick={() => toggleHeart(product)}
                  className={
                    heartchange[product.id]
                      ? 'bi bi-heart-fill'
                      : 'bi bi-heart'
                  }
                ></i>

              </div>

              <div className="productcontent">

                <div className="p-name">{product.name}</div>

                <div className="description">
                  {product.description}
                </div>

                <div className="price">₹{product.price}</div>

                <div className="buttonrow">

                  <button
                    className="trolly-button"
                    onClick={() => addToCart(product)}
                  >
                    <i className="bi bi-cart3 trollyicon"></i>
                    ADD TO CART
                  </button>

                  <button
                    className="buynow-button"
                    onClick={() => navigate('/SUCCESS')}
                  >
                    BUY NOW
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  )
}

export default Body