import React, { useState, useEffect, useRef, useContext } from 'react'
import { Link } from 'react-router-dom';
import './signup.css'
const SignUp= () => {

  const activeStyle = {
    backgroundColor: "lightgrey"
  }

    const [inputValue, setinputValue] = useState('')
    const [inputValuep, setinputValuep] = useState('')
    const inputRef = useRef()

    useEffect(() => {
        inputRef.current.focus()
      },[])
    
      const handleInput = (e) => {
        console.log(e.target.value)
        setinputValue(e.target.value)
      }

      const handleInputp = (e) => {
        console.log(e.target.value)
        setinputValuep(e.target.value)
      }

      const handleSubmit = (e) => {
        e.preventDefault()
        setUser(inputValue)
        navigate('/')
      }

  return (
    <div style={activeStyle} id="signupdiv">
        <h1 className="signinh1">Register</h1>

        <form className="signin" aria-label='sign up'
      onSubmit={handleSubmit}>
        

      <input
        type="text"
        id="email"
        placeholder='email'


        autoComplete="off"
        value={inputValue}
        onChange={handleInput}
        ref={inputRef}
        required
      />

      <input
        type="password"
        id="password"
        placeholder='password'


        autoComplete="off"
        value={inputValuep}
        onChange={handleInputp}
        ref={inputRef}
        required
      />
      <input id="register" type="submit" value="Register"/>
      </form>

      <footer><p>Already have an account? Log in <Link to='/login'>here</Link></p></footer>



    
    </div>
  )
}

export default SignUp
