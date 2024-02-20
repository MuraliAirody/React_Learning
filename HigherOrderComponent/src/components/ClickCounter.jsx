import React, { useState } from 'react'
import HigherOrderComponent from './HigherOrderComponent'

function ClickCounter({count,increment}) {
    // const[count,setCount] = useState(0);
    console.log("click counter");
  return (
    <div>
       <h3>{count}</h3>
       {/* <button onClick={()=>setCount(prev=>prev+1)}>Click</button> */}
       <button onClick={increment}>Click</button>
    </div>
  )
}
// const enhanced = HigherOrderComponent(ClickCounter)
// console.log(enhanced)

export default HigherOrderComponent(ClickCounter)
