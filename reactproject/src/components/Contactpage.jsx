import React from 'react'
import visa from "../assets/Clip path group1.png"
import ry from "../assets/Clip path group-1.png"
import rupay from "../assets/Group 185.png"
import paytm from "../assets/Clip path group-2.png"

const Contactpage = () => {
  return (
    <div>
              <div >
        <p>Sign up to Newsletter :</p>
        <input id='emailbar' type="email" placeholder="Enter Email Id....." /> 
        <p id='social'>Social <a href="https://www.linkedin.com/in/n-p-jaya-raman-95a1333a3/"> <i className="bi bi-linkedin"></i></a>
                  <a href="https://www.facebook.com/profile.php?id=100043055580919"><i className="bi bi-facebook"></i></a>
                  <a href="https://www.instagram.com/_____rxmxn____________________/?hl=en"><i className="bi bi-instagram"></i></a>
        </p>
        <p id='we accept'>We Accept <img className="footimg" src={visa} alt="visa" />
                     <img className ="footimg" src={ry} alt="ry" />
                     <img className="footimg" src={rupay} alt="rupay" />
                     <img className ="footimg" src={paytm} alt="paytm" />
          </p>
      </div>
    </div>
  )
}

export default Contactpage