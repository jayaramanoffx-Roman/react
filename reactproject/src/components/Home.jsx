import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Header from './Header'
import Body from './Body'
import Footer from './Footer'

import './Home.css'

const Home = () => {

  const navigate = useNavigate()
  const [search, setSearch] = useState('')

  useEffect(() => {
    const user = localStorage.getItem('username')
    if(!user){
      navigate('/LOGIN')
    }
  }, [])

  return (
    <div>
      <Header search={search} setSearch={setSearch} />
      <Body  search={search}/>
      <Footer />
    </div>
  )
}

export default Home