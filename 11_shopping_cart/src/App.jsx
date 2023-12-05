import { useEffect, useState } from "react";

import "./App.css";
import DisplayProduct from "./component/DisplayProduct";
import Cart from "./component/Cart";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import {
  CartContextProvider,
  DisplayContextProvider,
  HeaderContextProvider,
} from "./context";

function App() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);
  const [size, setSize] = useState(0);

  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id) isPresent = true;
    });
    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    } else {
      setCart([...cart, item]);
    }
  };

  const handleChange = (item, d) => {
    let ind = -1;
    cart.forEach((data, index) => {
      if (data.id === item.id) ind = index;
    });
    const tempArr = cart;
    tempArr[ind].amount += d;

    if (tempArr[ind].amount === 0) tempArr[ind].amount = 1;
    setCart([...tempArr]);
  };

  useEffect(() => {
    setSize(cart.length);
  }, [cart]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
          path: "",
          element: <DisplayProduct></DisplayProduct>,
        },
        {
          path: "cart",
          element: <Cart></Cart>,
        },
      ],
    },
  ]);

  return (
    <>
      <HeaderContextProvider value={{ size, setShow, show }}>
        <DisplayContextProvider value={{ warning, handleClick }}>
          <CartContextProvider value={{ cart, setCart, handleChange }}>
            <RouterProvider router={router}></RouterProvider>
          </CartContextProvider>
        </DisplayContextProvider>
      </HeaderContextProvider>
    </>
  );
}

export default App;
