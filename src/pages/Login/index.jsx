import React, { useState, useEffect, useRef, useContext } from 'react'
import { Link } from 'react-router-dom'
import './login.css'

const Login = () => {

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
    <div id='bodyLog' style={activeStyle}>
        <h1 className="loginh1">Login</h1>

        
        <form class="login" aria-label='sign in'
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
      <input id="login" type="submit" value="Login"/>
      </form>

      <footer><p>Don't have an account? Register <Link to='/register'>here</Link></p></footer>



    
    </div>
  )
}

export default Login
