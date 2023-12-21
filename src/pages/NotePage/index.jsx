import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { NoteTemplate } from '../../components'
import './index.css'
import axios from 'axios';
import { toast } from 'react-toastify'



const NotePage = () => {
  const { noteId } = useParams()
    const [name, setName] = useState()
  const [content, setContent] = useState()
  const { folderId } = useParams()
  const navigate = useNavigate()
  const [isImportant, setIsImportant] = useState(false)
  let userId = "6581c22f67184ef3425c6b08"


  useEffect(() => {
    getANote()
  }, [])
    

  const getANote = async() => {
      await   fetch(`http://localhost:3000/notes/${noteId}`)
          .then(res => res.json())
          .then(data => { console.log(data)
            setContent(data?.Content)
            setIsImportant(data?.IsImportant)
            setName(data?.Name)

          })
          .catch(e => console.log(e))
  }



  const updateNote = async (e) => {
  e.preventDefault()
  try {
    const response = await axios.patch(
      `http://localhost:3000/notes/${noteId}`,
      {
        Content: content,
        Name: name,
        IsImportant: isImportant,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
      toast.success(`Note updated successfully`, {
        autoClose: 2000
      })

    console.log('Update happened');
  } catch (error) {
    console.error('Error updating note:', error);
  }

  };
  
  const deleteNote = async () => {
    // Show a confirmation alert
    const isConfirmed = window.confirm("Are you sure you want to delete the file?");

    if (isConfirmed) {
      try {
        // Send the DELETE request
        await axios.delete(`http://localhost:3000/notes/${noteId}`);
        
        // Navigate to the "/folders" route
      navigate("/folders");
      } catch (error) {
        // Handle errors from the delete request
        console.error('Error deleting note:', error);
      }
    }
  }

  return (
    <div className="note-container">
      <div className='wholeForm'>
        <section className='optionSection'>
          <div>
            <button className='formBtns' id="backBtn" onClick={() => navigate("/folders")}>&larr; Go back</button>
          </div>
          <div>
            <button className='formBtns' id="deleteBtn" onClick={() => deleteNote()}><i className="fa fa-trash-o"></i></button>
          </div>
        </section>
        <div>
          <NoteTemplate name={name} setName={setName} content={content} setContent={setContent} folderId={folderId} isImportant={isImportant} setIsImportant={setIsImportant} handleSubmit={updateNote} />
        </div>
      </div>
      
    </div>
  )
}

export default NotePage
