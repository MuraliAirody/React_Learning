import React, { useState } from 'react'

function HigherOrderComponent(OldComponent) {
    console.log("inside higher order function");
  return function innerFunction(){
    console.log("inner function");
    const [count,setCount] = useState(0);

     return (
        <OldComponent count={count} increment={()=>setCount(prev=>prev+1)}/>
     )
  }
}

export default HigherOrderComponent
