
import React, { useState, useEffect, useRef, useContext } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Loader from '../../components/Loader'
import { useRegisterMutation } from '../../slices/usersApiSlice'
import { setCredentials } from '../../slices/authSlice'
import './signup.css'

const SignUp = () => {
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
    <>
      <h1 className='registerh1'>Sign Up</h1>
      <form aria-label='sign up' className='register'>

        <ul>
          <label htmlFor="username" className="mr10">Name</label>
          <input type="text" id="name" autoComplete="off" value={name} onChange={handleNameChange} ref={inputRef} required/>
        </ul>

        <ul>
          <label htmlFor="email" className="mr10" id="email">Email</label>
          <input type="email" id="email" autoComplete="off" value={email} onChange={handleEmailChange} ref={inputRef} required/>
        </ul>

        <ul>
          <label htmlFor="password" className="mr10" id="password">Password</label>
          <input type="password" id="password" autoComplete="off" value={password} onChange={handlePasswordChange} ref={inputRef} required/>
        </ul>

        <ul>
          <label htmlFor="password" className="mr10" id="password">Confirm Password</label>
          <input type="password" id="confirmPassword" autoComplete="off" value={confirmPassword} onChange={handleConfirmPasswordChange} ref={inputRef} required/>
        </ul>

        {isLoading && <Loader />}

        <ul>
          <button onClick={handleSubmit} id="register">Sign Up</button>
        </ul>
        
      </form> 
      <footer>
      <p>Already have an account?   
        <NavLink to="/login" style={({ isActive }) => (isActive ? activeStyle : undefined)}> Login</NavLink>
      </p>
      </footer>
    </>
  )
}

export default SignUp
