import React from 'react'
import { useEffect, useState, useRef} from 'react'
import { FolderSideBar, RichTextEditor } from '../../components'
const Notes = () => {

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
    <div className="notesPage">


    <FolderSideBar data={folderData} />
      
           {/* <FolderSideBar /> */}
          {/* <FolderSideBar/> 
          
              <RichTextEditor /> */}
    </div>
    
  )
}

export default Notes
