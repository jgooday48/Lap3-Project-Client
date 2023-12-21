import React from 'react'
import { useSelector } from 'react-redux'

import { NavLink } from 'react-router-dom'
import './Home.css'

const HomePage = () => {
  const { userInfo } = useSelector(state => state.auth)

  return (
    <>
      {!userInfo ? (
        <div className='homepage'>
          <h1 className='noteworthy'>Note-Worthy</h1>

          <p>
            <h4>Welcome to the note app, please login to continue!</h4>
          </p>
          <ul>
            <button className='button-4' role='button' id='homepageBtn1'>
              <NavLink to='/login'>Login</NavLink>
            </button>
            <button className='button-4' role='button' id='homepageBtn2'>
              <NavLink to='/register'>Sign Up</NavLink>
            </button>
          </ul>
        </div>
      ) : (
        <div className='homepage'>
          <h1 className='noteworthy'>Note-Worthy</h1>
          <p>
            <h4>
              Thanks for joining! Checkout the nav bar to see where you need to
              go!
            </h4>
          </p>
        </div>
      )}
    </>
  )
}

export default HomePage
