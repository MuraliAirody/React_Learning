
import { useEffect, useState } from 'react'
import './App.css'
import { ThemeContextProvider } from './context/Theme'
import ThemeBtn from './component/ThemeBtn'
import Card from './component/Card'

function App() {
  
  const [theme,setTheme] = useState('light')

  const themeToggele=()=>{
    if(theme==="light"){
      console.log("dark");
      setTheme("dark")
    }else{
      console.log("light");

      setTheme("light")
    }
  }

  useEffect(()=>{
    const cardId=document.querySelector("#card").classList
    const startId = document.querySelectorAll("#star svg")

    console.log(startId);
    
    if(theme==="light"){
      cardId.remove('dark:bg-gray-800','text-white')
      cardId.add('bg-gray-300','text-black')

      startId.forEach((svg)=>{
        svg.classList.remove('text-yellow-300')
        svg.classList.add('text-yellow-600')
      })
      
      
    }else{
      cardId.add('dark:bg-gray-800','text-white')
      cardId.remove('bg-gray-300','text-black')
      
      startId.forEach((svg)=>{
        svg.classList.remove('text-yellow-600')
        svg.classList.add('text-yellow-300')
      })
    }
    
  },[theme])

  return (
    <>
      <ThemeContextProvider value={{theme,themeToggele}}>
        {/* <h1 className='bg-purple-500 p-5 text-2xl font-extrabold'>Hello React</h1> */}
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full border-r-4">

            <div className="w-full max-w-sm mx-auto">
              {/* Card */}
              <Card />
            </div>

            <div className="w-full max-w-sm mx-auto flex justify-center mt-4">
              {/* Theme btn */}
              <ThemeBtn />
            </div>

          </div>
        </div>
      </ThemeContextProvider>

    </>
  )
}

export default App
