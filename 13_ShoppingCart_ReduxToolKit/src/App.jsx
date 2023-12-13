
import './App.css'
import RootLayout from './RootLayout';
import Cart from './components/Cart';
import DashBoard from './components/DashBoard';
import ProductList from './components/ProductList'
import 'bootstrap/dist/css/bootstrap.min.css';

import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'

function App() {

  const router = createBrowserRouter(
     createRoutesFromElements(
      <Route path='/' element={<RootLayout></RootLayout>}>
        <Route path='' element={<DashBoard></DashBoard>}></Route>
        <Route path="cart" element={<Cart></Cart>}></Route>
      </Route>
     )
  )

  return (
    <>
      <RouterProvider router={router}>

      </RouterProvider>
    </>
  )
}

export default App
