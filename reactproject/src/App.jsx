import React from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import Profile from "./components/Profile";
import './components/Home.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='HOME' element={<Home />} />
        <Route path='PROFILE' element={< Profile />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App