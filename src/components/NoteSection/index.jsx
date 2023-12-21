import React, { useEffect } from 'react';
import './index.css';
import { useState } from 'react';
import { useNavigate } from 'react-router';

const NoteSection = ({ notesData, folderId, folderName }) => {
  console.log("notesData:  ", notesData);
  const [searchNote, setSearchNote] = useState("");
  const navigate = useNavigate();
  const [importantNotes, setImportantNotes] = useState([])

  // Filter notes based on the searchNote value
  const filteredNotes = notesData.filter((note) =>
    note.Name.toLowerCase().includes(searchNote.toLowerCase())
  );

  let userId = '6581c22f67184ef3425c6b08'


  const goToNotesPage = (noteId) => {
    navigate('/note/' + noteId);
  };

  const goToCreatePage = () => {
    navigate('/createNote/' + folderId);
  };


  const getAllNotesByUser = async () => {
    const response = await fetch(`http://localhost:3000/notes/user/${userId}`)
    const data = await response.json()
    if (data) {
      setImportantNotes(data.filter(note => note.IsImportant))
    }
  }

  useEffect(() => {
    getAllNotesByUser()
  }, [importantNotes])


  
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
      {folderName.length > 0 ? (
        <div>
          <h2>Notes for {folderName} </h2>
        </div>
      ) : (
        <div>
            <h2>All Important Notes</h2>
            <div className="all-notes">
          {importantNotes.length > 0 && filteredNotes.length === 0 &&(
            importantNotes.map((note) => (
              <div
                key={note._id}
                className="note-card"
                onClick={() => goToNotesPage(note._id)}
                style={{ display: 'flex', flexDirection: 'column' }}
              >
                <h2>{note.Name}</h2>
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
            ))
          )}
            </div>
            </div>
      )}
      {notesData.length > 0 && (
        <div className="notes-input">
          <input
            value={searchNote}
            type="text"
            onChange={(e) => setSearchNote(e.target.value)}
            placeholder="Search notes"
          />
          <button onClick={goToCreatePage}>+</button>
        </div>
      )}
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

