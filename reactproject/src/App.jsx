import React from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Contact from "./components/Contact";
import Intro from "./components/Intro";
import Cart from './components/Cart'
import Success from './components/Success'
import Wishlist from "./components/Temp";
import './components/Home.css';
import Register from "./components/Register";
import Collections from './components/Collections'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Intro/>}/>
        <Route path='/Home' element={<Home />} />
         <Route path='/Register' element={<Register />} />
        <Route path='/Login' element={<Login />} />
        <Route path="/Intro" element={<Intro />} />
        <Route path='/Profile' element={< Profile />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/Success' element={<Success />} />
        <Route path='/Wishlist' element={<Wishlist />} />
        <Route path='/Collections' element={<Collections />} />
        <Route path='/Contact' element={<Contact/>} />
      </Routes>
      <ToastContainer />
      </BrowserRouter>
    </div>
  )
}

export default App