import React, { useState, useEffect } from 'react'
import './Register.css'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


const Register = () => {

  const navigate = useNavigate()

  useEffect(() => {
  const user = localStorage.getItem('username')
  if(user){
    navigate('/')
  }
}, [])

  const [fullname, setFullname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

const handleRegister = (event) => {
  event.preventDefault()

  const registerData = {
    username: fullname,
    email: email,
    password: password
  }

 fetch('https://shopz-backend-75aw.onrender.com/register/', { 
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(registerData)
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      toast.success('Registered Successfully')
      navigate('/LOGIN')
    })
    .catch((error) => {
      console.log(error)
      toast.error('Registration Failed')
    })
}

  return (
    <div id="registerbody">

      <form id="registermain" onSubmit={handleRegister}>

        <h1>REGISTER</h1>

        <label>FULL NAME :</label>
        <input
          className="registerinput"
          type="text"
          value={fullname}
          onChange={(event) => setFullname(event.target.value)}
        />

        <label>EMAIL :</label>
        <input
          className="registerinput"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <label>PASSWORD :</label>
        <input
          className="registerinput"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <label>CONFIRM PASSWORD :</label>
        <input
          className="registerinput"
          type="password"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
        />

        <button id="registersubmitbutton" type="submit">
          CREATE ACCOUNT
        </button>

        <p id="loginlink">
          Already have an account?
          <span onClick={() => navigate('/LOGIN')}> Login</span>
        </p>

      </form>

    </div>
  )
}

export default Register