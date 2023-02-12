import React from "react";
import "../Styles/Navi.css";
import Cart from "./ShoppingCart/Cart";

const Navbar = () => {
  return (
    <nav className=" navi text-white w-full flex justify-between items-center p-4">
      <div className="logo py-2 px-4">
        <h1 className="logo-name text-4xl">CryptoCave</h1>
      </div>

      <div className="menu flex justify-center items-center text-gray-300  bg-indigo-900 rounded">
        <ul>
          <li className="navilink py-2 px-8 hover:text-gray-100 active:bg-indigo-800 active:rounded cursor-pointer">
            Home
          </li>
        </ul>
        <ul>
          <li className="navilink py-2 px-8 hover:text-gray-100 active:bg-indigo-800 active:rounded cursor-pointer">
            Products
          </li>
        </ul>
        <ul>
          <li className="navilink py-2 px-8 hover:text-gray-100 active:bg-indigo-800 active:rounded cursor-pointer">
            Contact Us
          </li>
        </ul>
      </div>

      <div className="icons py-2 px-8">
        <Cart />
      </div>
    </nav>
  );
};

export default Navbar;
