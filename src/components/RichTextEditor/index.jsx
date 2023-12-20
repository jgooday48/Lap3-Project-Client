import React, { useState } from 'react'
import './index.css'
import FolderSideBar from '../FolderSideBar'
import { useRef, useEffect } from 'react'
import JoditEditor from 'jodit-react'
import { editorConfig } from './EditorConfig.'

const RichTextEditor = ({ content, setContent, id, updateNote, updateContent }) => {
 


    const [message, setMessage] = useState(content)


    const handleSubmit = (e) => {
        e.preventDefault()
        updateNote()

     
        updateContent(message)
        setMessage(content)
    }


 console.log("message line 20: ", message)

    return (
        <div className="editor" style={{ textAlign: 'left' }}>
           <form onSubmit={handleSubmit}>
            <JoditEditor config={editorConfig} value={message} onChange={(val) => setContent(val)} />
                {/* <div dangerouslySetInnerHTML={{ __html: content }} ></div>*/}
                <input type="submit" value="Save to backend"/>
            </form>
        
            {/* <button onClick={handleClick}>Save to Backend</button> */}
          
        </div>
    
    )
}

export default RichTextEditor