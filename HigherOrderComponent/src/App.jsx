import { useState } from 'react'
import './App.css'
import ClickCounter from './components/ClickCounter'
import HoverCounter from './components/HoverCounter'
// import HigherOrderComponent from './components/HigherOrderComponent'
function App() {
  const [count, setCount] = useState(0)
  console.log("app");
  return (
    <>
      <ClickCounter/> {/* this is exactly like  {HigherOrderComponent(ClickCounter)()} */}
      <HoverCounter/>
    </>
  )
}

export default App
