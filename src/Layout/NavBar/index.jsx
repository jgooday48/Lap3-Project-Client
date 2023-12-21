import React from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import './style.css'
import { useLogoutMutation } from '../../slices/usersApiSlice'
import { logout } from '../../slices/authSlice'

const NavBar = () => {
    const activeStyle = {
      textDecoration: "underline",
      color: "green"
    }

    const { userInfo } =  useSelector(state => state.auth)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [logoutApiCall] = useLogoutMutation();

    const logoutHandler = async () => {
      try {
        localStorage.removeItem("jwt")
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
          <div className="noteworthy-div" onClick={() => navigate("/")}>
    <h3 id="noteworthy">Note-Worthy</h3>
       </div>
       
        <ul className="nav-links">
          <button className="button-4" role="button">
            <li>
                <NavLink to="/" style={({ isActive }) => (isActive ? activeStyle : undefined)}>Home</NavLink>
            </li>
          </button>

          {userInfo ? (
          <>
            <button className="button-4" role="button">
              <li title={userInfo.name} id="username">
              <NavLink to="/profile">
                My profile
              </NavLink>
              </li>
            </button>

            <button className="button-4" role="button">
              <li>
                <NavLink to="/folders" style={({ isActive }) => (isActive ? activeStyle : undefined)}>Notes</NavLink>
              </li>
            </button>
            <button className="button-4" role="button" onClick={logoutHandler}>
              <li>
                  Logout
              </li>
            </button>
          </>
          ) : (
          <>
            <button className="button-4" role="button">
              <li>
                  <NavLink to="/login" style={({ isActive }) => (isActive ? activeStyle : undefined)}>Login</NavLink>
              </li>
            </button>

            <button className="button-4" role="button">
              <li>
                  <NavLink to="/register" style={({ isActive }) => (isActive ? activeStyle : undefined)}>Sign Up</NavLink>
              </li>
            </button>
          </>
          )}
          



        </ul>
      </nav>
  
      <Outlet/>
       <div className="footer">Note-worthy&#169;</div>
      </>
    );
  }
  
  export default NavBar
