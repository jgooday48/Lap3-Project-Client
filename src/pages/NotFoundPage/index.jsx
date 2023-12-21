import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import './notfound.css'
import notFoundGif from "../../assets/404.gif"

const NotFoundPage = () => {
  return (
    <div className='notfound'>
      {/* <h1 className="head">404 Page not found</h1> */}
         <NavLink to="/" id="return-home"><h1 style={{fontFamily: 'Times New Roman '}}> &larr; Return Home</h1></NavLink>
        <div className='gifContainer'>
        <img src={notFoundGif} alt="404 Page not found" className='head' id="notFoundGif"></img>
        </div>

    </div>
  )
}

export default NotFoundPage
