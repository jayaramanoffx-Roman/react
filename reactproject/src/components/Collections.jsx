import React from 'react'
import './Collections.css'
import { useNavigate } from 'react-router-dom'

const Collections = () => {

  const navigate = useNavigate()

  const collections = [

    {
      name: 'WATCHES',
      image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49'
    },

    {
      name: 'EARBUDS',
      image: 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f37'
    },

    {
      name: 'POWERBANKS',
      image: 'https://images.unsplash.com/photo-1585336261022-680e295ce3fe'
    },

    {
      name: 'PENDRIVES',
      image: 'https://images.unsplash.com/photo-1616578273573-5d5459e8c8c7'
    },

    {
      name: 'HEADPHONES',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e'
    }

  ]

  return (

    <div id="collectionsbody">

      <h1>COLLECTIONS</h1>

      <div id="collectionscontainer">

        {collections.map((item, index) => (

          <div
            className="collectioncard"
            key={index}
          >

            <img
              src={item.image}
              alt={item.name}
            />

            <div className="collectionoverlay">

              <h2>{item.name}</h2>

              <button onClick={() => navigate('/HOME')}>
                SHOP NOW
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>

  )
}

export default Collections