import React from 'react'
import './index.css'
import { useState } from 'react';
import { useNavigate } from 'react-router';

const NoteSection = ({ notesData, folderId }) => {
  console.log("notesData:  ", notesData);
  const [searchNote, setSearchNote] = useState("");
  const navigate = useNavigate();

  const goToNotesPage = (noteId) => {
    navigate('/note/' + noteId);
  };

  const goToCreatePage = () => {
    navigate('/createNote/' + folderId);
  };

  // Filter notes based on the searchNote value
  const filteredNotes = notesData.filter((note) =>
    note.Name.toLowerCase().includes(searchNote.toLowerCase())
  );
  
  const stripHtmlTags = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    const paragraphs = doc.body.getElementsByTagName('p');
  

    if (paragraphs.length > 0) {
      return paragraphs[0].textContent || '';
    }
  

    return doc.body.textContent || '';
  };

  
  return (
    <section className="notes-section">
      <div>
        <h2>All notes</h2>
      </div>
      {notesData.length> 0 && 
        <div className="notes-input">
          <input
            value={searchNote}
            type="text"
            onChange={(e) => setSearchNote(e.target.value)}
            placeholder="Search notes"
          />
          <button onClick={goToCreatePage}>+</button>
        </div>
      }
      <div className="all-notes">
        {filteredNotes.map((note) => (
          <div
            key={note._id}
            className="note-card"
            onClick={() => goToNotesPage(note._id)}
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            <h2>{note.Name}</h2>
            <p>{stripHtmlTags(note.Content)}</p>
            <p>
              {new Date(note.updatedAt).toLocaleString('en-UK', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
              })}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};



export default NoteSection