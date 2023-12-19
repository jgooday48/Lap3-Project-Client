import React from 'react'

import { FolderSideBar, RichTextEditor } from '../../components'
import { useState, useEffect } from 'react'

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
      
      </div>
  )
}

export default HomePage

