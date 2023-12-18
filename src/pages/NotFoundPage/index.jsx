import React from 'react'
import { Link } from 'react-router-dom';
import './notfound.css'
const NotFoundPage = () => {
  return (
    <>
        <h1 class="head">404 Page not found</h1>
        <h3 class="head"><Link to="/">Return Home</Link></h3>
    </>
  )
}

export default NotFoundPage
