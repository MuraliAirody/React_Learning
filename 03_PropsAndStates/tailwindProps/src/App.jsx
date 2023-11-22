import { useState } from 'react'

import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  const profile = "https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D "
  return (
    <>
      <h1 className='bg-blue-950'>First Tailwind project</h1>
        <Card itemName="windows" btnText="control"></Card>
        <Card itemName="Mac" ></Card> 
    </>
  )
}

export default App
