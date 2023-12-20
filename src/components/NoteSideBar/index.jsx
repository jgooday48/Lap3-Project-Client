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
  const [noteData, setNoteData] = useState([])


  useEffect(() => {
    const resizer = resizerRef.current;
    const sidebar = sidebarRef.current;

    if (resizer && sidebar) {
      resizeWidth(resizer, sidebar);
    }
    console.log("data: ", data)
    setNoteData(data)
  
    // console.log("noteData: ", noteData[0])

  }, []);
  
useEffect(() => {
  // console.log('Content prop changed:', content);
  // console.log('ID prop changed:', noteId);

}, [content, noteId]);
  
      async function updateNote() {
        try {
            const options = {
            method: "PATCH",
              headers: {
                  'Content-Type': 'application/json',
            
                //   'Authorization': `Bearer ${user.token}`
              },
            body: JSON.stringify({
                Content: content
            })
        }
            const response = await fetch(`http://localhost:3000/notes/${noteId}`, options);
            console.log("update happpend")
        // const data = await response.json();
        // setContent(data?.content);
    } catch (error) {
        console.error("Error updating note:", error);
    }
}


   const updateContent = (newContent) => {
    setContent(newContent);
  };


return (
  <div className="folderSideBar" ref={sidebarRef}>
    <div className="resizer" ref={resizerRef}></div>
    <ul className="sidebar-menu">
      {data && data.map((note) => (
        <React.Fragment key={note._id}>
          <li role="menuitem" className="menu-item" onClick={() => { setContent(note.Content); setNoteId(note._id) }}>
            {note.Name}
          </li>
          <li key={`${note._id}-delete`}>
            <button>Delete</button>
          </li>
        </React.Fragment>
      ))}
    </ul>
    {noteId && (
      <RichTextEditor key={noteId} content={content} setContent={setContent} id={noteId} updateNote={updateNote} updateContent={updateContent} />
    )}
  </div>
);


};

export default NoteSideBar