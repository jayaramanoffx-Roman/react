import React from 'react'
import './Success.css'
import { useNavigate } from 'react-router-dom'

const Success = () => {

  const navigate = useNavigate()

  return (
    <div id="successbody">

      <div id="successcard">

        <i className="bi bi-check-circle-fill"></i>

        <h1>ORDER PLACED</h1>

        <p>Your order has been placed successfully</p>

        <button onClick={() => navigate('/HOME')}>
          CONTINUE SHOPPING
        </button>

      </div>

    </div>
  )
}

export default Success