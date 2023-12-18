
import React, { useState, useEffect, useRef, useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { useLoginMutation } from '../../slices/usersApiSlice'
import { setCredentials } from '../../slices/authSlice'

const Login = () => {
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
        dispatch(setCredentials({...res}))
        navigate("/")
      } catch (err) {
        console.log(err?.data?.message || err.error)
      }
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
