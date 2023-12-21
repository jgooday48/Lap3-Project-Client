import React, { useEffect, useState, useRef } from "react";
import "./index.css";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { resizeWidth } from "../../utils/WidthChanger";
import { toast } from "react-toastify";
import NoteSection from "../NoteSection";
import axios from "axios";
import { useFolderData } from "../../context/FolderDataContext";
import Swal from 'sweetalert2';


const FolderSideBar = ({ data }) => {
  const resizerRef = useRef(null);
  const sidebarRef = useRef(null);
  const [notesData, setNotesData] = useState([]);
  const [folderId, setFolderId] = useState();
  const [add, setAdd] = useState(false);
  const [folderName, setFolderName] = useState("");
  const [name, setName] = useState("");
  let userId = "6581c22f67184ef3425c6b08";
    const [activeFolder, setActiveFolder] = useState(null);
  

  useEffect(() => {
    const resizer = resizerRef.current;
    const sidebar = sidebarRef.current;

    if (resizer && sidebar) {
      resizeWidth(resizer, sidebar);
    }
  }, []);

  const getAllNotesByFolder = async (folderId) => {
    const api = `http://localhost:3000/notes/folder/${folderId}`;
    const response = await fetch(api);
    const data = await response.json();
    setNotesData(data);
    setFolderId(folderId);
  };

  async function createFolder() {
    try {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",

          //   'Authorization': `Bearer ${user.token}`
        },
        body: JSON.stringify({
          Name: folderName,
          User: userId,
        }),
      };
      const response = await fetch(`http://localhost:3000/folders`, options);
      console.log("update happpend");

      window.location.reload();
    } catch (error) {
      console.error("Error updating note:", error);
    }
  }

  const addFolder = () => {
    if (folderName.length > 0) {
      createFolder();
    } else {
      toast.error(`Folder name cannot be empty`, {
        autoClose: 2000,
      });
    }
  };

const deleteFolder = async (folderId) => {
  const result = await Swal.fire({
    title: 'Are you sure?',
    text: 'You won\'t be able to revert this!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  });

  if (result.isConfirmed) {
    try {
      // Send the DELETE request
      await axios.delete(`http://localhost:3000/folders/${folderId}`);
      window.location.reload();
    } catch (error) {
      // Handle errors from the delete request
      console.error("Error deleting note:", error);
    }
  }
};




  return (
    <div className="folderSideBar">
      <div className="sidebar" ref={sidebarRef}>
        <div className="resizer" ref={resizerRef}></div>
        <div className="header">
          {/* <h3>La Fosse</h3> */}

          <input
            type="text"
            value={folderName}
            className="form-control"
            onChange={(e) => setFolderName(e.target.value)}
            placeholder="Create a new folder"
          />
          <button className="addBtn" onClick={addFolder}>
            Add Folder
          </button>
        </div>
        <ul className="sidebar-menu">
          {data &&
            data.map((folder) => (
              <li
                className={`menu-item ${activeFolder === folder._id ? 'active-folder' : ''}`}
                key={folder._id}
                onClick={() => {
                  getAllNotesByFolder(folder._id);
                  setName(folder.Name);
                  setActiveFolder(folder._id)
                }}
              >
                {folder.Name} &nbsp;
                <button
                  className="deleteBtn"
                  onClick={() => deleteFolder(folder._id)}
                >
                  <i className="fa fa-trash-o" id="trashEmoji"></i>
                </button>
              </li>
            ))}
        </ul>
      </div>

      <div className="notes-section">
        <NoteSection
          notesData={notesData}
          folderId={folderId}
          folderName={name}
        />
      </div>
    </div>
  );
};

export default FolderSideBar;
