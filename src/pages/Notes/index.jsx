import React from 'react'
import { useEffect, useState, useRef} from 'react'
import { FolderSideBar, RichTextEditor } from '../../components'
const Notes = () => {

   const [folderData, setFolderData] = useState([])

  let userId = "6581c22f67184ef3425c6b08"

  
  
 

  useEffect(() => {

     const getAllFoldersByUser = async () => {
    const api =  `http://localhost:3000/folders/user/${userId}`
    const response = await fetch(api)
    const data = await response.json()
    // console.log("data line 15 Notes component: ", data)
       setFolderData(data)
 
    }
    
     getAllFoldersByUser()

  }, [])

    //  console.log("folderData line 29 Notes component: ", folderData)

  return (
    <div className="notesPage">


    <FolderSideBar data={folderData} />
    
    </div>
    
  )
}

export default Notes
