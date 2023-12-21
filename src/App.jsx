

import React,{ useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

import { NavBar } from './Layout'
import PrivateRoute from './components/PrivateRoute';

import * as Pages from './pages'
import { FolderDataProvider } from './context/FolderDataContext';


const App = () => {
  return (
    <>
      <ToastContainer />

      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route path="/" element={<Pages.Home />} />
          <Route path="/login" element={<Pages.Login />} />
          <Route path="/register" element={<Pages.SignUp />} />
          <Route path="" element={<PrivateRoute />}>
            <Route
              path="/profile"
              element={
                <FolderDataProvider>
                  <Pages.Profile />
                </FolderDataProvider>
              }
            />
            <Route
              path="/folders"
              element={
                <FolderDataProvider>
                  <Pages.FolderPage />
                </FolderDataProvider>
              }
            />
            <Route
              path="/createNote/:folderId"
              element={
                <FolderDataProvider>
                  <Pages.CreateNote />
                </FolderDataProvider>
              }
            />
            <Route
              path="/note/:noteId"
              element={
                <FolderDataProvider>
                  <Pages.NotePage />
                </FolderDataProvider>
              }
            />
          </Route>

          <Route path="*" element={<Pages.NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;

