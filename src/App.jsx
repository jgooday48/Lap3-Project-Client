

import React,{ useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

import { NavBar } from './Layout'
import PrivateRoute from './components/PrivateRoute';

import * as Pages from './pages'


function App() {



  return (
    <>

    <ToastContainer />
    <Routes>
    
      <Route path="/" element={<NavBar />}>
        <Route path="/" element={<Pages.Home />}/>
        <Route path="/login" element={<Pages.Login />}/>
        <Route path="/register" element={<Pages.SignUp />}/>
        <Route path="/notes" element={<Pages.Notes />}/>
        {/* Private routes */}
        <Route path="" element={<PrivateRoute />}>
          <Route path="/profile" element={<Pages.Profile />}/>
        </Route>
        <Route path="*" element={<Pages.NotFoundPage />} />

        </Route>


    </Routes>

    </>

  )
}

export default App
