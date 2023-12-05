import { useEffect, useState } from "react";

import "./App.css";
import DisplayProduct from "./component/DisplayProduct";
import Cart from "./component/Cart";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./Root";

function App() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);

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

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root show={show} setShow={setShow} size={cart.length}></Root>,
      children: [
        {
          path: "",
          element: (
            <DisplayProduct
              warning={warning}
              handleClick={handleClick}
            ></DisplayProduct>
          ),
        },
        {
          path: "cart",
          element: (
            <Cart
              cart={cart}
              setCart={setCart}
              handleChange={handleChange}
            ></Cart>
          ),
        },
      ],
    },
  ]);
 


  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
