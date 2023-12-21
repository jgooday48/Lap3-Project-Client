import React, { useEffect } from 'react'
import './index.css'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import ShowNotes from '../ShowNotes'

const NoteSection = ({ notesData, folderId, folderName }) => {
  const [searchNote, setSearchNote] = useState('')
  const navigate = useNavigate()
  const [importantNotes, setImportantNotes] = useState([])




  const filteredNotes = (data, search) => {
   return data.filter(note =>  note.Name.toLowerCase().includes(search.toLowerCase()))

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

        </div>

          {importantNotes.length > 0  && notesData.length == 0 && (
            <div className='all-notes'>
              <ShowNotes notes={filteredNotes(importantNotes, searchNote)} />
            </div>
          )}
        </div>
      )}
      {notesData.length > 0 && (
        <div className='notes-input'>
          <input
            value={searchNote}
            type='text'
            onChange={e => setSearchNote(e.target.value)}
            placeholder='Search notes'
          />
          <button onClick={goToCreatePage}>+</button>
        </div>
      )}
      <ShowNotes notes={filteredNotes(notesData, searchNote)} />
    </section>
  )
}

export default NoteSection
