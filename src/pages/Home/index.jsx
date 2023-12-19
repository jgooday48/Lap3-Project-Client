import React from 'react'

import { FolderSideBar, RichTextEditor } from '../../components'

import { useState, useEffect } from 'react'

import { NavLink} from 'react-router-dom'
import './Home.css'

const HomePage = () => {


  const [folderData, setFolderData] = useState([])

  let userId = "6581c22f67184ef3425c6b08"

  
  
  const getAllFoldersByUser = async () => {
    const api = `http://localhost:3000/folders/user/${userId}`
    const response = await fetch(api)
    const data = await response.json()
    setFolderData(data)
  }

  useEffect(() => {
     getAllFoldersByUser()
  }, [folderData])

  return (
      <div className="homepage">

           <FolderSideBar data={folderData} />

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

