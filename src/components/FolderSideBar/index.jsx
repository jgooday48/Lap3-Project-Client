import React, { useEffect, useState, useRef} from 'react'
import './index.css'
import { Sidebar, Menu,  MenuItem} from 'react-pro-sidebar'
import './index.css';
import { resizeWidth } from '../../utils/WidthChanger';

const FolderSideBar = () => {
  const resizerRef = useRef(null);
  const sidebarRef = useRef(null);
  const isFolder = true; 

  useEffect(() => {
    const resizer = resizerRef.current;
    const sidebar = sidebarRef.current;

    if (resizer && sidebar) {
      resizeWidth(resizer, sidebar);
    }
  }, []);


  return (
    <div className="folderSideBar" ref={sidebarRef}>
      <div className="resizer" ref={resizerRef}></div>
      {isFolder &&(
        <div className="header">
          <h3>La Fosse</h3>
        </div>
      )}
      <ul className="sidebar-menu">
        <li className="menu-item">folder 1</li>
        <li className="menu-item">folder 2</li>
        <li className="menu-item">folder 3</li>
        <li className="menu-item">folder 4</li>
        <li className="menu-item">folder 5</li>
        <li className="menu-item">folder 6</li>
        <li className="menu-item">folder 7</li>
           <li className="menu-item">folder 1</li>
        <li className="menu-item">folder 2</li>
        <li className="menu-item">folder 3</li>
        <li className="menu-item">folder 4</li>
        <li className="menu-item">folder 5</li>
        <li className="menu-item">folder 6</li>
        <li className="menu-item">folder 7</li>
      </ul>
    </div>
  );
};









export default FolderSideBar