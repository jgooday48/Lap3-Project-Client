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
      
        <div className="form-input" >
          <h2 className='title1'>Title:</h2>
          <input className="form-control titleInput"value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter a title for the note'/> 
        </div>
          <div className="form-input">
          <label className='switch'>
           <p id="important"> Important?</p>
            <input type="checkbox" checked={isImportant} onChange={(e) => setIsImportant(e.target.checked)} />
            <span className="slider round"></span>
            {" "}
           
          </label>
        </div>
      
      </section>
      <div  className="form-input" id="textEditor">
        <JoditEditor config={editorConfig} value={content} onChange={(val) => setContent(val)}/>
            <button className='btn btn-primary' id='saveBtn'>Save</button>
      </div>
    </form>
  )
}

export default NoteTemplate
