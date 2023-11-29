import { useState } from 'react'

import './App.css'
import UserContextprovider from './context/UserContextProvider'
import Login from './component/Login'
import Profile from './component/Profile'

function App() {

  return (
    <>
      <UserContextprovider>
          <Login></Login>
          <Profile></Profile>
      </UserContextprovider>
    </>
  )
}

export default App
