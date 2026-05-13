import React, { useState } from 'react'
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate()
  
  const handlenavigation = () => {
    navigate('/HOME')
  }
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')

  const Userdata = (event) => {
   event.preventDefault()

   const collected_data = {
    user_name : username,
    user_password :password
   }
   console.log(collected_data)
  }
 
  return (
    <div id='loginbody'>
      {/* <h1>LOGIN PAGE</h1> */}
        <form action=""  id='main'>
            <label htmlFor="">USERNAME : </label>
            <input className='logininput' type="text" onChange={event => setUsername(event.target.value)} value={username} />
            <br />
            <br />
            <label htmlFor="">PASSWORD : </label>
            <input className='logininput' type="password" onChange={event => setPassword(event.target.value)} value={password}/>
            <br />
            <br />
            <br />
            <a onClick={handlenavigation}> <button id='loginsubmitbutton'  onClick={event => Userdata(event)}>SUBMIT</button></a>
        </form>
    </div>
  )
}

export default Login