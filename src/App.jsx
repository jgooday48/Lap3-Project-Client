import React,{ useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { NavBar } from './Layout'

import * as Pages from './pages'
import './App.css'
import RichTextEditor from './components/RichTextEditor'

function App() {


  return (
    <>
    <Routes>
      
      <Route path="/" element={<NavBar />}>

        <Route path="/" element={<Pages.Home />}/>
        <Route path="/login" element={<Pages.Login />}/>
        <Route path="/register" element={<Pages.SignUp />}/>
        <Route path="*" element={<h1>{location.pathname} page does not exist</h1>} />

      </Route>


    </Routes>
    {/* <Home /> */}
     {/* <RichTextEditor/> */}
    </>
  )
}

export default App
