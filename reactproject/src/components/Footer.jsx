import React from 'react'
import "./Footer.css"
import linkedin from "../assets/mdi_linkedin.svg"
import facebook from "../assets/ic_baseline-faceboook.svg"
import instagram from "../assets/mingcute_instagram-fiill.svg"
import visa from "../assets/Clip path group1.png"
import ry from "../assets/Clip path group-1.png"
import rupay from "../assets/Group 185.png"
import paytm from "../assets/Clip path group-2.png"

const Footer = () => {
  return (
    
<div id='footer'>

    <div ID="foots" >
      <div>
      <p>ABOUT US</p>
      <a href="">Our Story</a> <br /><br />
      <a href="">Laiteen Crafts and Cares</a> <br /><br />
      <a href="">Artisian Partners</a> <br /><br />
      <a href="">Careers</a><br /><br />
      </div>
      <div>
        
        <p>QUICK LINKS</p>
        <a href="">Shop All</a><br /><br />
        <a href="">New Arrivals</a><br /><br />
        <a href="">Gift Collections</a><br /><br />
      </div>
      <div>
      <p>CUSTOMER SUPPORT</p>
      <a href="">FAQ's</a><br /><br />
      <a href="">Track Orders</a><br /><br />
      <a href=""> Return & Exchange</a><br /><br />
      <a href="">Site Map</a><br /><br />
      </div>
      <div>
        <p>COMPANY</p>
        <a href="">Terms of Us</a><br /><br />
        <a href="">Privacy Policy</a><br /><br />
        <a href="">Contact Us</a><br /><br />
      </div>
      <div >
        <p>Sign up to Newsletter :</p>
        <input id='emailbar' type="email" placeholder="Enter Email Id....." />
        <p>Social <a href="https://www.linkedin.com/in/n-p-jaya-raman-95a1333a3/"> <img class="footimg" src={linkedin} alt="linkedin" /></a><a href="https://www.facebook.com/profile.php?id=100043055580919"><img class="footimg" src={facebook} alt="facebook" /></a><a href="https://www.instagram.com/_____rxmxn____________________/?hl=en"><img class="footimg" src={instagram} alt="instagram" /></a></p>
        <p>We Accept <img class="footimg" src={visa} alt="visa" /><img class="footimg" src={ry} alt="ry" /><img class="footimg" src={rupay} alt="rupay" /><img class="footimg" src={paytm} alt="paytm" /></p>
      </div>
    </div>
    <hr id="fline" />
    <p id='copyrights'>@ 2026 LATEEN.All rights reserved.</p>
</div>
  )
}

export default Footer