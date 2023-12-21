
import React, { useState, useEffect, useRef, useContext } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Loader from '../../components/Loader'
import { setCredentials } from '../../slices/authSlice'
import { useUpdateUserMutation } from '../../slices/usersApiSlice'
import { useLogoutMutation } from '../../slices/usersApiSlice'
import { logout } from '../../slices/authSlice'
import './profile.css'

const Profile = () => {


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

   
  const { userInfo } = useSelector(state => state.auth);

  const [logoutApiCall] = useLogoutMutation();
  const [updateProfile, { isLoading }] = useUpdateUserMutation();
  
  useEffect(() => {
    setName(userInfo.name);
    setEmail(userInfo.email)
  }, [userInfo.setName, userInfo.setEmail]);


  const handleSubmit = async (e) => {
    e.preventDefault()
    if(password !== confirmPassword){
      toast.error("Passwords do not match")
    } else {
      try {
        console.log(userInfo._id)
        const res = await updateProfile({ _id: userInfo._id, name, email, password }).unwrap();
        
        console.log(res)
        dispatch(setCredentials({res}));
        toast.success("Profile Updated!")
        await logoutApiCall().unwrap();
        dispatch(logout());
        navigate("/login");
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
    <div className='profilePage' style={activeStyle}>
      <div>
      <h1>Update profile</h1>
      <form aria-label='update' className='update'>

        <ul>
          <input type="text" id="name" autoComplete="off" value={name} placeholder='name' onChange={handleNameChange} ref={inputRef} required/>
        </ul>

        <ul>
          <input type="email" id="email" autoComplete="off" placeholder='email' value={email} onChange={handleEmailChange} ref={inputRef} required/>
        </ul>

        <ul>
          <input type="password" id="password" autoComplete="off" placeholder='password' value={password} onChange={handlePasswordChange} ref={inputRef} required/>
        </ul>

        <ul>
          <input type="password" id="confirmPassword" autoComplete="off" placeholder='Confirm Password' value={confirmPassword} onChange={handleConfirmPasswordChange} ref={inputRef} required/>
        </ul>

        {isLoading && <Loader />}

        <ul>
          <button onClick={handleSubmit} id='updateb'>Update</button>
        </ul>
        
      </form> 
      </div>
    </div>
  )
}

export default Profile
