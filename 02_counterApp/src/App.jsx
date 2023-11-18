import { useState } from 'react'

import './App.css'



function App() {
  // let counter = 15; //here we are able to increase the counter value by clicking on addCounter button
                  //but the updated counter value is not rendering on time
                  // "so the react is the responsible for UI updation, we can't do it manually here"

/*
in javascript we have to use document to get the reference of particular element where we to update the element
but in react with help of hook we can update single state in the UI in many places
*/

let [counter,setCounter] =useState(10);
let [message,setMessage] = useState("")

const addCount = ()=>{
    if(counter<20){
      counter = counter+1
    setCounter(counter)
    console.log("counter added",counter)
    setMessage("")
    }else{
      console.log("counter reached its limit")
    setMessage("counter reached its limit")
    }
}

const deleteCount =()=>{
   if(counter>0){
    counter = counter -1;
   setCounter(counter)
   console.log("counter delete",counter);
   setMessage("")
   }else{
    console.log("counter reached its limit")
    setMessage("counter reached its limit")
   }
}
                                  
  return (
    <>
      <div className='container'>
        <p>The counter value {counter}</p>
        <button className='addBtn' onClick={addCount}>Add count</button>
        <br />
        <button className='deleteBtn' onClick={deleteCount}>Delete count</button>
        <h3>{message}</h3>
      </div>
    </>
  )
}


export default App
