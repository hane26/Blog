import React , { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from "axios"


const Register = () => {
  const [inputs, setInputs]= useState({ // setInputs is a function that updates the state
    username:"",
    email:"",
    password:"",
  })

  const handleChange = (e) => { // e is the event object that is passed in
    setInputs(prev=>({...prev,[e.target.name]:e.target.value}))

  }

  const handleSubmit = async e => { //async function is used to make a request to the server and wait for the response
    e.preventDefault(); 

    try {
      const res = await axios.post("/auth/register", inputs)
      console.log(res)

    } catch(err){
      console.log(err)
    }
   // console.log(inputs)
  }

  return (
    <div className='auth'>
      <h1>Login</h1>
      <form>
        <input required type='text' placeholder='Username' name='username' onChange={handleChange} />
        <input required type='text' placeholder='Email' name='email' onChange={handleChange}/>
        <input required type="password" placeholder='Password' name='password' onChange={handleChange}/>
        <button onClick={handleSubmit}>Resgiter</button>
        <p>This is an Error!</p>
        <span>Do you have an account? 
         <Link to="/login">Login </Link>
        </span>
      </form>
    </div>
  )
}

export default Register


/// rafce => creating our functions

