import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [bgColor, setBgColor] = useState({
    backgroundColor: 'white'
  })
  const [switchbgColor,setSwitchBgColor] = useState({
    border:"1px solid blue"
  })

const bgChange = ()=>{
  if(bgColor.backgroundColor==='white'){
    setBgColor({
      backgroundColor:"black",
    })
    setSwitchBgColor({
      border:"1px solid blue"
    })
  }else{
    setBgColor({
      backgroundColor:"white"
    })
    setSwitchBgColor({
      border:"1px solid blue"

    })
  }
}



  return (
    <>
      <div className="container-fluid w-100 vh-100 d-flex align-items-center justify-content-center" style={bgColor}>
        <div className="">
          <div className="form-check form-switch">
            <input onChange={bgChange} className="form-check-input" style={{width:'100px',height:'50px',...switchbgColor}} type="checkbox" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
