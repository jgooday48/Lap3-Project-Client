
import React, { useState, useEffect, useRef, useContext } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Loader from '../../components/Loader'
import { useRegisterMutation } from '../../slices/usersApiSlice'
import { setCredentials } from '../../slices/authSlice'
import './signup.css'

const SignUp = () => {

  const activeStyle = {
    backgroundColor: "#30AB9C"
  }

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState("")
  const inputRef = useRef()

  const navigate = useNavigate();
  const dispatch = useDispatch();


  const [register, { isLoading }] = useRegisterMutation();
  const { userInfo } = useSelector(state => state.auth);
  
  useEffect(() => {
    if(userInfo){
      navigate("/");
    }
  }, [navigate, userInfo]);


  const handleSubmit = async (e) => {
    e.preventDefault()
    if(password !== confirmPassword){
      toast.error("Passwords do not match")
    } else {
      try {
        const res = await register({name, email, password}).unwrap();
        dispatch(setCredentials({...res}))
        navigate("/")
      } catch (err) {
        toast.error(err?.data?.message || err.error)
      }
    }
  }

  useEffect(() => {
      inputRef.current.focus()
    },[])
  
    const handleNameChange = (e) => {
      setName(e.target.value)
    }

    const handleEmailChange = (e) => {
      setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
      setPassword(e.target.value)
    }

    const handleConfirmPasswordChange = (e) => {
      setConfirmPassword(e.target.value)
    }

  return (
    <div style={activeStyle} id="registerdiv">
      <h1 className='registerh1'>Register</h1>
      <form aria-label='sign up' className='register'>

        <ul>
          <input type="text" id="name" autoComplete="off" value={name} onChange={handleNameChange} ref={inputRef} placeholder='name' required/>
        </ul>

        <ul>
          <input type="email" id="email" autoComplete="off" value={email} placeholder='email' onChange={handleEmailChange} ref={inputRef} required/>
        </ul>

        <ul>
          <input type="password" id="password" autoComplete="off" placeholder='password' value={password} onChange={handlePasswordChange} ref={inputRef} required/>
        </ul>

        <ul>
          <input type="password" id="confirmPassword" autoComplete="off" value={confirmPassword} onChange={handleConfirmPasswordChange} placeholder='confirm password' ref={inputRef} required/>
        </ul>

        {isLoading && <Loader />}

        <ul>
          <button onClick={handleSubmit} id="register">Sign Up</button>
        </ul>
        
      </form> 
      <footer className='footer-Register'>
      <p>Already have an account?   
        <NavLink to="/login" style={({ isActive }) => (isActive ? activeStyle : undefined)}> Login</NavLink>
      </p>
      </footer>

    </div>
  )
}

export default SignUp
