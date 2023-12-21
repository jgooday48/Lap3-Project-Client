import React, { useState } from 'react'
import { NoteTemplate } from '../../components'
import { useNavigate, useParams } from 'react-router'
import './index.css'
import axios from 'axios';
import { useFolderData } from '../../context/FolderDataContext';

const CreateNote = () => {
  const [name, setName] = useState()
  const [content, setContent] = useState()
  const { folderId } = useParams()
  const navigate = useNavigate()
  const [isImportant, setIsImportant] = useState(false)

  const { userId } = useFolderData()
  

  const createNewNote = () => {
    axios.post('https://reddy-server-33.onrender.com/notes', {
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
      <div className='back'>
        <button className='btn btn-danger' id="back-button" onClick={() => navigate("/folders")}>X Cancel</button>
      </div>
      <div className="note-template">
        <NoteTemplate name={name} setName={setName} content={content} setContent={setContent} folderId={folderId} isImportant={isImportant} setIsImportant={setIsImportant} handleSubmit={createNewNote} />
      </div>
    </div>
  )
}

export default CreateNote
