
import React, { useState, useEffect, useRef, useContext } from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const inputRef = useRef()

    useEffect(() => {
        inputRef.current.focus()
      },[])
    
      const handleEmailChange = (e) => {
        console.log(e.target.value)
        setEmail(e.target.value)
      }

      const handlePasswordChange = (e) => {
        console.log(e.target.value)
        setPassword(e.target.value)
      }

      const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email)
        console.log(password)
      }

  return (
    <>
      <h1>Login</h1>
      <form aria-label='sign in'>

        <ul>
          <label htmlFor="username" className="mr10">Email</label>
          <input type="email" id="email" autoComplete="off" value={email} onChange={handleEmailChange} ref={inputRef} required/>
        </ul>

        <ul>
          <label htmlFor="password" className="mr10">Password</label>
          <input type="password" id="password" autoComplete="off" value={password} onChange={handlePasswordChange} ref={inputRef} required/>
        </ul>

        <ul>
          <button onClick={handleSubmit}>Sign In</button>
        </ul>
        
      </form> 
      <p>New User?   
        <NavLink to="/register" style={({ isActive }) => (isActive ? activeStyle : undefined)}> Register</NavLink>
      </p>
    </>
  )
}

export default Login
