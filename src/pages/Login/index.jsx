
import React, { useState, useEffect, useRef, useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { useLoginMutation } from '../../slices/usersApiSlice'
import { setCredentials } from '../../slices/authSlice'
import { toast } from 'react-toastify'
import Loader from '../../components/Loader'
import './login.css'

const Login = () => {

    const activeStyle = {
      backgroundColor: "lightgrey"
    }
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const inputRef = useRef()

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [login, { isLoading }] =  useLoginMutation();

    const { userInfo } = useSelector(state => state.auth);

    useEffect(() => {
      if(userInfo){
        navigate("/");
      }
    }, [navigate, userInfo]);

    useEffect(() => {
        inputRef.current.focus()
      },[])


    
    const handleEmailChange = (e) => {
      setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
      setPassword(e.target.value)
    }

    const handleSubmit = async (e) => {
      e.preventDefault()
      try {
        const res = await login({email, password}).unwrap();
        localStorage.setItem("jwt", res.token);
        dispatch(setCredentials({...res}))
        navigate("/")
      } catch (err) {
        toast.error(err?.data?.message || err.error)
      }
    }

    return (
      <div style={activeStyle} id="registerdiv">
        <h1 className='loginh1'>Login</h1>
        <form aria-label='sign in' className='login'>

          <ul>

            <input type="email" id="email" autoComplete="off" placeholder='email' value={email} onChange={handleEmailChange} ref={inputRef} required/>
          </ul>

          <ul>

            <input type="password" id="password" autoComplete="off" placeholder='password' value={password} onChange={handlePasswordChange} ref={inputRef} required/>
          </ul>

          {isLoading && <Loader />}

          <ul>
            <button onClick={handleSubmit} id="login">Sign In</button>
          </ul>

        </form> 
        <footer>
        <p>
          New User? <NavLink to="/register" style={({ isActive }) => (isActive ? activeStyle : undefined)}>  Register</NavLink>
        </p>
        </footer>
      </div>
    )
}

export default Login
