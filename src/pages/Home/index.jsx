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
            <h1>Notes App</h1>
            <p>Welcome to the notes app. Please log in or register to view and post notes</p>
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
      <h1>Notes App</h1>
          <p>Welcome to the notes app. You may view, edit and delete your notes</p>
    </div>

    )}
    </>
  )
}

export default HomePage

