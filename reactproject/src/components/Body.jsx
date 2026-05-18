import React, { useEffect, useState } from 'react'
import './Body.css'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Body = ({ search = '', category = 'ALL' }) => {

    const navigate = useNavigate()

    const [products, setProducts] = useState([])

    const [collectionType, setCollectionType] =
        useState('WATCH')

    const [cart, setCart] = useState(() => {

        const savedCart =
            localStorage.getItem('cartItems')

        return savedCart
            ? JSON.parse(savedCart)
            : []

    })

    const [heartchange, setHeartchange] =
        useState(() => {

            const savedWishlist =
                JSON.parse(
                    localStorage.getItem('wishlistItems')
                ) || []

            const hearts = {}

            savedWishlist.forEach((item) => {
                hearts[item.id] = true
            })

            return hearts
        })

    useEffect(() => {

        fetch('http://127.0.0.1:8000/products/')

            .then((response) => response.json())

            .then((data) => setProducts(data))

            .catch((error) =>
                console.log(
                    'Product fetch error:',
                    error
                )
            )

    }, [])

    const addToCart = (product) => {

        const user = localStorage.getItem('username')

        if (!user) {
        toast.error('Please login to add products to cart')
        navigate('/LOGIN')
        return
        }

        const existingProduct = cart.find(
            (item) => item.id === product.id
        )

        let updatedCart

        if (existingProduct) {

            updatedCart = cart.map((item) =>

                item.id === product.id

                    ? {
                        ...item,
                        quantity: item.quantity + 1
                    }

                    : item
            )

        } else {

            updatedCart = [

                ...cart,

                {
                    ...product,
                    quantity: 1
                }

            ]
        }

        setCart(updatedCart)

        localStorage.setItem(
            'cartItems',
            JSON.stringify(updatedCart)
        )

        window.dispatchEvent(
            new Event('cartUpdated')
        )

        toast.success(`${product.name} added to cart`)
    }

    const toggleHeart = (product) => {

      const user = localStorage.getItem('username')

      if (!user) {
      toast.error('Please login to add products to wishlist')
      navigate('/LOGIN')
      return
     }

        let savedWishlist =
            JSON.parse(
                localStorage.getItem('wishlistItems')
            ) || []

        if (heartchange[product.id]) {

            savedWishlist =
                savedWishlist.filter(
                    (item) => item.id !== product.id
                )

        } else {

            savedWishlist.push(product)
        }

        localStorage.setItem(
            'wishlistItems',
            JSON.stringify(savedWishlist)
        )

        window.dispatchEvent(
            new Event('wishlistUpdated')
        )

        setHeartchange((prev) => ({

            ...prev,

            [product.id]:
                !prev[product.id]

        }))
    }

    let filteredProducts =
        products.filter((product) =>

            product.name
                .toLowerCase()
                .includes(search.toLowerCase())
        )

    if (category === 'COLLECTIONS') {

        filteredProducts =
            filteredProducts.filter((product) =>

                product.name
                    .toLowerCase()
                    .includes(
                        collectionType.toLowerCase()
                    )
            )
    }

    if (category === 'NEW') {

        filteredProducts =
            [...filteredProducts]
                .reverse()
                .slice(0, 6)
    }

    const [selectedFilter, setSelectedFilter] =
    useState('ALL')

    if (selectedFilter !== 'ALL') {

    filteredProducts =
        filteredProducts.filter((product) =>

            product.name
                .toLowerCase()
                .includes(
                    selectedFilter.toLowerCase()
                )
        )
}

    return (

        <div id="wholebody">

            <div id="filterbox">

                <span id="filtertext">
                    Filters
                </span>

                <div>

                    <select id="a-z" value={selectedFilter} onChange={(event) =>
                         setSelectedFilter(event.target.value)   } >

<option value="ALL">
    All Products
</option>

<option value="WATCH">
    Watches
</option>

<option value="POWERBANK">
    Powerbanks
</option>

<option value="PENDRIVE">
    Pendrive
</option>

<option value="EARBUD">
    Earbuds
</option>

<option value="HEADPHONE">
    Boom Headphones
</option>

                    </select>

                </div>

            </div>

            {category === 'COLLECTIONS' && (

                <div id="collectionbuttons">

                    <button
                        onClick={() =>
                            setCollectionType('WATCH')
                        }
                    >
                        WATCHES
                    </button>

                    <button
                        onClick={() =>
                            setCollectionType('EARBUD')
                        }
                    >
                        EARBUDS
                    </button>

                    <button
                        onClick={() =>
                            setCollectionType('POWERBANK')
                        }
                    >
                        POWERBANKS
                    </button>

                    <button
                        onClick={() =>
                            setCollectionType('PENDRIVE')
                        }
                    >
                        PENDRIVES
                    </button>

                    <button
                        onClick={() =>
                            setCollectionType('HEADPHONE')
                        }
                    >
                        HEADPHONES
                    </button>

                </div>

            )}

            <div id="allproducts">

                {filteredProducts.length === 0 && (

                    <h2 id="noproduct">
                        No products found
                    </h2>

                )}

                <div className="bundle">

                    {filteredProducts.map((product) => (

                        <div
                            className="setofproducts"
                            key={product.id}
                        >

                            <div className="imagebox">

                                <img
                                    src={`http://127.0.0.1:8000${product.image}`}
                                    alt={product.name}
                                    className="productimg"
                                />

                                <div className="notify">
                                    TOPSELLER
                                </div>

                                <i
                                    onClick={() =>
                                        toggleHeart(product)
                                    }

                                    className={
                                        heartchange[product.id]

                                            ? 'bi bi-heart-fill'

                                            : 'bi bi-heart'
                                    }
                                ></i>

                            </div>

                            <div className="productcontent">

                                <div className="p-name">
                                    {product.name}
                                </div>

                                <div className="description">
                                    {product.description}
                                </div>

                                <div className="price">
                                    ₹{product.price}
                                </div>

                                <div className="buttonrow">

                                    <button
                                        className="trolly-button"

                                        onClick={() =>
                                            addToCart(product)
                                        }
                                    >

                                        <i className="bi bi-cart3 trollyicon"></i>

                                        ADD TO CART

                                    </button>

                                    <button
                                        className="buynow-button"

                                        onClick={() =>
                                            navigate('/SUCCESS')
                                        }
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