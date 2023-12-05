import React from "react";

function Card({item, handleClick}) {
  const { title, author, price, img } = item;
  return (
    <div className="rounded overflow-hidden shadow-lg m-3 p-2" style={{width:"250px", height:"500px"}}>
      <img className="w-full h-52"   src={img} alt="Image" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{author}</p>
        <p className="text-gray-700 text-base">Price - {price}Rs</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleClick(item)}>Add to Cart</button>
      </div>
    </div>
  );
}

export default Card;