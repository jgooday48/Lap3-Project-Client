

import React,{ useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import "bootstrap/dist/css/bootstrap.min.css";

import { NavBar } from './Layout'
import PrivateRoute from './components/PrivateRoute';

import * as Pages from './pages'
import { FolderDataProvider } from './context/FolderDataContext';


function App() {



  return (
    <>

      <ToastContainer />
      <FolderDataProvider>
    <Routes>
    
      <Route path="/" element={<NavBar />}>
        <Route path="/" element={<Pages.Home />}/>
        <Route path="/login" element={<Pages.Login />}/>
          <Route path="/register" element={<Pages.SignUp />} />
        
            <Route path="/folders" element={<Pages.FolderPage />} />
            <Route path="/createNote/:folderId" element={<Pages.CreateNote />} />
            <Route path="/note/:noteId" element={<Pages.NotePage/>}/>
  
        {/* Private routes */}
        <Route path="" element={<PrivateRoute />}>
          <Route path="/profile" element={<Pages.Profile />}/>

          {/* <Route path="/folders" element={<Pages.FolderPage />} />
          <Route path="/createNote/:folderId" element={<Pages.CreateNote />} />
          <Route path="/note/:noteId" element={<Pages.NotePage/>}/> */}

          
        </Route>
        <Route path="*" element={<Pages.NotFoundPage />} />

        </Route>


        </Routes>
        </FolderDataProvider>
    

    </>

  )
}

export default App
