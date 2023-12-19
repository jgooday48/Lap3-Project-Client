import React, { useState } from 'react'
import {
    HtmlEditor,
    Image,
    Inject,
    Link,
    QuickToolbar,
    RichTextEditorComponent,
    Toolbar,
    FileManager
} from '@syncfusion/ej2-react-richtexteditor'
import './index.css'
import FolderSideBar from '../FolderSideBar'
import { useRef, useEffect } from 'react'

const RichTextEditor = () => {

    const customToolbar = {
        items: [
            'Bold',
            'Italic',
            'Underline',
            'StrikeThrough',
            'FontName',
            'FontSize',
            'FontColor',
            'BackgroundColor',
            'LowerCase',
            'UpperCase',
            '|',
            'Formats',
            'Alignments',
            'OrderedList',
            'UnorderedList',
            'Outdent',
            'Indent',
            '|',
            'CreateLink',
            'Image',
            '|',
            'ClearFormat',
            'Print',
            'SourceCode',
            'FullScreen',
            '|',
            'Undo',
            'Redo'
        ]
    }

    const [content, setContent] = useState('')
    const [message, setMessage] = useState('')


    const handleContentChange = (args) => {
         setContent(args.value);
    }
    
    useEffect(() => {
console.log("content: ", content.toString())
})

    const handleSave = () => {
      
        if (content.length > 0) {
            console.log("inside handleSave")
                fetch('http://localhost:3000/notes', {
                method: 'POST',
                body: JSON.stringify({Title: "Test", Content: content}),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    // 'Authorization': `Bearer ${user.token}`
                },
            })
            .then((res) => res.json())
            .then((data) => {
                setMessage('Content added successfully.');
                setTimeout(() => {
                    setMessage('')
                }, 5000)
            })
            .catch((err) => {
                console.log(err.message);
                setMessage('There was a problem in creating your note.');
                setTimeout(() => {
                    setMessage('')
                }, 5000)
            });
        }
    
    }
    

    const fetchAData = ()

    return (
        <div className="editor">
            <RichTextEditorComponent toolbarSettings={customToolbar} height={1000} change={ handleContentChange}>
            
                    <Inject services={[Toolbar, Link, Image, HtmlEditor, FileManager, QuickToolbar]}></Inject>
               
                
                  {content}
            
            </RichTextEditorComponent>
              <button onClick={handleSave}>Save to Backend</button>
        </div>
    
    )
}

export default RichTextEditor