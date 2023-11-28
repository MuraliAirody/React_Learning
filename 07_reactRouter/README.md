# Install react-router-dom
```
npm install react-router-dom
```
**Note a core library its a 3rd party library**

# React Router

```js

import { RouterProvider, createBrowserRouter } from 'react-router-dom'

function App() {
 
  const router = createBrowserRouter([
    {
      path:"/",                //represent the url
      element:<div>Hello</div> //respective element to be display
    }
  ])

  return (
    <>
      <RouterProvider router={router}/> {/*render the component inside app depending upon url*/}
    </>
  )
}

export default App

```
## Root

```js
import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

export default function Root() {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

```
**Note: An \<Outlet> should be used in parent route elements to render their child route elements. This allows nested UI to show up when child routes are rendered. If the parent route matched exactly, it will render a child index route or nothing if there is no index route.**

## Creating Routers
```js
/ const router = createBrowserRouter([
    {
      path:"/",
      element:<Root/>,
      children:[
        {
          path:"",
          element:<Home/>
        },
        {
          path:"about",
          element:<About/>,
        },
        {
          path:"contact",
          element:<Contact/>
        },
        {
          path:"user/:userId",   //http://localhost:5173/user/:500 can pass parameter with thr url
          element:<User/>
        },
        {
          path:"github",
          element:<GitHub/>
        }
      ]
    }
  ])
```

## Alterbative 

```js
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
```