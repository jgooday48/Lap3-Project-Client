import React, { useEffect, useState, useRef} from 'react'
import './index.css'
import { Sidebar, Menu,  MenuItem} from 'react-pro-sidebar'
import './index.css';

const FolderSideBar = () => {
  const resizerRef = useRef(null);
  const sidebarRef = useRef(null);
  const isFolder = true; 

  useEffect(() => {
    const resizer = resizerRef.current;
    const sidebar = sidebarRef.current;

    if (resizer && sidebar) {
      initResizeFn(resizer, sidebar);
    }
  }, []);

  function initResizeFn(resizer, sidebar) {
    let x, w;

    function rs_mousedownHandler(e) {
      x = e.clientX;

      const sbWidth = window.getComputedStyle(sidebar).width;
      w = parseInt(sbWidth, 10);

      document.addEventListener('mousemove', rs_mousemoveHandler);
      document.addEventListener('mouseup', rs_mouseupHandler);
    }

    function rs_mousemoveHandler(e) {
      const dx = e.clientX - x;

      const cw = w + dx;
      if (cw < 700) {
        sidebar.style.width = `${cw}px`;
      }
    }

    function rs_mouseupHandler() {
      document.removeEventListener('mouseup', rs_mouseupHandler);
      document.removeEventListener('mousemove', rs_mousemoveHandler);
    }

    resizer.addEventListener('mousedown', rs_mousedownHandler);
  }

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