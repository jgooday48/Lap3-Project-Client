import React from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import './style.css'
import { useLogoutMutation } from '../../slices/usersApiSlice'
import { logout } from '../../slices/authSlice'

const NavBar = () => {
    const activeStyle = {
      textDecoration: "underline",
      color: "darkblue"
    }

    const { userInfo } =  useSelector(state => state.auth)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [logoutApiCall] = useLogoutMutation();

    const logoutHandler = async () => {
      try {
        await logoutApiCall().unwrap();
        dispatch(logout());
        navigate("/login");
      } catch (err) {
        console.log(err)
      }
    }
  
    return (
      <>
      <nav>
       
        <ul className="nav-links">
          <li>
            <NavLink to="/" style={({ isActive }) => (isActive ? activeStyle : undefined)}>Home</NavLink>
          </li>


          {userInfo ? (
          <>
            <li title={userInfo.name} id="username">
              <NavLink to="/profile">
                My profile
              </NavLink>
            </li>
            <li>
              <button onClick={logoutHandler}>
                Logout
              </button>
            </li>
          </>
          ) : (
          <>
            <li>
              <NavLink to="/login" style={({ isActive }) => (isActive ? activeStyle : undefined)}>Login</NavLink>
            </li>

            <li>
              <NavLink to="/register" style={({ isActive }) => (isActive ? activeStyle : undefined)}>Sign Up</NavLink>
            </li>
          </>
          )}
          
          <li>
            <NavLink to="/notes" style={({ isActive }) => (isActive ? activeStyle : undefined)}>Notes</NavLink>
          </li>



        </ul>
      </nav>
  
      <Outlet/>

      </>
    );
  }
  
  export default NavBar
