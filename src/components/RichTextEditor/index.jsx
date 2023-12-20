import React, { useState } from 'react'
import './index.css'
import JoditEditor from 'jodit-react';
import { editorConfig } from './EditorConfig.';

const RichTextEditor = ({ content, setContent, updateNote, updateContent }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    updateNote();
    updateContent(content);
  };

  return (
    <div className="editor" style={{ textAlign: 'left' }}>
      <form onSubmit={handleSubmit}>
        <JoditEditor config={editorConfig} value={content} onChange={(val) => setContent(val)} />
        <input type="submit" value="Save to backend" />
      </form>
    </div>
  );
};

export default RichTextEditor;