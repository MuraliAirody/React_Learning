import React,{useState,useContext} from "react";

import UserContext from "../context/userContext";

export default function Login() {
    const [userName,setUserName] = useState('')
    const [password,setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit=(e)=>{
       e.preventDefault()
       setUser({
        userName,
        password
       })
    }
  return (
    <div>
      <form action="">
        <input type="text" placeholder="userName" value={userName} onChange={(e)=>setUserName(e.target.value)}/>
        <br /> <input type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <br /> <button onClick={handleSubmit}>Login</button>
      </form>
    </div>
  )
}
