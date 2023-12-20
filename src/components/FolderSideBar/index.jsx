import React, { useEffect, useState, useRef } from 'react'
import './index.css'
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar'
import { resizeWidth } from '../../utils/WidthChanger'
import NoteSideBar from '../NoteSideBar'
import AddFolder from '../AddFolder'
import { ToastContainer } from 'react-toastify'
import { toast } from 'react-toastify'
import NoteSection from '../NoteSection'

const FolderSideBar = ({ data }) => {
  const resizerRef = useRef(null)
  const sidebarRef = useRef(null)
  const [notesData, setNotesData] = useState([])
  const [folderId, setFolderId] = useState()
  const [add, setAdd] = useState(false)
  const [folderName, setFolderName] = useState([])
  let userId = '6581c22f67184ef3425c6b08'

  useEffect(() => {
    const resizer = resizerRef.current
    const sidebar = sidebarRef.current

    if (resizer && sidebar) {
      resizeWidth(resizer, sidebar)
    }

    getAllNotesByFolder
  }, [])

  useEffect(() => {
    getAllNotesByFolder
  }, [notesData])

  const getAllNotesByFolder = async folderId => {
    const api = `http://localhost:3000/notes/folder/${folderId}`
    const response = await fetch(api)
    const data = await response.json()
    setNotesData(data)
    setFolderId(folderId)
  }

  async function createFolder () {
    try {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'

          //   'Authorization': `Bearer ${user.token}`
        },
        body: JSON.stringify({
          Name: folderName,
          User: userId
        })
      }
      const response = await fetch(`http://localhost:3000/folders`, options)
      console.log('update happpend')
      toast.success(`"${folderName}" has been added to your folders`, {
        autoClose: 2000
      })
    } catch (error) {
      console.error('Error updating note:', error)
    }
  }

  const addFolder = () => {
    createFolder()
  }

  return (
    <div className='folderSideBar'>
      <ToastContainer />

      <div className='sidebar' ref={sidebarRef}>
        <div className='resizer' ref={resizerRef}></div>
        <div className='header'>
          <h3>La Fosse</h3>
        </div>
        <div>
          <input
            type='text'
            value={folderName}
            onChange={e => setFolderName(e.target.value)}
            placeholder='Create a new folder'
          />
          <button onClick={addFolder}>Add Folder</button>
        </div>

        <ul className='sidebar-menu'>
          {data &&
            data.map((folder) => (
              <li
                className='menu-item'
                key={folder._id}
                onClick={() => getAllNotesByFolder(folder._id)}
              >
                {folder.Name}
              </li>
            ))}
        </ul>
      </div>

      <div className='notes-section'>
        <NoteSection notesData={notesData} folderId={folderId} />
      </div>
    </div>
  )
}

export default FolderSideBar
