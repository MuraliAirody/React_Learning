import React, { useState } from 'react'
import HigherOrderComponent from './HigherOrderComponent'

function HoverCounter({count,increment}) {
    // const[count,setCount] = useState(0);
    console.log("hover counter");

  return (
    <div>
       <h3>{count}</h3>
       {/* <button onMouseOver={()=>setCount(prev=>prev+1)}>Click</button> */}
       <button onMouseOver={increment}>Click</button>

    </div>
  )
}

export default HigherOrderComponent(HoverCounter)
