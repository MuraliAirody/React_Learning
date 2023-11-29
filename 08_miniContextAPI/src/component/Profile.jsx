  import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/userContext'
  
  export default function Profile() {

    const{user} = useContext(UserContext)
    return (
      <div>
          {user===null&&<div>Please Login</div> }
          {user && <div>welcome {user.userName}</div> }
      </div>
    )
  }
  