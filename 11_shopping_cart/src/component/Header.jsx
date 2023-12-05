import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useHeaderContext } from "../context";

function Header() {
  const {show,size,setShow} = useHeaderContext();
  return (
    <div>
      <nav className={`bg-gray-800 p-0 ${show?'fixed top-0 left-0 right-0':''}`}>
        <div className="flex flex-shrink-0 items-center flex-row">
          <div className="ms-10">
            <Link
              className="h-8 w-auto text-white text-3xl"
              onClick={() => setShow(true)}
              to="/"
            >
              Shopping Cart
            </Link>
          </div>
          <div className="p-4 m-auto" style={{ width: "600px" }}>
            <form>
              <div className="relative">
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4  text-sm text-gray-900 border rounded-lg"
                  placeholder="Search Product"
                  required
                />
                <button
                  type="submit"
                  className=" text-white absolute end-2.5 bottom-2.5 bg-blue-700 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
          <button className="me-10" onClick={() => setShow(false)}>
            <Link to="/cart"><FaCartShopping className="text-green-600 text-5xl" /></Link>
            <span className="text-red-600 font-bold">{size} items</span>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Header;
