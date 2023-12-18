import React from 'react'
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
        ],
        textAlign: 'Left'
    }

    return (
        <div className="editor">
            <RichTextEditorComponent toolbarSettings={customToolbar} height={1000}>
                <Inject services={[Toolbar, Link, Image, HtmlEditor, FileManager, QuickToolbar]}></Inject>
            
                <p>The Rich Text Editor is WYSIWYG ("what you see is what you get") editor useful to create and edit content, and return the valid </p>
                <p><b>Key features:</b></p>
                <ul>
                    <li><p>Provides &lt;IFRAME&gt; and &lt;DIV&gt; modes</p></li>
                    <li><p>Capable of handling markdown editing.</p></li>
                    <li><p>Contains a modular library to load the necessary functionality on demand.</p></li>
                    <li><p>Provides a fully customizable toolbar.</p></li>
                    <li><p>Provides HTML view to edit the source directly for developers.</p></li>
                    <li><p>Supports third-party library integration.</p></li>
                    <li><p>Allows preview of modified content before saving it.</p></li>
                    <li><p>Handles images, hyperlinks, video, hyperlinks, uploads, etc.</p></li>
                    </ul>
            </RichTextEditorComponent>
        </div>
    
    )
}

export default RichTextEditor