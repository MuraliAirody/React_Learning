import React, { useState, useEffect } from "react";

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <>
      <div className="flex flex-col items-center gap-3 m-3 w-full">
        {cart?.map((item) => (
          <div className="flex justify-between items-center bg-gray-300 p-4 rounded-lg pb-16" style={{width:"80%"}} key={item.id}>
            <div className="flex items-center gap-4">
              <img className="w-24 h-24 object-cover" src={item.img} alt={item.title} />
              <p className="font-bold">{item.title}</p>
            </div>
            <div className="flex items-center gap-4">
              <button className="bg-blue-500 text-white px-2 py-1 rounded" onClick={() => handleChange(item, +1)}>+</button>
              <p>{item.amount}</p>
              <button className="bg-blue-500 text-white px-2 py-1 rounded" onClick={() => handleChange(item, -1)}>-</button>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-bold">{(item.price)*(item.amount)} RS</span>
              <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={() => handleRemove(item.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
      <div className="fixed bottom-0 left-0 right-0 bg-green-500 text-white p-4 flex justify-between items-center">
        <span className="font-bold text-lg">Total Price of your Cart</span>
        <span className="font-bold text-lg">Rs - {price}</span>
      </div>
    </>
  );
};

export default Cart;