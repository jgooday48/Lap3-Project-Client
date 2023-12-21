import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FolderSideBar, RichTextEditor } from '../../components'
import { NavLink} from 'react-router-dom'
import './Home.css'
const HomePage = () => {
  const { userInfo } =  useSelector(state => state.auth)

  return (
    <>
    {!userInfo ? (
      <div className="homepage">
           {/* <FolderSideBar />
          <FolderSideBar/> 
          
              <RichTextEditor /> */}
            <h1>Note-Worthy</h1>
            <p>Welcome to the note app, please login to continue!</p>
            <ul>
              <button className="button-4" role="button" id='homepageBtn1'>
                  <NavLink to="/login">Login</NavLink>
              </button>
              <button className="button-4" role="button" id='homepageBtn2'>
                  <NavLink to="/register">Sign Up</NavLink>
              </button>
            </ul>
      </div>
    
    ) : (    
    <div className='homepage'>
      <h1>Note-Worthy</h1>
          <p>Thanks for joining! Checkout the nav bar to see where you need to go!</p>
    </div>

    )}
    </>
  )
}

export default HomePage

