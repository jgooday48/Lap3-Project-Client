import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FolderSideBar, RichTextEditor } from '../../components'
import { NavLink} from 'react-router-dom'
import './Home.css'
const HomePage = () => {
  const { userInfo } =  useSelector(state => state.auth)

  const alt = (
    <div>
        <h1>Notes App</h1>
        <p>Welcome to the notes app. You may view, edit and delete your notes</p>
    </div>
  )
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
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>

                <li>
                  <NavLink to="/register">Register</NavLink>
                </li>
              </ul>
      </div>
    
    ) : (    
    <div>
      <h1>Notes App</h1>
          <p>Welcome to the notes app. You may view, edit and delete your notes</p>
    </div>

    )}
    </>
  )
}

export default HomePage

