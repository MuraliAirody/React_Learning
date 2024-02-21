import React, { memo } from 'react'

function DisplayUsers({user,handleDelete}) {
    console.log("display user");
  return (
    <li>
       {user.name}
       <button onClick={()=>handleDelete(user.id)}>Delete</button>
    </li>
  )
}

export default memo(DisplayUsers)
