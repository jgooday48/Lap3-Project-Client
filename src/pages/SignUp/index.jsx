import React, { useState, useEffect, useRef, useContext } from 'react'
import { Link } from 'react-router-dom';
import './signup.css'
const SignUp= () => {

  const activeStyle = {
    backgroundColor: "lightgrey"
  }

    const [email, setemail] = useState('')
    const [name, setName] = useState('')
    const [password, setpassword] = useState('')
    const inputRef = useRef()

    useEffect(() => {
        inputRef.current.focus()
      },[])
    
      const handleInput = (e) => {
        console.log(e.target.value)
        setemail(e.target.value)
      }

      const handleInputp = (e) => {
        console.log(e.target.value)
        setpassword(e.target.value)
      }

      const handleInputName = (e) => {
        console.log(e.target.value)
        setName(e.target.value)
      }

      const handleSubmit = (e) => {
        e.preventDefault()

        navigate('/')
      }

  return (
    <div style={activeStyle} id="registerdiv">
        <h1 className="registerh1">Register</h1>

        <form className="register" aria-label='register'
      onSubmit={handleSubmit}>


        <input
        type="text"
        id="name"
        placeholder='name'
        autoComplete="off"
        value={name}
        onChange={handleInputName}
        ref={inputRef}
        required
      />

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
      <input id="register" type="submit" value="Register"/>
      </form>

      <footer><p>Already have an account? Log in <Link to='/login'>here</Link></p></footer>



    
    </div>
  )
}

export default SignUp
