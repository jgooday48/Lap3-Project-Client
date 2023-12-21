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
    const filtered = data.filter(note => note.Name && note.Name.toLowerCase().includes(search.toLowerCase()))
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
              className="form-control"
              onChange={e => setSearchNote(e.target.value)}
              placeholder='Search notes'
              style={{ width: '300px' }}
            />

            {/* <select id='sortOrder' className="dropdown" value={sortOrder} onChange={handleSortChange}>
              <option value='asc'>Ascending</option>
              <option value='desc'>Descending</option>
            </select> */}
            <div className="dropdown">
                <b htmlFor='sortOrder'>Sort Order:</b>&nbsp;
              <button className="btn btn-secondary dropdown-toggle" type="button" id="sortOrderDropdown" data-bs-toggle="dropdown" aria-expanded="false">

                {sortOrder === 'asc' ? 'Ascending' : 'Descending'}
              </button>
              <ul className="dropdown-menu" aria-labelledby="sortOrderDropdown">
                <li><a className="dropdown-item" href="#" onClick={() => setSortOrder('asc')}>Ascending</a></li>
                <li><a className="dropdown-item" href="#" onClick={() => setSortOrder('desc')}>Descending</a></li>
              </ul>
            </div>

          </div>

          {importantNotes.length > 0 && notesData.length == 0 && (
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
              className="form-control"
              onChange={e => setSearchNote(e.target.value)}
              placeholder='Search notes'
            />
            {/* <select id='sortOrder' value={sortOrder} onChange={handleSortChange}>
              <option value='asc'>Ascending</option>
              <option value='desc'>Descending</option>
            </select> */}
            <div className="dropdown">
              <b htmlFor='sortOrder'>Sort Order:</b>&nbsp;
              <button className="btn btn-secondary dropdown-toggle" type="button" id="sortOrderDropdown" data-bs-toggle="dropdown" aria-expanded="false">

                {sortOrder === 'asc' ? 'Ascending' : 'Descending'}
              </button>
              <ul className="dropdown-menu" aria-labelledby="sortOrderDropdown">
                <li><a className="dropdown-item" href="#" onClick={() => setSortOrder('asc')}>Ascending</a></li>
                <li><a className="dropdown-item" href="#" onClick={() => setSortOrder('desc')}>Descending</a></li>
              </ul>
            </div>
              <button className="btn btn-warning" onClick={goToCreatePage}>+ Create a new note</button>
          </div>
        )}

      
      </div>
      <ShowNotes notes={filteredNotes(notesData, searchNote)} />
    </section>
  )
}

export default NoteSection
