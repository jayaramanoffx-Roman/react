import React from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Intro from "./components/Intro";
import './components/Home.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro/>}/>
        <Route path='login' element={<Login />} />
        <Route path='home' element={<Home />} />
        <Route path='profile' element={< Profile />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App