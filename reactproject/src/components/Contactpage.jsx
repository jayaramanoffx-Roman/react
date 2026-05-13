import React from 'react'

const Contactpage = () => {
  return (
    <div>
              <div >
        <p>Sign up to Newsletter :</p>
        <input id='emailbar' type="email" placeholder="Enter Email Id....." /> 
        <p id='social'>Social <a href="https://www.linkedin.com/in/n-p-jaya-raman-95a1333a3/"> <i class="bi bi-linkedin"></i></a>
                  <a href="https://www.facebook.com/profile.php?id=100043055580919"><i class="bi bi-facebook"></i></a>
                  <a href="https://www.instagram.com/_____rxmxn____________________/?hl=en"><i class="bi bi-instagram"></i></a>
        </p>
        <p id='we accept'>We Accept <img class="footimg" src={visa} alt="visa" />
                     <img class="footimg" src={ry} alt="ry" />
                     <img class="footimg" src={rupay} alt="rupay" />
                     <img class="footimg" src={paytm} alt="paytm" />
          </p>
      </div>
    </div>
  )
}

export default Contactpage