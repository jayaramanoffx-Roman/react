import React from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Intro from "./components/Intro";
import Cart from './components/Cart'
import Success from './components/Success'
import Wishlist from './components/Wishlist'
import './components/Home.css';
import Register from "./components/Register";
import {BrowserRouter,Routes,Route} from 'react-router-dom';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Intro/>}/>
        <Route path='home' element={<Home />} />
         <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path="/intro" element={<Intro />} />
        <Route path='/profile' element={< Profile />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/SUCCESS' element={<Success />} />
        <Route path='/WISHLIST' element={<Wishlist />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App