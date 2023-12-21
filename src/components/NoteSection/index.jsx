import React, { useEffect } from 'react'
import './index.css'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import ShowNotes from '../ShowNotes'

const NoteSection = ({ notesData, folderId, folderName }) => {
  const [searchNote, setSearchNote] = useState('')
  const navigate = useNavigate()
  const [importantNotes, setImportantNotes] = useState([])
 const [sortOrder, setSortOrder] = useState('desc');


  const filteredNotes = (data, search) => {
     const filtered = data.filter(note => note.Name.toLowerCase().includes(search.toLowerCase()))
       return filtered.sort((a, b) => {
      const dateA = new Date(a.updatedAt);
      const dateB = new Date(b.updatedAt);

      return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
    });

  }

  let userId = '6581c22f67184ef3425c6b08'

  const goToCreatePage = () => {
    navigate('/createNote/' + folderId)
  }

  const getAllNotesByUser = async () => {
    const response = await fetch(`http://localhost:3000/notes/user/${userId}`)
    const data = await response.json()
    if (data) {
      setImportantNotes(data.filter(note => note.IsImportant))
    }
  }

  useEffect(() => {
    getAllNotesByUser()
    console.log("important Notes, ", importantNotes)
  }, [importantNotes])
  // const toggleSortOrder = () => {
  //   setSortOrder(order => (order === 'asc' ? 'desc' : 'asc'));
  // };

  const handleSortChange = e => {
    setSortOrder(e.target.value);
  };

  return (
    <section className='notes-section'>
      {folderName.length > 0 ? (
        <div>
          <h2>Notes for {folderName} </h2>
        </div>
      ) : (
        <div>
            <h2>All Important Notes</h2>
              <div className='notes-input'>
          <input
            value={searchNote}
            type='text'
            onChange={e => setSearchNote(e.target.value)}
            placeholder='Search notes'
              />
                <label htmlFor='sortOrder'>Sort Order:</label>
        <select id='sortOrder' value={sortOrder} onChange={handleSortChange}>
          <option value='asc'>Ascending</option>
          <option value='desc'>Descending</option>
        </select>

        </div>

          {importantNotes.length > 0  && notesData.length == 0 && (
            <div className='all-notes'>
              <ShowNotes notes={filteredNotes(importantNotes, searchNote)} />
            </div>
          )}
        </div>
      )}
      <div>
      {notesData.length > 0 && (
        <div className='notes-input'>
          <input
            value={searchNote}
            type='text'
            onChange={e => setSearchNote(e.target.value)}
            placeholder='Search notes'
          />
          <select id='sortOrder' value={sortOrder} onChange={handleSortChange}>
          <option value='asc'>Ascending</option>
          <option value='desc'>Descending</option>
        </select>
        </div>
      )}
  
        <button onClick={goToCreatePage}>+</button>
      </div>
      <ShowNotes notes={filteredNotes(notesData, searchNote)} />
    </section>
  )
}

export default NoteSection
