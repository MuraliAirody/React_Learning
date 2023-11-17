
import FirstComponent from "./firstComponent"

function App() {
  
  const userName = "My Name" //{userName} is actually evaluated expression, we cant write complete js  in side html but we can pass final result
  return (
    <>
    <FirstComponent></FirstComponent>
    <h1>hello I am learning react, created this app using vite.{userName}</h1> 
    </>
  )
}

export default App
