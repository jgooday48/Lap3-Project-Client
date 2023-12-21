import React from 'react'
import { editorConfig } from './EditorConfig.'
import './index.css'
import JoditEditor from 'jodit-react';

const NoteTemplate = (props) => {
    
    const { name, setName, content, setContent, folderId ,isImportant, setIsImportant, handleSubmit} = props
    console.log(isImportant)
    
  return (
    <form action="" onSubmit={handleSubmit}>
      <section className='optionSection2'>
        <div className="form-input">
          <label className='checkBx'>
            <input type="checkbox" checked={isImportant} onChange={(e) => setIsImportant(e.target.checked)}/>
            {" "}
            Important?
          </label>
        </div>
        <div className="form-input" >
          <h2 className='title1'>Title:</h2>
          <input className="titleInput"value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter a title for the note'/> 
        </div>
        <button className='formBtns' id='saveBtn'>Save</button>
      </section>
      <div  className="form-input" id="textEditor">
        <JoditEditor config={editorConfig} value={content} onChange={(val) => setContent(val)} />
      </div>
    </form>
  )
}

export default NoteTemplate
