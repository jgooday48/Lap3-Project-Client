import React from 'react'
import './index.css'
import { useState } from 'react';
import { useNavigate } from 'react-router';

const NoteSection = ({ notesData, folderId }) => {
  console.log("notesData:  ", notesData);
  const [searchNote, setSearchNote] = useState()
  const navigate = useNavigate()

  
  const goToNotesPage = () => {
    
  }
  const goToCreatePage = () => {
    navigate('/createNote/' + folderId)
  }

  return (
    <section className="notes-section">
      <div>
        <h2>All notes</h2>
      </div>
      <div className="notes-input">
        <input value={searchNote} type="text" onChange={(e) => setSearchNote(e.target.value)} placeholder='Search notes' />
        <button onClick={goToCreatePage}>+</button>
      </div>
      <div className="all-notes">
        {notesData &&
          notesData.map((note) => (
            <div key={note._id} className="note-card" onClick={() => goToNotesPage(note._id)}>
              <h2>{note.Name}</h2>
            </div>
          ))}
      </div>
    </section>
  );
};


export default NoteSection