import React,{ useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

import { NavBar } from './Layout'
import PrivateRoute from './components/PrivateRoute';

import * as Pages from './pages'
import './App.css'
import RichTextEditor from './components/RichTextEditor'

function App() {


  return (
    <>
    <ToastContainer />
    <Routes>
    
      <Route path="/" element={<NavBar />}>
        <Route path="/" element={<Pages.Home />}/>
        <Route path="/login" element={<Pages.Login />}/>
        <Route path="/register" element={<Pages.SignUp />}/>
        {/* Private routes */}
        <Route path="" element={<PrivateRoute />}>
          <Route path="/profile" element={<Pages.Profile />}/>
        </Route>
        <Route path="*" element={<h1>{location.pathname} page does not exist</h1>} />

      </Route>


    </Routes>
    {/* <Home /> */}
     {/* <RichTextEditor/> */}
    </> 
  )
}

export default App
