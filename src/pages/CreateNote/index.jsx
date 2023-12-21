import React, { useState } from 'react'
import { NoteTemplate } from '../../components'
import { useNavigate, useParams } from 'react-router'
import './index.css'
import axios from 'axios';

const CreateNote = () => {
  const [name, setName] = useState()
  const [content, setContent] = useState()
  const { folderId } = useParams()
  const navigate = useNavigate()
  const [isImportant, setIsImportant] = useState(false)

  let userId = "6581c22f67184ef3425c6b08"

  const createNewNote = () => {
    axios.post('http://localhost:3000/notes', {
      Name: name,
      Content: content,
      User: userId,
      Folder: folderId,
      IsImportant: isImportant,
    }, {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        // 'Authorization': `Bearer ${user.token}`
      },
    })
      .then((response) => {
        console.log(response.status); // Check the response status
        console.log(response.data); // Log the response data for debugging
     
      })
      .catch((error) => {
        console.error(error.message);
      });
    
       navigate('/folders');
  };


  return (
    <div className="create-container">
      <div>
        <button onClick={() => navigate("/folders")}>&larr; Go back</button>
      </div>
      <div>
        <h2>NOTE DETAILS</h2>

      </div>
      <div>
        <NoteTemplate name={name} setName={setName} content={content} setContent={setContent} folderId={folderId} isImportant={isImportant} setIsImportant={setIsImportant} handleSubmit={createNewNote} />
      </div>
    </div>
  )
}

export default CreateNote
