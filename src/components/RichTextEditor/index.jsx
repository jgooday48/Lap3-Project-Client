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

const RichTextEditor = ({ content, setContent, id }) => {
 

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


    const [message, setMessage] = useState('')


    // const createNewNote = () => {
    //                 fetch('http://localhost:3000/notes', {
    //             method: 'POST',
    //             body: JSON.stringify({Title: "Test", Content: content}),
    //             headers: {
    //                 'Content-type': 'application/json; charset=UTF-8',
    //                 // 'Authorization': `Bearer ${user.token}`
    //             },
    //         })
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setMessage('Content added successfully.');
    //             setTimeout(() => {
    //                 setMessage('')
    //             }, 5000)
    //         })
    //         .catch((err) => {
    //             console.log(err.message);
    //              if ( err.response.status == 409) {
    //             console.log("409 Conflict error received. Calling updateMethod()...");
    //          updateNote();
    //         } 
    //       setMessage('There was a problem in creating your note.');
    //             setTimeout(() => {
    //                 setMessage('')
    //             }, 5000)
    //         });
    // }

    // async function updateNote(){

    //       const options = {
    //         method: "PATCH",
    //           headers: {
    //               'Content-Type': 'application/json',
            
    //             //   'Authorization': `Bearer ${user.token}`
    //           },
         
    //         body: JSON.stringify({
    //             Content: content
    //         })
    //     }
    //    const response = await fetch(`http://localhost:3000/notes/${id}`, options)
    //     const data = await response.json();
    //     // setContent(data?.Content)

    // }
    

    async function updateNote() {
        try {
            const options = {
            method: "PATCH",
              headers: {
                  'Content-Type': 'application/json',
            
                //   'Authorization': `Bearer ${user.token}`
              },
         
            body: JSON.stringify({
                Content: content
            })
        }
            const response = await fetch(`http://localhost:3000/notes/${id}`, options);
            console.log("update happpend")
        const data = await response.json();
        setContent(content);
    } catch (error) {
        console.error("Error updating note:", error);
    }
}



    const handleContentChange = (args) => {
         setContent(args.value);
    }


    return (
        <div className="editor">
            <RichTextEditorComponent key={id}  toolbarSettings={customToolbar} height={1000} change={ handleContentChange} value={content}>
            
                    <Inject services={[Toolbar, Link, Image, HtmlEditor, FileManager, QuickToolbar]}></Inject>
               
    
            
            </RichTextEditorComponent>
              <button onClick={updateNote}>Save to Backend</button>
        </div>
    
    )
}

export default RichTextEditor