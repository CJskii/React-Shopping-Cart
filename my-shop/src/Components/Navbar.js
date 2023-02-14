import React, { useState } from "react";
import "../Styles/Navi.css";
import Cart from "./ShoppingCart/Cart";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navi text-white w-full flex justify-between items-center p-4 fixed top-0 left-0 max-[320px]:p-2">
      <div className="logo">
        <h1 className="logo-name text-3xl max-[320px]:text-xl">CryptoCave</h1>
      </div>

      <button
        className="hamburger md:hidden focus:outline-none"
        onClick={toggleMenu}
      >
        <svg
          className="w-6 h-6 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="4" width="24" height="2" />
          <rect y="11" width="24" height="2" />
          <rect y="18" width="24" height="2" />
        </svg>
      </button>

      <div
        className={`menu md:flex md:items-center text-gray-300 bg-indigo-900 rounded ${
          isOpen ? "flex" : "hidden"
        }`}
      >
        <ul className="md:flex md:justify-between">
          <li className="navilink py-2 px-8 hover:text-gray-100 hover:bg-indigo-700 hover:rounded active:rounded cursor-pointer">
            <Link to="/" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li className="navilink py-2 px-8 hover:text-gray-100 hover:bg-indigo-700 hover:rounded active:rounded cursor-pointer">
            <Link to="/products" onClick={toggleMenu}>
              Products
            </Link>
          </li>
          <li className="navilink py-2 px-8 hover:text-gray-100 hover:bg-indigo-700 hover:rounded active:rounded cursor-pointer">
            <Link to="/contact" onClick={toggleMenu}>
              Contact us
            </Link>
          </li>
        </ul>
      </div>

      <div className="icons py-2 px-8 mr-4 max-[375px]:p-2">
        <Cart />
      </div>
    </nav>
  );
};

export default Navbar;
