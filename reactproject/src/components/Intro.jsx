import React from 'react'
import './Intro.css'
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import introgif from '../assets/SHOPZ TEXT V2.gif'

const Intro = () => {
  const navigate = useNavigate();

  useEffect(() => {
       setTimeout(() => {
        navigate('/home')
        }, 2500)
    }, [])

    
  return (
    <div id='intropage'>
      <center>
        <img className="intro-video" src={introgif} alt="SHOPZ Intro" />
        <p className="shopz-subtext">LUXURY ELECTRONICS STORE</p> 
      </center>
    </div>
  )
}

export default Intro