import React from 'react'

import { FolderSideBar, RichTextEditor } from '../../components'
import { NavLink} from 'react-router-dom'
import './Home.css'
const HomePage = () => {
  return (
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
  )
}

export default HomePage

