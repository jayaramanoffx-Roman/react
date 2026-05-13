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
                       <option value=""> Watches  </option>
                       <option value="">Powerbanks</option>
                       <option value="">Pendrive</option>
                       <option value="">Earbuds</option>
                       <option value="">Boom Headphones</option>
                       </select>
                  </div>
                  
                  
          </div>
          
                                   {/* products */}

          <div id='allproducts'>
            <div id='watchesdiv' className='bundle'>
            {/* watches */}
            <div className="setofproducts">
                 <img src={silversteelwatch} alt="watch" className="productimg" /><br />
                 <div className="p-name" >SILVER STEEL WATCH</div>
                 <div className="price">₹599 <del>₹999</del></div>
                 <div className="notify">TRENDING</div>  
                 <i onClick={() => toggleHeart('silver-steel-watch')} className={heartchange['silver-steel-watch'] ? 'bi-heart-fill' : 'bi-heart'}></i>
                 <button className="trolly-button"><img className="trollyimg" src={trolly} alt="trolly" />ADD TO CART</button>  
                 <button className="buynow-button">BUY NOW</button>
           </div>
           <div className="setofproducts">
                 <img src={blackleatherwatche}  alt="watch" className="productimg" /><br />
                 <div className="p-name">BLACK LEATHER WATCH</div>
                 <div className="price">₹499 <del>₹999</del></div>
                 <div className="notify">BESTSELLER</div>    
                 <i onClick={() => toggleHeart('black-leather-watch')} className={heartchange['black-leather-watch'] ? 'bi-heart-fill' : 'bi-heart'}></i>
                 <button className="trolly-button"><img className="trollyimg" src={trolly} alt="trolly" />ADD TO CART</button>  
                 <button className="buynow-button">BUY NOW</button>
           </div>
           <div className="setofproducts">
                 <img src={blacksportswatch} alt="watch" className="productimg" /><br />
                 <div className="p-name">BLACK SPORTS WATCH</div>
                 <div className="price">₹299 <del>₹699</del></div>
                 <div className="notify">TOPSELLER</div>
                 <i onClick={() => toggleHeart('black sports watch')} className={heartchange['black sports watch'] ? 'bi-heart-fill' : 'bi-heart'}></i>
                 <button className="trolly-button"><img className="trollyimg" src={trolly} alt="trolly" />ADD TO CART</button>  
                 <button className="buynow-button">BUY NOW</button>      
           </div>
           {/* watches */}
           </div>
           
           <div id='powerbankdiv' className='bundle'>
           {/* powerbank */}
           <div className="setofproducts">
                 <img src={portronicspb} alt="watch" className="productimg" /><br />
                 <div className="p-name">PORTRONICS POWERBANK</div>
                 <div className="price">₹999 <del>₹1699</del></div>
                 <div className="notify">TOPSELLER</div>
                 <i onClick={() => toggleHeart('portronics-powerbank')} className={heartchange['portronics-powerbank'] ? 'bi-heart-fill' : 'bi-heart'}></i>
                 <button className="trolly-button"><img className="trollyimg" src={trolly} alt="trolly" />ADD TO CART</button> 
                 <button className="buynow-button">BUY NOW</button>       
           </div>
            <div className="setofproducts">
                 <img src={samsungpb} alt="watch" className="productimg" /><br />
                 <div className="p-name">SAMSUNG POWERBANK</div>
                 <div className="price">₹1199 <del>₹1699</del></div>
                 <div className="notify">TOPSELLER</div>
                 <i onClick={() => toggleHeart('samsung-powerbank')} className={heartchange['samsung-powerbank'] ? 'bi-heart-fill' : 'bi-heart'}></i>
                 <button className="trolly-button"><img className="trollyimg" src={trolly} alt="trolly" />ADD TO CART</button>        
                 <button className="buynow-button">BUY NOW</button>
           </div>           
           <div className="setofproducts">
                 <img src={boatpb} alt="watch" className="productimg" /><br />
                 <div className="p-name">BOAT POWERBANK</div>
                 <div className="price">₹899 <del>₹1299</del></div>
                 <div className="notify">TOPSELLER</div>
                 <i onClick={() => toggleHeart('boat-powerbank')} className={heartchange['boat-powerbank'] ? 'bi-heart-fill' : 'bi-heart'}></i>
                 <button className="trolly-button"><img className="trollyimg" src={trolly} alt="trolly" />ADD TO CART</button>        
                 <button className="buynow-button">BUY NOW</button>
           </div>
           {/* powerbank */}
           </div>

           <div id='pendrivediv' className='bundle'>
           {/* pendrive */}
           <div className="setofproducts">
                 <img src={samsungpendrive} alt="watch" className="productimg" /><br />
                 <div className="p-name">SAMSUNG PENDRIVE</div>
                 <div className="price">₹299 <del>₹699</del></div>
                 <div className="notify">TOPSELLER</div>
                 <i onClick={() => toggleHeart('samsung-pendrive')} className={heartchange['samsung-pendrive'] ? 'bi-heart-fill' : 'bi-heart'}     ></i>
                 <button className="trolly-button"><img className="trollyimg" src={trolly} alt="trolly" />ADD TO CART</button>        
                 <button className="buynow-button">BUY NOW</button>
           </div>
            <div className="setofproducts">
                 <img src={hppendrive} alt="watch" className="productimg" /><br />
                 <div className="p-name">HP PENDRIVE</div>
                 <div className="price">₹599 <del>₹899</del></div>
                 <div className="notify">TOPSELLER</div>
                 <i onClick={() => toggleHeart('hp-pendrive')} className={heartchange['hp-pendrive'] ? 'bi-heart-fill' : 'bi-heart'}></i>
                 <button className="trolly-button"><img className="trollyimg" src={trolly} alt="trolly" />ADD TO CART</button>        
                 <button className="buynow-button">BUY NOW</button>
           </div>           
           <div className="setofproducts">
                 <img src={sonypendrive} alt="watch" className="productimg" /><br />
                 <div className="p-name">SONY PENDRIVE</div>
                 <div className="price">₹699 <del>₹1099</del></div>
                 <div className="notify">TOPSELLER</div>
                 <i onClick={() => toggleHeart('sony-pendrive')} className={heartchange['sony-pendrive'] ? 'bi-heart-fill' : 'bi-heart'}></i>
                 <button className="trolly-button"><img className="trollyimg" src={trolly} alt="trolly" />ADD TO CART</button>        
                 <button className="buynow-button">BUY NOW</button>
           </div>
           {/* pendrive */}
           </div >

            <div id='earbudsdiv' className='bundle'>
           {/* earbuds */}
            <div className="setofproducts">
                 <img src={realmeearbuds} alt="watch" className="productimg" /><br />
                 <div className="p-name">REALME EARBUDS</div>
                 <div className="price">₹999 <del>₹1699</del></div>
                 <div className="notify">TOPSELLER</div>
                 <i onClick={() => toggleHeart('realme-earbuds')} className={heartchange['realme-earbuds'] ? 'bi-heart-fill' : 'bi-heart'}></i>
                 <button className="trolly-button"><img className="trollyimg" src={trolly} alt="trolly" />ADD TO CART</button>        
                 <button className="buynow-button">BUY NOW</button>
            </div>
            <div className="setofproducts">
                 <img src={boatearbuds} alt="watch" className="productimg" /><br />
                 <div className="p-name">BOAT EARBUDS</div>
                 <div className="price">₹899 <del>₹1299</del></div>
                 <div className="notify">TOPSELLER</div>
                 <i onClick={() => toggleHeart('boat-earbuds')} className={heartchange['boat-earbuds'] ? 'bi-heart-fill' : 'bi-heart'}></i>
                 <button className="trolly-button"><img className="trollyimg" src={trolly} alt="trolly" />ADD TO CART</button>        
                 <button className="buynow-button">BUY NOW</button>
           </div>           
           <div className="setofproducts">
                 <img src={nothingearbuds} alt="watch" className="productimg" /><br />
                 <div className="p-name">NOTHING EARBUDS</div>
                 <div className="price">₹1499 <del>₹2699</del></div>
                 <div className="notify">TOPSELLER</div>
                 <i onClick={() => toggleHeart('nothing-earbuds')} className={heartchange['nothing-earbuds'] ? 'bi-heart-fill' : 'bi-heart'}></i>
                 <button className="trolly-button"><img className="trollyimg" src={trolly} alt="trolly" />ADD TO CART</button>        
                 <button className="buynow-button">BUY NOW</button>
           </div>
           {/* earbuds */}
           </div>

            <div id='boomdiv' className='bundle'>
           {/* boom */}
            <div className="setofproducts">
                 <img src={sonyboom} alt="watch" className="productimg" /><br />
                 <div className="p-name">SONY WH-CH720N/BCIN </div>
                 <div className="price">₹8299 <del>₹14,699</del></div>
                 <div className="notify">TOPSELLER</div>
                 <i onClick={() => toggleHeart('sony-boom')} className={heartchange['sony-boom'] ? 'bi-heart-fill' : 'bi-heart'}></i>
                 <button className="trolly-button"><img className="trollyimg" src={trolly} alt="trolly" />ADD TO CART</button>        
                 <button className="buynow-button">BUY NOW</button>
           </div >
            <div className="setofproducts">
                 <img src={jblboom} alt="watch" className="productimg" /><br />
                 <div className="p-name">JBL LIVE 770NC </div>
                 <div className="price">₹9,999 <del>₹13,999</del></div>
                 <div className="notify">TOPSELLER</div>
                 <i onClick={() => toggleHeart('jbl-boom')} className={heartchange['jbl-boom'] ? 'bi-heart-fill' : 'bi-heart'}></i>
                 <button className="trolly-button"><img className="trollyimg" src={trolly} alt="trolly" />ADD TO CART</button>        
                 <button className="buynow-button">BUY NOW</button>
           </div>           
           <div className="setofproducts">
                 <img src={boatboom} alt="watch" className="productimg" /><br />
                 <div className="p-name">BOAT ROCKERZ 450 PRO</div>
                 <div className="price">₹1,799 <del>₹4,999</del></div>
                 <div className="notify">TOPSELLER</div>
                 <i onClick={() => toggleHeart('boat-boom')} className={heartchange['boat-boom'] ? 'bi-heart-fill' : 'bi-heart'}></i>
                 <button className="trolly-button"><img className="trollyimg" src={trolly} alt="trolly" />ADD TO CART</button>        
                 <button className="buynow-button">BUY NOW</button>
           </div>
           {/* boom */}
           </div>
          </div>
       
     </div>

  )
}

export default Body