import React, { useState, useEffect, useRef, useContext } from 'react'
import { Link } from 'react-router-dom'
import './login.css'

const Login = () => {

  const activeStyle = {
    backgroundColor: "lightgrey"
  }

    
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
    const inputRef = useRef()

    useEffect(() => {
        inputRef.current.focus()
      },[])
    
      const handleInput = (e) => {
        console.log(e.target.value)
        setEmail(e.target.value)
      }

      const handleInputp = (e) => {
        console.log(e.target.value)
        setPassword(e.target.value)
      }

      const handleSubmit = (e) => {
        e.preventDefault()

        navigate('/')
      }

  return (
    <div id='bodyLog' style={activeStyle}>
        <h1 className="loginh1">Login</h1>

        
        <form className="login" aria-label='sign in'
      onSubmit={handleSubmit}>


      <input
        type="text"
        id="email"
        placeholder='email'


        autoComplete="off"
        value={email}
        onChange={handleInput}
        ref={inputRef}
        required
      />
      <input
        type="password"
        id="password"
        placeholder='password'


        autoComplete="off"
        value={password}
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
