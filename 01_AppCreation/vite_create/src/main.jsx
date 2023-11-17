import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

/*
function MyFunction(){
  return(
    <>
       <h1>Custom react app</h1>
    </>
  )
}
*/

//whatever the html we are returning in jsx it wi;; converted to object/tree like structure with the help of bundler
//as we seen in a custom react app there we have object that used to be render in index.html
/*
const reactElement = {
  "tagName":"a",
  "props":{
      "href":"https://google.com",
      "target":"_blank"
  },
  "children":"Google"
}
*/

// const anotherElement = (<a href="https://google.com" target='_blank'>google</a>)

const userName = "My name"
const reactElement = React.createElement( //react follows their own syntax for object creation lke this object
  'a',
  {
    "href":"https://google.com",
    "target":"_basic"
  },
  "click here to visit google",
  userName //we used evaluated expression(final result), we cant do any js operation,bcz 
         //its an object so if we do any js operation inside html while converting into object it will cause an error eg:we cant do if else coding in object
)



ReactDOM.createRoot(document.getElementById('root')).render(
  //  App() // we can directly execute the function App here bcs anyhow its returning Object of HTML element
  //  <MyFunction></MyFunction>
  // MyFunction() 

  //so we know that whatever the things return by function is converted to object, so try ti use object directly here
  // reactElement //it will gives an error bcz in our custom app we have our custom render, here we have reactDOM its having its own objects key
  // anotherElement

  // reactElement // here we can use object created from React without any issue
  reactElement
  )
