import React, { useEffect, useState, useRef} from 'react'
import { Sidebar, Menu,  MenuItem} from 'react-pro-sidebar'
import { resizeWidth } from '../../utils/WidthChanger';
import RichTextEditor from '../RichTextEditor';

const NoteItem = ({ note, setContent, setNoteId }) => (
  <React.Fragment key={note._id}>
    <li
      role="menuitem"
      className="menu-item"
      onClick={() => {
        setContent(note.Content);
        setNoteId(note._id);
      }}
    >
      {note.Name}
    </li>
    <li key={`${note._id}-delete`}>
      <button>Delete</button>
    </li>
  </React.Fragment>
);

const NoteSideBar = ({ data, folderId, getAllNotesByFolder }) => {
  const resizerRef = useRef(null);
  const sidebarRef = useRef(null);

  const [content, setContent] = useState('');
  const [noteId, setNoteId] = useState(null);

  useEffect(() => {
    const resizer = resizerRef.current;
    const sidebar = sidebarRef.current;

    if (resizer && sidebar) {
      resizeWidth(resizer, sidebar);
    }

    // setNoteData(data);
  }, []);

  const updateNote = async () => {
    try {
      const options = {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Content: content,
        }),
      };
      const response = await fetch(`http://localhost:3000/notes/${noteId}`, options);
      console.log('Update happened');
    } catch (error) {
      console.error('Error updating note:', error);
    }
  };

  const updateContent = (newContent) => {
    setContent(newContent);
    getAllNotesByFolder(folderId);
  };

  return (
    <div className="folderSideBar" ref={sidebarRef}>
      <div className="resizer" ref={resizerRef}></div>
      <ul className="sidebar-menu">
        {data &&
          data.map((note) => <NoteItem key={note._id} note={note} setContent={setContent} setNoteId={setNoteId} />)}
      </ul>
      {noteId && (
        <RichTextEditor
          key={noteId}
          content={content}
          setContent={setContent}
          id={noteId}
          updateNote={updateNote}
          updateContent={updateContent}
        />
      )}
    </div>
  );
};

export default NoteSideBar;

