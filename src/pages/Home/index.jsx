import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FolderSideBar, RichTextEditor } from '../../components'
import { NavLink} from 'react-router-dom'
import './Home.css'
import logo from "../../../note.png"

const HomePage = () => {
  const { userInfo } =  useSelector(state => state.auth)

  return (
    <>
    {!userInfo ? (
      <div className="homepage">
           {/* <FolderSideBar />
          <FolderSideBar/> 
          
              <RichTextEditor /> */}

             
            <p>Welcome to the notes app!</p>
            <div className={"homeLogo"}>
              <img src={logo} alt="note logo" className='homeLogo1'></img>
            </div>
            <ul>
              <button className="button-4" role="button" id='homepageBtn1'>
                  <NavLink to="/login">Login</NavLink>
              </button>
              <button className="button-4" role="button" id='homepageBtn2'>
                  <NavLink to="/register">Sign Up</NavLink>
              </button>
            </ul>
      </div>
    
    ) : (    
    <div className='homepage'>
      <h3 id="thanksMessage">Thanks for joining us! This is our home page.</h3>
      <div className={"homeLogo"}>
        <img src={logo} alt="note logo" className='homeLogo1'></img>
      </div>
    </div>

    )}
    </>
  )
}

export default HomePage

