import React from "react";
import "../Styles/Navi.css";
import Cart from "./ShoppingCart/Cart";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" navi text-white w-full flex justify-between items-center p-4">
      <div className="logo py-2 px-2">
        <h1 className="logo-name text-3xl">CryptoCave</h1>
      </div>

      <div className="menu flex justify-center items-center text-gray-300  bg-indigo-900 rounded">
        <ul>
          <li className="navilink py-2 px-8 hover:text-gray-100 active:bg-indigo-700 hover:bg-indigo-800 hover:rounded active:rounded cursor-pointer">
            <Link to="/">Home</Link>
          </li>
        </ul>
        <ul>
          <li className="navilink py-2 px-8 hover:text-gray-100 active:bg-indigo-700 hover:bg-indigo-800 hover:rounded active:rounded cursor-pointer">
            <Link to="/products">Products</Link>
          </li>
        </ul>
        <ul>
          <li className="navilink py-2 px-8 hover:text-gray-100 active:bg-indigo-700 hover:bg-indigo-800 hover:rounded active:rounded cursor-pointer">
            <Link to="/contact">Contact us</Link>
          </li>
        </ul>
      </div>

      <div className="icons py-2 px-8 mr-4">
        <Cart />
      </div>
    </nav>
  );
};

export default Navbar;
