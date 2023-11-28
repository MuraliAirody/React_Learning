import React from 'react'
import NavBar from './components/NavBar'
import { Outlet } from 'react-router-dom'

export default function Root({ enableMode, handleMode, handleExtraDark, handleAlert, openAlert, extraDarkMode,about }) {
  return (
    <div>
      <NavBar enableMode={enableMode} handleMode={handleMode} handleExtraDark={handleExtraDark} about={about}></NavBar>
      <div className="container-fluid" style={{backgroundColor:`${enableMode==="light"?"white":extraDarkMode==="dark"?"black":extraDarkMode}`,height:"100vh",color:`${enableMode==='light'?'black':'white'}`}}>
        <Outlet></Outlet>
      </div>
    </div>
  )
}
