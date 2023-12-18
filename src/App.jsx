import React, { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import RichTextEditor from './components/RichTextEditor'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <RichTextEditor/>
    </>
  )
}

export default App
