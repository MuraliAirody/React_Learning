import { useState } from "react";

import "./App.css";
import Header from "./component/Header";
import DisplayProduct from "./component/DisplayProduct";
import Cart from "./component/Cart";

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

  return (
    <>
      <Header show={show} size={cart.length} setShow={setShow} ></Header>
      {show ? (
        <DisplayProduct
          warning={warning}
          handleClick={handleClick}
        ></DisplayProduct>
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}
    </>
  );
}

export default App;
