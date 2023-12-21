import React, { useEffect } from 'react'
import './index.css'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import ShowNotes from '../ShowNotes'
import NotesInput from '../NotesInput'
import { useFolderData } from '../../context/FolderDataContext'

const NoteSection = ({ notesData, folderId, folderName }) => {
  const [searchNote, setSearchNote] = useState('')
  const navigate = useNavigate()
  const [importantNotes, setImportantNotes] = useState([])
  const [sortOrder, setSortOrder] = useState('desc');
    const {userId} = useFolderData()
 


  const filteredNotes = (data, search) => {
    const filtered = data.filter(note => note.Name && note.Name.toLowerCase().includes(search.toLowerCase()))
    return filtered.sort((a, b) => {
      const dateA = new Date(a.updatedAt);
      const dateB = new Date(b.updatedAt);

      return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
    });
  }




  const goToCreatePage = () => {
    navigate('/createNote/' + folderId)
  }

  const getAllNotesByUser = async () => {
    const response = await fetch(`https://reddy-server-33.onrender.com/notes/user/${userId}`)
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
                <div>
        {notesData.length > 0 ? (

          <NotesInput searchNote={searchNote} setSearchNote={setSearchNote} sortOrder={sortOrder} setSortOrder={setSortOrder} goToCreatePage={goToCreatePage} eachFolder={true} />
           
        ): (
         <button className="btn btn-warning" onClick={goToCreatePage}>+ Create a new note</button>
          )}
        </div>

        </div>
      ) : (
        <div>
          <h2>All Important Notes</h2>
            <NotesInput searchNote={searchNote} setSearchNote={setSearchNote} sortOrder={sortOrder} setSortOrder={setSortOrder} goToCreatePage={goToCreatePage} eachFolder={false} />
          
          {importantNotes.length > 0 && notesData.length == 0 && (
            <div className='all-notes'>
              <ShowNotes notes={filteredNotes(importantNotes, searchNote)} />
            </div>
          )}
        </div>
      )}
      <div>

  

      </div>
      <ShowNotes notes={filteredNotes(notesData, searchNote)} />
    </section>
  )
}

export default NoteSection
