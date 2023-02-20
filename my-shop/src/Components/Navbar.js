import React from "react";
import "../Styles/Navi.css";
import { Link } from "react-router-dom";
import Cart from "./ShoppingCart/Cart";

const Navbar = (props) => {
  return (
    <div
      data-testid="navbar"
      className="navbar bg-base-100"
      style={{ height: "8vh" }}
    >
      <div className="navbar-start">
        <Link className="btn btn-ghost normal-case text-xl" to="/">
          CryptoCave
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li tabIndex={0}>
            <Link to="/products">
              Products
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </Link>

            <ul className="menu bg-base-100 w-56 p-2 rounded-box">
              <li>
                <Link to="/products/ASIC Miners">ASIC Miners</Link>
              </li>
              <li>
                <Link to="/products/Graphic Cards">Graphic Cards</Link>
              </li>
              <li>
                <Link to="/products/Crypto Gadgets">Crypto Gadgets</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Cart itemCount={props.itemCount} basketTotal={props.basketTotal} />
      </div>
    </div>
  );
};

export default Navbar;
