import React from 'react'
import './Contact.css'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Contact = () => {

  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    toast.success('Message sent successfully')
  }

  return (
    <div id="contactbody">

      <div id="contactcard">

        <div className="contactleft">
          <h1>CONTACT US</h1>
          <p>We are here to help you with orders, products and support.</p>

          <div className="contactinfo">
            <div>
              <i className="bi bi-telephone-fill"></i>
              <span>+91 98765 43210</span>
            </div>

            <div>
              <i className="bi bi-envelope-fill"></i>
              <span>shopzsupport@gmail.com</span>
            </div>

            <div>
              <i className="bi bi-geo-alt-fill"></i>
              <span>Chennai, Tamil Nadu</span>
            </div>
          </div>

          <div className="socialicons">
            <a href="https://www.facebook.com/" target="_blank">
              <i className="bi bi-facebook"></i>
            </a>

            <a href="https://www.instagram.com/" target="_blank">
              <i className="bi bi-instagram"></i>
            </a>

            <a href="mailto:shopzsupport@gmail.com">
              <i className="bi bi-envelope"></i>
            </a>
          </div>

          <button onClick={() => navigate('/HOME')}>
            BACK TO HOME
          </button>
        </div>

        <form className="contactright" onSubmit={handleSubmit}>
          <h2>SEND MESSAGE</h2>

          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="text" placeholder="Subject" required />

          <textarea placeholder="Write your message..." required></textarea>

          <button type="submit">
            SEND MESSAGE
          </button>
        </form>

      </div>

    </div>
  )
}

export default Contact