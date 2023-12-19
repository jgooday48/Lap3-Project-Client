
import React, { useState, useEffect, useRef, useContext } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Loader from '../../components/Loader'
import { setCredentials } from '../../slices/authSlice'
import { useUpdateUserMutation } from '../../slices/usersApiSlice'
import { useLogoutMutation } from '../../slices/usersApiSlice'
import { logout } from '../../slices/authSlice'


const Profile = () => {
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
    <>
      <h1>Update profile</h1>
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

        {isLoading && <Loader />}

        <ul>
          <button onClick={handleSubmit}>Update</button>
        </ul>
        
      </form> 
    </>
  )
}

export default Profile
