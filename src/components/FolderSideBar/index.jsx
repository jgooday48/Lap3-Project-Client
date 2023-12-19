import React, { useEffect, useState, useRef} from 'react'
import './index.css'
import { Sidebar, Menu,  MenuItem} from 'react-pro-sidebar'
import { resizeWidth } from '../../utils/WidthChanger';
import NoteSideBar from '../NoteSideBar';

const FolderSideBar = ({data}) => {
  const resizerRef = useRef(null);
  const sidebarRef = useRef(null);
    const [notesData, setNotesData] = useState([])


  useEffect(() => {
    const resizer = resizerRef.current;
    const sidebar = sidebarRef.current;

    if (resizer && sidebar) {
      resizeWidth(resizer, sidebar);
    }
  }, []);



  useEffect(() => {
     getAllNotesByFolder
  }, [notesData])

  
  const getAllNotesByFolder = async (folderId) => {
    const api = `http://localhost:3000/notes/folder/${folderId}`
      const response = await fetch(api)
    const data = await response.json()
    setNotesData(data)
  }



  return (
    <div className="folderSideBar" ref={sidebarRef}>
      <div className="resizer" ref={resizerRef}></div>
    <div>
        <div className="header">
          <h3>La Fosse</h3>
        </div>
    
      <ul className="sidebar-menu">
        {data && data.map((folder, idx) =>
          
          <li className="menu-item" key={idx} onClick={() => getAllNotesByFolder(folder._id)}>{folder.Name}</li>
        )}
      </ul>
      </div>
      <div>
        <NoteSideBar data={notesData} />
        </div>
      
    </div>
  );
};









export default FolderSideBar