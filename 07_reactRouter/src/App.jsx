
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Root from './Root'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import User from './components/User/User'
import GitHub from './components/GitHub/GitHub'

function App() {

  // const router = createBrowserRouter([
  //   {
  //     path:"/",
  //     element:<Root/>,
  //     children:[
  //       {
  //         path:"",
  //         element:<Home/>
  //       },
  //       {
  //         path:"about",
  //         element:<About/>,
  //       },
  //       {
  //         path:"contact",
  //         element:<Contact/>
  //       },
  //       {
  //         path:"user/:userId",   //http://localhost:5173/user/:500 can pass parameter with thr url
  //         element:<User/>
  //       },
  //       {
  //         path:"github",
  //         element:<GitHub/>
  //       }
  //     ]
  //   }
  // ])

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root></Root>}>
      <Route path="" element={<Home></Home>}></Route>
      <Route path="about" element={<About></About>}></Route>
      <Route path="contact" element={<Contact></Contact>}></Route>
      <Route path="user/:userId" element={<User></User>}></Route>
      <Route path="github" element={<GitHub></GitHub>}></Route>

    </Route>
    )
  )
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
