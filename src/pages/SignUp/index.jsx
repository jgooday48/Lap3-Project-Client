
import React, { useState, useEffect, useRef, useContext } from 'react'
import { NavLink } from 'react-router-dom'

const SignUp = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState("")
  const inputRef = useRef()

  useEffect(() => {
      inputRef.current.focus()
    },[])
  
    const handleNameChange = (e) => {
      console.log(e.target.value)
      setName(e.target.value)
    }

    const handleEmailChange = (e) => {
      console.log(e.target.value)
      setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
      console.log(e.target.value)
      setPassword(e.target.value)
    }

    const handleConfirmPasswordChange = (e) => {
      console.log(e.target.value)
      setConfirmPassword(e.target.value)
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      console.log(name)
      console.log(email)
      console.log(password)
    }

  return (
    <>
      <h1>Sign Up</h1>
      <form aria-label='sign up'>

        <ul>
          <label htmlFor="username" className="mr10">Name</label>
          <input type="text" id="name" autoComplete="off" value={name} onChange={handleNameChange} ref={inputRef} required/>
        </ul>

        <ul>
          <label htmlFor="email" className="mr10">Email</label>
          <input type="email" id="email" autoComplete="off" value={email} onChange={handleEmailChange} ref={inputRef} required/>
        </ul>

        <ul>
          <label htmlFor="password" className="mr10">Password</label>
          <input type="password" id="password" autoComplete="off" value={password} onChange={handlePasswordChange} ref={inputRef} required/>
        </ul>

        <ul>
          <label htmlFor="password" className="mr10">Confirm Password</label>
          <input type="password" id="confirmPassword" autoComplete="off" value={confirmPassword} onChange={handleConfirmPasswordChange} ref={inputRef} required/>
        </ul>

        <ul>
          <button onClick={handleSubmit}>Sign In</button>
        </ul>
        
      </form> 
      <p>Already have an account?   
        <NavLink to="/login" style={({ isActive }) => (isActive ? activeStyle : undefined)}> Login</NavLink>
      </p>
    </>
  )
}

export default SignUp
