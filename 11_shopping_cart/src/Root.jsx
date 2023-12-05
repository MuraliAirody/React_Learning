import React from 'react'
import Header from './component/Header'
import { Outlet } from 'react-router-dom'

function Root({show,setShow,size}) {
  return (
    <div>
      <Header  show={show} setShow={setShow} size={size}></Header>
      <Outlet></Outlet>
    </div>
  )
}

export default Root
