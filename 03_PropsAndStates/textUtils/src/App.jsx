import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import { useState } from 'react'
import NavBar from './components/NavBar'
import TextForm from './components/TextForm'
import Root from './Root'
import About from './components/About'

function App() {

  const [mode,setMode] = useState("light")
  const [openAlert,setOpenAlert] = useState(null)

  const [extraDarkMode,setExtraDarkMode] = useState("dark")

  const handleMode =()=>{
    if(mode==="light"){
      setMode('dark')
      handleAlert("dark mode enabled","success")
    }else{
      setMode('light')
      handleAlert("dark mode disabled","success")
    }
  }

  const handleAlert=(message,type)=>{
    setOpenAlert({
       msg:message,
       type:type
    })

    setTimeout(()=>{
      setOpenAlert(null)
    },1500)
  }

  const handleExtraDark=(e)=>{
    setExtraDarkMode(e.target.value)
    if(e.target.value === "dark"){
      handleAlert("drak mode enabled","success")
    }else if(e.target.value === "#696969"){
      handleAlert("dim grey mode enabled","success")
    }else{
      handleAlert("slate blue mode enabled","success")
    }
  }
  

    const router = createBrowserRouter([
       {
        path:"/",
        element:<Root   enableMode={mode} 
        handleMode={handleMode} 
        handleExtraDark={handleExtraDark}  
        extraDarkMode={extraDarkMode}
        about="about TextUtils"/>,
        children:[
          {
            path:"",
            element: <TextForm 
            heading="Text Convertor" 
            enableMode={mode} 
            handleAlert={handleAlert} 
            openAlert={openAlert}/>
          },
          {
            path:"about",
            element:<About aboutHeader="About"></About>
          }
        ]
       }
    ])

  return (
    
    <>
      {/* <NavBar title="TextUtils" about="about TextUtils"></NavBar> */}
      {/* <NavBar about="about TextUtils"></NavBar> */}
      {/* <NavBar enableMode={mode} handleMode={handleMode} handleExtraDark={handleExtraDark}></NavBar>
      <div className="container-fluid" style={{backgroundColor:`${mode==="light"?"white":extraDarkMode==="dark"?"black":extraDarkMode}`,height:"100vh",color:`${mode==='light'?'black':'white'}`}}>
      <TextForm heading="Text Convertor" enableMode={mode} handleAlert={handleAlert} openAlert={openAlert}></TextForm>

      </div> */}
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
