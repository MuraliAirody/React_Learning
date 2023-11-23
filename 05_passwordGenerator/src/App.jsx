import { useState, useEffect, useCallback } from 'react'
import { MdOutlineRestartAlt } from "react-icons/md";
import {Alert} from "@mui/material"

function App() {

  const [length, setLength] = useState(6)
  const [numberValid, setNumberValid] = useState(false)
  const [charValid, setCharValid] = useState(false)
  const [password, setPassword] = useState("")
  const [openAlert,setOpenAlert] = useState(false)

  const generatePassword = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (charValid) {
      str += "`!@#$%^&*()_-+=/*?+\"\'\\;\/<>,.:{}[]"
    }
    if (numberValid) {
      str += "0123456789"
    }

    for (let i = 1; i <= length; i++) {
      let random = Math.floor(Math.random() * str.length + 1)
      pass += str[random]
    }
    setPassword(pass)
  },[length,numberValid,charValid])

  useEffect(() => {
    generatePassword()
  }, [length, numberValid, charValid])

  const copyPasswordToClipBoard = ()=>{
    window.navigator.clipboard.writeText(password)
    setOpenAlert(true)

    setTimeout(()=>{
      setOpenAlert(false)
    },2000)
  }

  const handleReset = () => {
    generatePassword()
  }
  return (
    <>
      <div className='container bg-secondary w-80' style={{ margin: '100px auto', padding: '20px', borderRadius: '30px' }}>
        <div className="d-flex flex-column align-items-center gap-4 w-100 p-5">
           <h1>Password Generator</h1>
           
           {openAlert && <Alert severity="success">Copied to clipboard!</Alert>}
          <div className="input-group mb-3">
            <input value={password} type="text" readOnly className="form-control rounded-pill " placeholder="Password" />
            <button onClick={copyPasswordToClipBoard} className="btn btn-primary rounded-pill " type="button">Copy</button>
          </div>

          <div className='d-flex gap-4 align-items-center w-100  p-0'>
            <div className="input-group flex-nowrap">
            <label htmlFor="">Length({length})</label>
              <input type="range" style={{ cursor: 'pointer' }} min={6} max={50} value={length} name="length" onChange={(e) => { setLength(e.target.value) }} />
            </div>
            <div className="input-group ">
              <input type="checkbox" name="Character" id="" onChange={(e) => { setNumberValid(e.target.checked) }} />
              <label htmlFor="">Number</label>
            </div>
            <div className="input-group ">
              <input type="checkbox" name="Number" id="" onChange={(e) => { setCharValid(e.target.checked) }} />
              <label htmlFor="">Character</label>
            </div>
            <div className="input-group">
              <span onClick={handleReset} style={{ cursor: 'pointer', fontSize: '30px' }}><MdOutlineRestartAlt></MdOutlineRestartAlt>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
