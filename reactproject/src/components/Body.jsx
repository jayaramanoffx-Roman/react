import React from 'react'
import "./Body.css"
import trolly from '../assets/ShoppingCartSimple.svg'
import silversteelwatch from '../assets/silversteelwatch.png'
import blackleatherwatche from '../assets/blackleatherwatches.png'
import blacksportswatch from '../assets/blacksportswatch.png'
import portronicspb from '../assets/portronicspb.jpg'
import samsungpb from '../assets/samsungpb.webp'
import boatpb from '../assets/boatpb.webp'
import samsungpendrive from '../assets/samsungpendrive.avif'
import hppendrive from '../assets/hppendrive.jpg'
import sonypendrive from '../assets/sonypendrive.jpg'
import realmeearbuds from '../assets/realmeearbuds.jpg'
import nothingearbuds from '../assets/nothingearbuds.jpg'
import boatearbuds from '../assets/boatearbuds.jpg'
import boatboom from '../assets/boatboom.jpg'
import jblboom from '../assets/jblboom.jpg'
import sonyboom from '../assets/sonyboom.jpg'
import { useState } from 'react'



const Body = ({children}) => {
 
          const [heartchange, setHeartchange] = useState({});

          const toggleHeart = (id) => {
                setHeartchange((prev) => ({
                 ...prev,
                  [id]: !prev[id]
             }));
            };



          
  return (
    <div id='wholebody'>
             {/* <div id='sap'>
                  <h4>SHOP ALL PRODUCTS</h4>
             </div> */}
             

          <div id='filterbox'>
                                 <span id='filtertext'>Filters </span> 
                  <div>
                       <select name="" id="a-z">
                       <option value="">Alphabets a-z   </option>
                       <option value="">{children}   </option>
                       <option value="">Powerbanks</option>
                       <option value="">Pendrive</option>
                       <option value="">Earbuds</option>
                       <option value="">Boom Headphones</option>
                       </select>
                  </div>
                  
                  
          </div>
          
                                   {/* products */}

          <div id='allproducts'>
            <div id='watchesdiv' class='bundle'>
            {/* watches */}
            <div class="setofproducts">
                 <img src={silversteelwatch} alt="watch" class="productimg" /><br />
                 <div class="p-name" >SILVER STEEL WATCH</div>
                 <div class="price">₹599 <del>₹999</del></div>
                 <div class="notify">TRENDING</div>  
                 <i onClick={() => toggleHeart('silver-steel-watch')} class={heartchange['silver-steel-watch'] ? 'bi-heart-fill' : 'bi-heart'}></i>
                 <button class="trolly-button"><img class="trollyimg" src={trolly} alt="trolly" />ADD TO CART</button>  
                 <button class="buynow-button">BUY NOW</button>
           </div>
           <div class="setofproducts">
                 <img src={blackleatherwatche}  alt="watch" class="productimg" /><br />
                 <div class="p-name">BLACK LEATHER WATCH</div>
                 <div class="price">₹499 <del>₹999</del></div>
                 <div class="notify">BESTSELLER</div>    
                 <i onClick={() => toggleHeart('black-leather-watch')} class={heartchange['black-leather-watch'] ? 'bi-heart-fill' : 'bi-heart'}></i>
                 <button class="trolly-button"><img class="trollyimg" src={trolly} alt="trolly" />ADD TO CART</button>  
                 <button class="buynow-button">BUY NOW</button>
           </div>
           <div class="setofproducts">
                 <img src={blacksportswatch} alt="watch" class="productimg" /><br />
                 <div class="p-name">BLACK SPORTS WATCH</div>
                 <div class="price">₹299 <del>₹699</del></div>
                 <div class="notify">TOPSELLER</div>
                 <i onClick={() => toggleHeart('black sports watch')} class={heartchange['black sports watch'] ? 'bi-heart-fill' : 'bi-heart'}></i>
                 <button class="trolly-button"><img class="trollyimg" src={trolly} alt="trolly" />ADD TO CART</button>  
                 <button class="buynow-button">BUY NOW</button>      
           </div>
           {/* watches */}
           </div>
           
           <div id='powerbankdiv' class='bundle'>
           {/* powerbank */}
           <div class="setofproducts">
                 <img src={portronicspb} alt="watch" class="productimg" /><br />
                 <div class="p-name">PORTRONICS POWERBANK</div>
                 <div class="price">₹999 <del>₹1699</del></div>
                 <div class="notify">TOPSELLER</div>
                 <i onClick={() => toggleHeart('portronics-powerbank')} class={heartchange['portronics-powerbank'] ? 'bi-heart-fill' : 'bi-heart'}></i>
                 <button class="trolly-button"><img class="trollyimg" src={trolly} alt="trolly" />ADD TO CART</button> 
                 <button class="buynow-button">BUY NOW</button>       
           </div>
            <div class="setofproducts">
                 <img src={samsungpb} alt="watch" class="productimg" /><br />
                 <div class="p-name">SAMSUNG POWERBANK</div>
                 <div class="price">₹1199 <del>₹1699</del></div>
                 <div class="notify">TOPSELLER</div>
                 <i onClick={() => toggleHeart('samsung-powerbank')} class={heartchange['samsung-powerbank'] ? 'bi-heart-fill' : 'bi-heart'}></i>
                 <button class="trolly-button"><img class="trollyimg" src={trolly} alt="trolly" />ADD TO CART</button>        
                 <button class="buynow-button">BUY NOW</button>
           </div>           
           <div class="setofproducts">
                 <img src={boatpb} alt="watch" class="productimg" /><br />
                 <div class="p-name">BOAT POWERBANK</div>
                 <div class="price">₹899 <del>₹1299</del></div>
                 <div class="notify">TOPSELLER</div>
                 <i onClick={() => toggleHeart('boat-powerbank')} class={heartchange['boat-powerbank'] ? 'bi-heart-fill' : 'bi-heart'}></i>
                 <button class="trolly-button"><img class="trollyimg" src={trolly} alt="trolly" />ADD TO CART</button>        
                 <button class="buynow-button">BUY NOW</button>
           </div>
           {/* powerbank */}
           </div>

           <div id='pendrivediv' class='bundle'>
           {/* pendrive */}
           <div class="setofproducts">
                 <img src={samsungpendrive} alt="watch" class="productimg" /><br />
                 <div class="p-name">SAMSUNG PENDRIVE</div>
                 <div class="price">₹299 <del>₹699</del></div>
                 <div class="notify">TOPSELLER</div>
                 <i onClick={() => toggleHeart('samsung-pendrive')} class={heartchange['samsung-pendrive'] ? 'bi-heart-fill' : 'bi-heart'}     ></i>
                 <button class="trolly-button"><img class="trollyimg" src={trolly} alt="trolly" />ADD TO CART</button>        
                 <button class="buynow-button">BUY NOW</button>
           </div>
            <div class="setofproducts">
                 <img src={hppendrive} alt="watch" class="productimg" /><br />
                 <div class="p-name">HP PENDRIVE</div>
                 <div class="price">₹599 <del>₹899</del></div>
                 <div class="notify">TOPSELLER</div>
                 <i onClick={() => toggleHeart('hp-pendrive')} class={heartchange['hp-pendrive'] ? 'bi-heart-fill' : 'bi-heart'}></i>
                 <button class="trolly-button"><img class="trollyimg" src={trolly} alt="trolly" />ADD TO CART</button>        
                 <button class="buynow-button">BUY NOW</button>
           </div>           
           <div class="setofproducts">
                 <img src={sonypendrive} alt="watch" class="productimg" /><br />
                 <div class="p-name">SONY PENDRIVE</div>
                 <div class="price">₹699 <del>₹1099</del></div>
                 <div class="notify">TOPSELLER</div>
                 <i onClick={() => toggleHeart('sony-pendrive')} class={heartchange['sony-pendrive'] ? 'bi-heart-fill' : 'bi-heart'}></i>
                 <button class="trolly-button"><img class="trollyimg" src={trolly} alt="trolly" />ADD TO CART</button>        
                 <button class="buynow-button">BUY NOW</button>
           </div>
           {/* pendrive */}
           </div >

            <div id='earbudsdiv' class='bundle'>
           {/* earbuds */}
            <div class="setofproducts">
                 <img src={realmeearbuds} alt="watch" class="productimg" /><br />
                 <div class="p-name">REALME EARBUDS</div>
                 <div class="price">₹999 <del>₹1699</del></div>
                 <div class="notify">TOPSELLER</div>
                 <i onClick={() => toggleHeart('realme-earbuds')} class={heartchange['realme-earbuds'] ? 'bi-heart-fill' : 'bi-heart'}></i>
                 <button class="trolly-button"><img class="trollyimg" src={trolly} alt="trolly" />ADD TO CART</button>        
                 <button class="buynow-button">BUY NOW</button>
            </div>
            <div class="setofproducts">
                 <img src={boatearbuds} alt="watch" class="productimg" /><br />
                 <div class="p-name">BOAT EARBUDS</div>
                 <div class="price">₹899 <del>₹1299</del></div>
                 <div class="notify">TOPSELLER</div>
                 <i onClick={() => toggleHeart('boat-earbuds')} class={heartchange['boat-earbuds'] ? 'bi-heart-fill' : 'bi-heart'}></i>
                 <button class="trolly-button"><img class="trollyimg" src={trolly} alt="trolly" />ADD TO CART</button>        
                 <button class="buynow-button">BUY NOW</button>
           </div>           
           <div class="setofproducts">
                 <img src={nothingearbuds} alt="watch" class="productimg" /><br />
                 <div class="p-name">NOTHING EARBUDS</div>
                 <div class="price">₹1499 <del>₹2699</del></div>
                 <div class="notify">TOPSELLER</div>
                 <i onClick={() => toggleHeart('nothing-earbuds')} class={heartchange['nothing-earbuds'] ? 'bi-heart-fill' : 'bi-heart'}></i>
                 <button class="trolly-button"><img class="trollyimg" src={trolly} alt="trolly" />ADD TO CART</button>        
                 <button class="buynow-button">BUY NOW</button>
           </div>
           {/* earbuds */}
           </div>

            <div id='boomdiv' class='bundle'>
           {/* boom */}
            <div class="setofproducts">
                 <img src={sonyboom} alt="watch" class="productimg" /><br />
                 <div class="p-name">SONY WH-CH720N/BCIN </div>
                 <div class="price">₹8299 <del>₹14,699</del></div>
                 <div class="notify">TOPSELLER</div>
                 <i onClick={() => toggleHeart('sony-boom')} class={heartchange['sony-boom'] ? 'bi-heart-fill' : 'bi-heart'}></i>
                 <button class="trolly-button"><img class="trollyimg" src={trolly} alt="trolly" />ADD TO CART</button>        
                 <button class="buynow-button">BUY NOW</button>
           </div >
            <div class="setofproducts">
                 <img src={jblboom} alt="watch" class="productimg" /><br />
                 <div class="p-name">JBL LIVE 770NC </div>
                 <div class="price">₹9,999 <del>₹13,999</del></div>
                 <div class="notify">TOPSELLER</div>
                 <i onClick={() => toggleHeart('jbl-boom')} class={heartchange['jbl-boom'] ? 'bi-heart-fill' : 'bi-heart'}></i>
                 <button class="trolly-button"><img class="trollyimg" src={trolly} alt="trolly" />ADD TO CART</button>        
                 <button class="buynow-button">BUY NOW</button>
           </div>           
           <div class="setofproducts">
                 <img src={boatboom} alt="watch" class="productimg" /><br />
                 <div class="p-name">BOAT ROCKERZ 450 PRO</div>
                 <div class="price">₹1,799 <del>₹4,999</del></div>
                 <div class="notify">TOPSELLER</div>
                 <i onClick={() => toggleHeart('boat-boom')} class={heartchange['boat-boom'] ? 'bi-heart-fill' : 'bi-heart'}></i>
                 <button class="trolly-button"><img class="trollyimg" src={trolly} alt="trolly" />ADD TO CART</button>        
                 <button class="buynow-button">BUY NOW</button>
           </div>
           {/* boom */}
           </div>
          </div>
       
     </div>

  )
}

export default Body