import React, { useEffect, useState, useRef} from 'react'
import { Sidebar, Menu,  MenuItem} from 'react-pro-sidebar'
import { resizeWidth } from '../../utils/WidthChanger';
import RichTextEditor from '../RichTextEditor';


const NoteSideBar = ({data}) => {
  const resizerRef = useRef(null);
  const sidebarRef = useRef(null);
    // const [notesData, setNotesData] = useState([])
  const [content, setContent] = useState('')
  const [noteId, setNoteId] = useState(null)


  useEffect(() => {
    const resizer = resizerRef.current;
    const sidebar = sidebarRef.current;

    if (resizer && sidebar) {
      resizeWidth(resizer, sidebar);
    }
  }, []);

  //   const getANote = async(id) => {
  //     await   fetch(`http://localhost:3000/notes/${id}`)
  //         .then(res => res.json())
  //         .then(data => { console.log(data)
  //             setContent(data?.Content)
  //         })
  //         .catch(e => console.log(e))
  // }


  
useEffect(() => {
  console.log('Content prop changed:', content);
  console.log('ID prop changed:', noteId);
}, [content, noteId]);



  return (
    <div className="folderSideBar" ref={sidebarRef}>
      <div className="resizer" ref={resizerRef}></div>
      <ul className="sidebar-menu">
        {data && data.map((note) =>
          
          <li role="menuitem" className="menu-item" key={note._id} onClick={() => { setContent(note.Content); setNoteId(note._id) }}>{note.Name}</li>
        )}
      </ul>
      {noteId && 
        <RichTextEditor key={noteId} content={content} setContent={setContent} id={noteId} />
      
      }
      
    </div>
  );
};

export default NoteSideBar