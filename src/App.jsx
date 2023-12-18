import React,{ useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Home, Login } from './pages'
import './App.css'
import RichTextEditor from './components/RichTextEditor'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home />
     {/* <RichTextEditor/> */}
    </>
  )
}

export default App
