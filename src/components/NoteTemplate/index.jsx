import React from 'react'
import { editorConfig } from './EditorConfig.'
import './index.css'
import JoditEditor from 'jodit-react';

const NoteTemplate = (props) => {
    
    const { name, setName, content, setContent, folderId ,isImportant, setIsImportant, handleSubmit} = props
    
  return (
      <form action="" onSubmit={handleSubmit}>
          <div className="form-input" >
              <h2>Title:</h2>
              <input value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter a title for the note'/> 
          </div>
          <div  className="form-input">
               <JoditEditor config={editorConfig} value={content} onChange={(val) => setContent(val)} />
          </div>
              <div className="form-input">
        <label>
          <input
            type="checkbox"
            checked={isImportant}
            onChange={(e) => setIsImportant(e.target.checked)}
          />
          Important?
        </label>
      </div>
          <div>
              <button>Save</button>
          </div>
          
    </form>
  )
}

export default NoteTemplate