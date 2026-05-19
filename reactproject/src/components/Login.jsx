import React, { useState, useEffect } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


const Login = () => {

  const navigate = useNavigate()

  useEffect(() => {
  const user = localStorage.getItem('username')
  if(user){
    navigate('/')
  }
}, [])

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

const handleLogin = (event) => {

  event.preventDefault()

  const loginData = {
    username: username,
    password: password
  }

  fetch('https://shopz-backend-75aw.onrender.com/login/', {

    method: 'POST',

    headers: {
      'Content-Type': 'application/json'
    },

    body: JSON.stringify(loginData)

  })

  .then((response) => response.json())

  .then((data) => {

    console.log(data)

    if(data.message){
      
      localStorage.setItem('username', username)

      window.dispatchEvent(new Event('userUpdated'))

      toast.success('Login Success')

      navigate('/')

    }

    else{

      toast.error('Invalid Username or Password')

    }

  })

}
  return (
    <div id="loginbody">

      <form id="main" onSubmit={handleLogin}>

        <h1>LOGIN</h1>

        <label>USERNAME :</label>
        <input
          className="logininput"
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />

        <label>PASSWORD :</label>
        <input
          className="logininput"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <button id="loginsubmitbutton" type="submit">
          LOGIN
        </button>

        <p id="registerlink">
          Don't have an account?
          <span onClick={() => navigate('/REGISTER')}> Register</span>
        </p>

      </form>

    </div>
  )
}

export default Login